const webpack = require('webpack');
const ClosureCompilerPlugin = require('webpack-closure-compiler');

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
    new ClosureCompilerPlugin({
      //jsCompiler: true,
      compiler: {
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'ADVANCED'
      }
    })
  ]
};
