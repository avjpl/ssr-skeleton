const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { PORT } = require('./webpack.constants');

const developmentConfig = merge([
  {
    output: {
      devtoolModuleFilenameTemplate: "webpack:///[absolute-resource-path]",
    },
  },
  parts.generateSourceMaps({
    type: "cheap-module-eval-source-map"
  }),
  parts.loadCSS(),
  parts.loadImages(),
]);

exports.developmentConfig = developmentConfig;
