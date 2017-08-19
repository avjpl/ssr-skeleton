const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
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
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    foundation: 'Foundation',
  }),
];

if (process.env.NODE_ENV === 'development') {
  plugins.push(new webpack.NoEmitOnErrorsPlugin());
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

if (process.env.NODE_ENV !== 'development') {
  plugins.push(
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
    })
  )
}

console.log(plugins);

exports.plugins = plugins;
