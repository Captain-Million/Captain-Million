var fs = require('fs');
var externals = fs.readdirSync('node_modules')
  .filter(name => ['.bin'].indexOf(name) === -1)
  .map(mod => 'commonjs ' + mod)
console.log(externals)
