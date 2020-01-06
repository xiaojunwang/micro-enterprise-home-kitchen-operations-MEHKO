const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

//use express middleware to handle cookies (JWT) - json web tokens
server.express.use(cookieParser());

// use express middleware to populate current user.
//Decode the JWT so we can get the userId on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // put the userId onto the req for future requests to access
    req.userId = userId;
  }
  next();
});

// 2. Create a middleware that populates the user on each request
//we want access to the user on each request if they're logged in

server.express.use(async (req, res, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) return next();
  const user = await db.query.user(
    { where: { id: req.userId } }, //find user where id is equal to the request id
    '{ id, permissions, email, name }'
  );
  req.user = user; //put user on the request
  next();
});

//start
server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
      rejectUnauthorized: false
    }
  },
  deets => {
    console.log(`Server is now running on port http:/localhost:${deets.port}`);
  }
);
