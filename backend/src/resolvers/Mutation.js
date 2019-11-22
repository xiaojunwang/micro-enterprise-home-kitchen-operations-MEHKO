const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto'); //for encrypting token
const { promisify } = require('util'); //converts randomByes to a promise
const { transport, makeANiceEmail } = require('../mail');
const stripe = require('../stripe');
const { hasPermission } = require('../utils');

const Mutations = {
  async createItem(parent, args, ctx, info) {
    //check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in to do that.');
    }
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          //argument for createItem method
          //create a relationship between the Item <-> User
          user: {
            connect: {
              id: ctx.request.userId,
            },
          },
          ...args,
        },
      },
      info
    );
    return item;
  },

  updateItem(parent, args, ctx, info) {
    //1. take copy of the updates
    const updates = { ...args };
    //2. remove the ID from updates because ID is not something we want to update
    delete updates.id;
    //3. run the updateItem method
    return ctx.db.mutation.updateItem(
      {
        data: updates, //data tells us what data we want to update
        where: {
          //where tells us which item to update and id is what identifies the item we want to update
          id: args.id,
        },
      },
      info
      //info contains the query we send from client side and
      //tells the mutation what to return, in this case based on our schema, we're telling it to return an Item
    );
  },

  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    //1. find the item

    const item = await ctx.db.query.item({ where }, `{id title user { id }}`);
    //2. check if they own that item or have the permission
    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissionsToDelete = ctx.request.user.permissions.some(
      permission => ['ADMIN', 'ITEMDELETE'].includes(permission)
    );

    if (!ownsItem && !hasPermissionsToDelete) {
      throw new Error("you don't have permission to do that!");
    }
    //3. delete it
    return ctx.db.mutation.deleteItem({ where }, info);
  },

  async signup(parent, args, ctx, info) {
    //lower cases the email i.e benny@gmail.com will be same as Benny@gmail.com
    args.email = args.email.toLowerCase();
    //hash their password
    // args.password = 'dog123' is a NO NO NO
    const password = await bcrypt.hash(args.password, 10);
    // create the user in the database
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password: password,
          permissions: { set: ['USER'] }, //everyone who signs up defaults to USER permission
          // name: args.name,
          // email: args.email,
          // password: args.password
          // ...args takes care all of that
        },
      },
      info
    );
    //create the JWT token for user so they stay signed in after registering
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // we set the jwt as a cookie on the response
    ctx.response.cookie('token', token, {
      httpOnly: true, //cannot access cookie via javascript
      maxAge: 1000 * 60 * 60 * 24 * 365, //1 year cookie  //how long do you want this cookie to last
    });
    // return user to the the broswer
    return user;
  },

  async signin(parent, { email, password }, ctx, info) {
    //1. check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email: email } }); //where email is equal to email
    //2. check if their password is correct
    if (!user) {
      throw new Error(`No user found for email ${email}`);
    }
    const valid = await bcrypt.compare(password, user.password); //compare entered password with db logged password
    if (!valid) {
      throw new Error('Invalid Password');
    }
    //3. generate the JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    //4. set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    //5. return the user
    return user;
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'Goodbye!' };
  },

  async requestReset(parent, args, ctx, info) {
    // 1. Check if this is a real user
    const user = await ctx.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(`No such user found for email ${args.email}`);
    }
    // 2. Set a reset token and expiry on that user
    const randomBytesPromiseified = promisify(randomBytes);
    const resetToken = (await randomBytesPromiseified(20)).toString('hex');
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
    const res = await ctx.db.mutation.updateUser({
      //after generating the resetToken, save it to the user
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry },
    });
    // console.log(res);
    // 3. Email them that reset token
    const mailRes = await transport.sendMail({
      from: 'Bennyxjwang@gmail.com',
      to: user.email,
      subject: 'Your password reset token',
      html: makeANiceEmail(`Your MEHKO password reset token is here!
       \n\n 
       <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">Click here to reset your password on MEHKO</a>`),
    });

    //4. return the success message
    return { message: 'Thanks!' };
  },

  async resetPassword(parent, args, ctx, info) {
    //1. check if the passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error("Your Passwords Don't Match");
    }
    //2. check if its a legit reset token + 3. check if it's expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000, //gte = greater than or equal
      },
    }); //this grab the first user where we search for users
    if (!user) {
      throw new Error('This token is either invalid or expired');
    }
    //4. hash their new password
    const password = await bcrypt.hash(args.password, 10);
    //5. save the nw password to the user and remove old resetToken fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        //update the data
        password: password,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });
    //6. generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    //7. set the JWT cookie
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    //8. return the new user
    return updatedUser;
  },

  async updatePermissions(parent, args, ctx, info) {
    //1. check if they're logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in.');
    }
    //2. query the current user
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId,
        },
      },
      info
    );
    //3. check if they have permissions to do this
    hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE']);
    //4. update the permissions
    return ctx.db.mutation.updateUser(
      {
        data: {
          //1. pass the data that needs to be updated
          permissions: {
            set: args.permissions, //have to use set to update because permissions is ENUM
          },
        },
        where: { id: args.userId }, //2. pass where the data needs to be updated
      },
      info
    ); //3. pass info of the query to the updated user
  },

  async addToCart(parent, args, ctx, info) {
    //1. make sure they are signed in
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('You must be signed in to add item to cart');
    }
    //2. query the users current cart
    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        item: { id: args.id },
      },
    });
    // console.log(existingCartItem); //existingCartItem returns a promise, therefore need to await this
    //3. check if that item is already in their cart and increment by 1 if it is
    if (existingCartItem) {
      console.log('This item is already in their cart');
      return ctx.db.mutation.updateCartItem(
        {
          where: { id: existingCartItem.id }, //where id is equal to existingcartitem.id
          data: { quantity: existingCartItem.quantity + 1 },
        },
        info
      );
    }
    //4. if it's not, create a fresh cartItem for that user.
    return ctx.db.mutation.createCartItem(
      {
        data: {
          user: {
            connect: { id: userId }, //inorder to connect relationship in prisma, need to use this syntax
          },
          item: {
            connect: { id: args.id },
          },
        },
      },
      info
    );
  },

  async removeFromCart(parent, args, ctx, info) {
    //1. find the cart item
    const cartItem = await ctx.db.query.cartItem(
      {
        where: {
          id: args.id,
        },
      },
      `{id, user { id }}` //instead of passing info, we need to find out the user that owns the cart item.
    );
    //1.5 make sure we found an item
    if (!cartItem) throw new Error('No cart Item Found');
    //2. make sure they own that cart item
    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error("You don't own this item");
    }
    //3. delete that cart item
    return ctx.db.mutation.deleteCartItem(
      {
        where: {
          id: args.id,
        },
      },
      info
    );
  },

  async createOrder(parent, args, ctx, info) {
    //1. query the current user and make sure they are signed in
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('You must be signed in to complete this order');
    }
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `{
        id 
        name 
        email 
        cart { 
          id 
          quantity 
          item { title price id description image largeImage }
      }}`
    );
    //2. recalculate the total for the price - reason, you don't want price to be dictated on client side, user can use JS to change charge amount to $.01
    const amount = user.cart.reduce(
      (tally, cartItem) => tally + cartItem.item.price * cartItem.quantity,
      0
    );
    console.log(`going to charge for a total of ${amount}`);
    //3. create the stripe charge(turn token into money amount)
    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'USD',
      source: args.token,
    });
    //4. convert the cartitems to orderitems
    const orderItems = user.cart.map(cartItem => {
      const orderItem = {
        ...cartItem.item, //copy every single filed, since we don't want to make a relationship as user can temper with that.
        quantity: cartItem.quantity,
        user: { connect: { id: userId } },
      };
      delete orderItem.id; //since we don't want the id
      return orderItem; //end up with an array of order items that has been disconnected from the actual item
    });
    //5. create the order
    const order = await ctx.db.mutation.createOrder({
      data: {
        //we want to pass some data for the order, and that data will have some...
        total: charge.amount, //charge is coming back from stripe
        charge: charge.id,
        items: { create: orderItems },
        user: { connect: { id: userId } },
      },
    });
    //6. clean up - clear the users cart
    const cartItemsIds = user.cart.map(cartItem => cartItem.id); //give us an array of item ids that's current in user's cart
    await ctx.db.mutation.deleteManyCartItems({
      where: {
        id_in: cartItemsIds, //delete if the id is in the user's cart
      },
    });
    //7. return the order to the client
    return order;
  },
};

module.exports = Mutations;
