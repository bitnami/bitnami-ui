const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// Config
const config = require('./package.json');

// Basic config
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'hex.min.js',
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
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        extractComments: {
          condition: /^!!/,
          banner: (filename) => {
            return `The HEx design system is released under the Apache-2.0 license. For license information please see ${filename}`;
          }
        }
      })
    ]
  }
};
