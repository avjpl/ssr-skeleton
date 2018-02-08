const path = require('path');
const webpack = require('webpack');

const DashboardPlugin = require('webpack-dashboard/plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const env = process.env.NODE_ENV === 'development';
const analyse = process.env.ANALYSE === 'analyse';

const plugins = [
  new CopyWebpackPlugin(
    [
      {
        from: path.resolve(__dirname, '..', 'src', 'views'),
        to: path.resolve(__dirname, '..', 'dist', 'views'),
      },
    ],
    {
      debug: 'debug',
    }
  ),
  new StyleLintPlugin({
    files: '**/*.[sp]?(a|c)ss',
    lintDirtyModulesOnly: true,
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    foundation: 'Foundation',
  }),
  ...(env !== 'production' ? [
      new webpack.NormalModuleReplacementPlugin(/(.*)syncRoutes(\.*)/, resource => {
        resource.request = resource.request.replace(/syncRoutes/, 'asyncRoutes')
      })
  ] : []),
  ...(env === 'production' ? [
    new webpack.DefinePlugin({
      'process.env': {
        'WEBPACK': JSON.stringify(true),
        'NODE_ENV': JSON.stringify('production'),
      },
    })
  ] : []),
  ...(env === 'production' ? [
    new webpack.optimize.UglifyJsPlugin({
      ie8: true,
      compress: {
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    })
  ] : []),
  ...(env === 'development' ? [new DashboardPlugin()] : []),
  ...(env === 'development' ? [new webpack.NamedModulesPlugin()] : [new webpack.HashedModuleIdsPlugin()]),
  ...(env === 'development' ? [
    new webpack.DefinePlugin({
      'process.env': {
        'WEBPACK': JSON.stringify(true),
        'NODE_ENV': JSON.stringify('development'),
      },
    })
  ] : []),
  ...(env === 'development' ? [new webpack.NoEmitOnErrorsPlugin()] : []),
  ...(env === 'development' ? [new webpack.HotModuleReplacementPlugin()] : []),
  ...(analyse ? [new BundleAnalyzerPlugin()] : []),
];

exports.plugins = plugins;
