const webpack = require('webpack');
const merge = require('webpack-merge');

const { serverCommonConfig } = require('./config/webpack.server.common');

module.exports = env => {
  return serverCommonConfig;
};
