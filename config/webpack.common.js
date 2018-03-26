const path = require('path');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { plugins } = require('./webpack.plugins');
const { entries } = require('./webpack.entry');

const { PATHS } = require('./webpack.constants');

const commonConfig = (env) => merge([
  {
    entry: [
      ...entries(env),
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
      PATHS.app,
    ],
  }),
  parts.loadFonts({
    options: {
      name: 'fonts/[name].[ext]',
    },
  }),
  parts.lintJavaScript({ include: PATHS.app }),
]);

exports.commonConfig = commonConfig;
