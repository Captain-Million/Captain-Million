var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');
var cssnano = require('cssnano');

module.exports = {
  devtool: 'hidden-source-map',

  entry: {
    app: [
      './client/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-helmet',
      'redux',
      'react-redux',
      'redux-thunk'
    ]
  },

  output: {
    path: __dirname + '/dist/',
    filename: '[name].[chunkhash].js',
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
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                importLoaders: 1,
                localIdentName: '[hash:base64]',
              }
            },
            'postcss-loader'
          ]
        }),
      }, {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.jsx*$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: 'url-loader?limit=10000',
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: [ 'vendor', 'manifest' ]
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkHash].css',
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    }),
  ]
};
