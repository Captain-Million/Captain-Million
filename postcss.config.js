var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');
var cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcssFocus(),
    cssnext({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    cssnano({
      autoprefixer: false
    }),
    postcssReporter({
      clearMessages: true,
    }),
  ]
}
