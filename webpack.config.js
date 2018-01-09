const webpack = require('webpack');

// Basic config
module.exports = {
  entry: './js/index.js',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'bitnami.ui.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
    ],
  }
};
