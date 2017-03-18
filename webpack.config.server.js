var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {

  entry: path.resolve(__dirname, 'server/server.js'),

  output: {
    path: __dirname + '/dist/',
    filename: 'server.bundle.js',
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },

  target: 'node',

  node: {
    __filename: false,
    __dirname: false,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0',
          ],
          plugins: [
            [
              'babel-plugin-webpack-loaders', {
                'config': './webpack.config.babel.js',
                "verbose": false
              }
            ]
          ]
        },
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  plugins: [
    new webpack.IgnorePlugin(/vertx/)
  ],

  externals: nodeModules
};
