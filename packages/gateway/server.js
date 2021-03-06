const express = require('express');
const bodyParser = require('body-parser');

const { makeExecutableSchema } = require('graphql-tools');

// The GraphQL schema in string form
const typeDefs = `
  type Query { hey: String! }
`;

// The resolvers
const resolvers = {
    Query: { hey: () => 'hey there' },
};

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// Initialize the app
const app = express();

// Start the server
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
});