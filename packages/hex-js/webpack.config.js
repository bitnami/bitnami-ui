const webpack = require('webpack');
// Config
const config = require('./package.json');

// Basic config
module.exports = {
  entry: './src/index.js',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'hex.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'string-replace-loader',
        options: {
          search: '{VERSION}',
          replace: config.version,
          flags: 'g'
        }
      }
    ],
  }
};
