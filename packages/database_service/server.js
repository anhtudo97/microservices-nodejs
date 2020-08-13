const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const schema = require('./config/data/schema');

const config = require('./config');

const { port } = config;

// Initialize the app
const app = express();

app.use(bodyParser.json());

require('./dbUtil/')(config);
require('./routes/get')(app);
// Start the server
app.listen(port, () => {
    console.log(`Go to http://localhost:${port}`);
});