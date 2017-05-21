const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // plugin to remove previously built files
const path = require('path'); // required by CleanWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: [
      'babel-polyfill',
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './client/index.js',
    ]
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'client',
      'node_modules',
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              camelCase: true,
              importLoaders: 1,
              sourceMap: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      }, {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.jsx*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel-loader',
      }, {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'url-loader?limit=10000',
      }, {
        test: /\.(ico)$/i,
        loader: 'url-loader?limit=10000',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
  ]
};
