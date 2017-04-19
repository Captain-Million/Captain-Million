try {
  const getBabelRelayPlugin = require('babel-relay-plugin');
  const schema = require('./server/models/graphql.json');

  module.exports = getBabelRelayPlugin(schema.data);
} catch(e) {
  if (process.NODE_ENV === 'production') {
    console.error('Fail to set up Relay!');
    throw e;
  }

  function noop() {
    return {
      visitor: {
      }
    };
  }

  module.exports = noop;
}

