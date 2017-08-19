const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { PORT } = require('./webpack.constants');

const developmentConfig = merge([
  // parts.devServer({
  //   // Customize host/port here
  //   host: process.env.HOST || '0.0.0.0',
  //   port: process.env.PORT || PORT,
  // }),
  parts.loadCSS(),
  parts.loadImages(),
]);

exports.developmentConfig = developmentConfig;
