const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
    historyApiFallback: true,
    compress: true,
    port: 9900
  },
  devtool: 'source-map',
  stats: 'errors-only',
  mode: 'development'
});
