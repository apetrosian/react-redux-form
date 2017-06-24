const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: APP_DIR + '/index.js',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },

  module: {
    rules: [
      {
        // enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader",
        ]
      }
    ],
    loaders: [
      {
        test : /\.js$/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
