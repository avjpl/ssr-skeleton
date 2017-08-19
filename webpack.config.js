const webpack = require('webpack');
const merge = require('webpack-merge');

const { commonConfig } = require('./config/webpack.common');
const { developmentConfig } = require('./config/webpack.development');
const { productionConfig } = require('./config/webpack.production');

module.exports = env => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
