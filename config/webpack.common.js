const path = require('path');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { plugins } = require('./webpack.plugins');

const { PORT, PATHS } = require('./webpack.constants');

const commonConfig = merge([
  {
    entry: [
      // `webpack-dev-server/client?http://0.0.0.0:${ PORT }/`,
      `webpack-hot-middleware/client?http://0.0.0.0:${ PORT }/`,
      PATHS.client,
    ],
    output: {
      path: PATHS.dist,
      filename: '[name].js',
      publicPath: '/',
    },
    plugins: plugins,
  },
  parts.loadJavaScript({
    include: [
      PATHS.client,
      PATHS.app
    ]
  }),
  parts.loadFonts({
    options: {
      name: 'fonts/[name].[ext]',
    },
  }),
  parts.lintJavaScript({ include: PATHS.app }),
]);

exports.commonConfig = commonConfig;
