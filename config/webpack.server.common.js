const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const parts = require('./webpack.parts');

const { PATHS } = require('./webpack.constants');

const serverCommonConfig = merge([
  {
    entry: PATHS.server,
    output: {
      filename: 'server.js',
      path: PATHS.dist,
    },
    target: 'node',
    node: {
      __filename: true,
      __dirname: true
    },
    externals: [nodeExternals()],
  },
  parts.loadImages(),
  parts.loadJavaScript({
    exclude: /node_modules/
  }),
  parts.lintJavaScript({ include: PATHS.server }),
]);

exports.serverCommonConfig = serverCommonConfig;
