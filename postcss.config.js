const path = require('path');

module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-flexbox': {},
    'postcss-each': {},
    'postcss-font-magician': {
      variants: {
        Raleway: {
          300: ['woff2'],
          700: ['woff2'],
        },
      },
    },
    'postcss-font-awesome': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'postcss-mixins': {},
    'postcss-advanced-variables': {},
    'postcss-custom-selectors': {},
    'postcss-custom-media': {},
    'postcss-custom-properties': {},
    'postcss-media-minmax': {},
    'postcss-color-function': {},
    'postcss-nesting': {},
    'postcss-nested': {},
    'postcss-atroot': {},
    'postcss-property-lookup': {},
    'postcss-extend': {},
    'postcss-selector-matches': {},
    'postcss-selector-not': {},
    'postcss-reporter': {
      clearMessages: true
    },
  },
};
