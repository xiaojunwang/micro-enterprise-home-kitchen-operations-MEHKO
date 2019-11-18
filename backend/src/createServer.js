//This is where we will import GraphQL Yoga server.

const { GraphQLServer } = require("graphql-yoga");

const Mutation = require("./resolvers/Mutation");
const Query = require("./resolvers/Query");

const db = require("./db");

//create the GraphQL Yoga Server
function createServer() {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Mutation: Mutation,
      Query: Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: request => ({ ...request, db })
  });
}

module.exports = createServer;
