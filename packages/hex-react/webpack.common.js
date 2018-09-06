const path = require('path');

// Constants
const source = path.resolve(__dirname, 'src/index.js');
const dest = path.resolve(__dirname, 'lib');

module.exports = {
  entry: source,
  output: {
    path: dest,
    filename: 'hex.react.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  externals: {
    // Use external version of React
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
};
