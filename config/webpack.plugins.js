const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/*
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
*/

const plugins = [
  // new webpack.DefinePlugin({
  //   PRODUCTION: JSON.stringify(true),
  // }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '..', 'src', 'views'),
      to: path.resolve(__dirname, '..', 'dist', 'views'),
    }
  ], {
    debug: 'debug'
  }),
  new StyleLintPlugin({
    files: '**/*.[sp]?(a|c)ss',
    lintDirtyModulesOnly: true,
  }),
  new DashboardPlugin(),
  /*
  new HtmlWebpackPlugin({
    title: 'Webpack demo',
    // template: path.resolve(__dirname, '..', 'src', 'views', 'layouts', 'layout.hbs'),
    template: 'src/index.html',
  }),
  */
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    foundation: 'Foundation',
  }),
];

exports.plugins = plugins;
