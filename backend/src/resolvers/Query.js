const { forwardTo } = require("prisma-binding");
const { hasPermission } = require("../utils");

const Query = {
  items: forwardTo("db"),
  // async items(parents, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),

  me(parent, args, ctx, info) {
    //check if there is a current userId
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user({ where: { id: ctx.request.userId } }, info);
  },

  async users(parent, args, ctx, info) {
    //0. Check if they're loged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in");
    }
    //1. check if the user has the permissions to query all the users, don't want anyone to come into our api and adjust
    hasPermission(ctx.request.user, ["ADMIN", "PERMISSIONUPDATE"]); //user must have admin or permissionupdate to proceed
    //2. if they do, query all the users
    return ctx.db.query.users({}, info); //empty object because we want to query all of the users
    //"info" includes the graphql query that contains the fields that we're requesting from the frontend
  }
};

module.exports = Query;

//info is the actual query that's coming from the client side.
//user will end up having cart, permission, name, email address, orders, etc. all these user query is going to get quite large
//so we want to be able to pass the actual query from the front end so that when we just want the user's email address, we're not getting the whole cart at the exact same time so that's why we pass info to it.
