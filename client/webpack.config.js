var path = require('path');

var dbxBazelUtils = require('dbx-bazel-utils');

var env = dbxBazelUtils.initBazelEnv(__dirname);

module.exports = {
  entry: ['index.jsx'],
  output: {
    filename: 'bundle.js',
    path: env.outputRoot,
  },
  module: {
    rules: [
      {
        test : /\.jsx?/,
        loader : 'babel-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.ts'],
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "src"),
    ],
  },
}
