const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// Dest folder
const dest = path.resolve(__dirname, 'lib');

module.exports = merge(common, {
  output: {
    path: dest,
    filename: 'hex.react.min.js',
    libraryTarget: 'umd',
  },
  mode: 'production',
});
