const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// Basic config
module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'bitnami.ui.min.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};
