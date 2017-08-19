const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { PORT } = require('./webpack.constants');

const developmentConfig = merge([
  parts.loadCSS(),
  parts.loadImages(),
]);

exports.developmentConfig = developmentConfig;
