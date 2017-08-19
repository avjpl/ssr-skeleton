const path = require('path');
const glob = require('glob');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { PATHS } = require('./webpack.constants');

const productionConfig = merge([
  parts.extractCSS({
    use: [
      {
        loader: 'css-loader',
        options: { importLoaders: 2 },
      },
      'sass-loader',
      'postcss-loader',
    ],
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: './images/[name].[ext]',
    },
  }),
  parts.purifyCSS({
    paths: glob.sync(`${ PATHS.app }/**/*.js`, { nodir: true }),
  }),
]);

exports.productionConfig = productionConfig;
