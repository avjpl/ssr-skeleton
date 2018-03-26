const { PORT, PATHS } = require('./webpack.constants');

const entries = (env) => env === 'development'
  ? [PATHS.client, `webpack-hot-middleware/client?http://0.0.0.0:${PORT}/`]
  : [PATHS.client];

exports.entries = entries;
