const path = require('path');

exports.PORT = 3100;
exports.PATHS = {
  client: path.resolve(__dirname, '..', 'src', 'client'),
  app: path.resolve(__dirname, '..', 'src'),
  build: path.resolve(__dirname, '..', 'build'),
  dist: path.resolve(__dirname, '..', 'dist'),
  server: path.resolve(__dirname, '..', 'src', 'server'),
};
