const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@bitnami/hex-react': path.join(__dirname, '..'),
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
  },
};
