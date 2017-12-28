const path = require('path');

exports.PORT = 3100;
exports.PATHS = {
  client: path.resolve(__dirname, '..', 'src', 'client'),
  app: path.resolve(__dirname, '..', 'src'),
  build: path.resolve(__dirname, '..', 'build'),
  root: path.resolve(__dirname, '..'),
  dist: path.resolve(__dirname, '..', 'dist'),
  views: path.resolve(__dirname, '..', 'src'),
  server: path.resolve(__dirname, '..', 'src', 'server'),
  template: path.resolve(__dirname, '..', 'src', 'views', 'layouts'),
};
