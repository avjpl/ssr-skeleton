const path = require('path');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const { plugins } = require('./webpack.plugins');
const { entries } = require('./webpack.entry');

const { PATHS } = require('./webpack.constants');

const env = process.env.NODE_ENV === 'development';

const commonConfig = (env) => merge([
  {
    entry: [
      ...entries(env),
    ],
    output: {
      path: PATHS.dist,
      ...(
        env
          ? { filename: '[name].js' }
          : { filename: '[name].[chunkhash:6].js' }
      ),
      publicPath: '/',
    },
    plugins: plugins,
  },
  {
    ...(
      !env
        ? parts.extractBundles([
          {
            name: 'vendor',
            minChunks: ({ resource }) => (
              resource &&
              resource.indexOf('node_modules') >= 0 &&
              resource.match(/\.js$/)
            ),
          },
        ])
        : {}
    ),
  },
  {
    ...(
      !env
        ? parts.extractBundles([
          {
            name: 'manifest',
            minChunks: Infinity,
          },
        ])
        : {}
    ),
  },
  parts.loadJavaScript({
    include: [
      PATHS.client,
      PATHS.app,
    ],
  }),
  parts.loadFonts({
    options: {
      name: 'fonts/[name].[hash:6].[ext]',
    },
  }),
  parts.lintJavaScript({ include: PATHS.app }),
  {
    ...(
      !env
        ? parts.clean(
          [ PATHS.dist ],
          {
            root: PATHS.root,
            verbose: true,
          }
        )
        : {}
    ),
  },
  {
    ...(
      !env
        ? parts.extractManifest({})
        : {}
    ),
  },
  {
    ...(
      !env
        ? parts.html({
          title: 'change me',
          template: `${ PATHS.template }/layout.hbs`,
          filename: `${ PATHS.dist }/views/layouts/layout.hbs`,
        })
        : {}
    ),
  },
]);

exports.commonConfig = commonConfig;
