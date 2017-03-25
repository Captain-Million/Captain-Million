const getBabelRelayPlugin = require('babel-relay-plugin');
const schema = require('./server/models/graphql.json');

module.exports = getBabelRelayPlugin(schema.data);

