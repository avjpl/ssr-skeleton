const path = require('path');

/*
  Required by evennode
    process.env.PORT
*/
exports.CLIENT_PORT = process.env.CLIENT_PORT || 3100;
exports.SERVER_PORT = process.env.SERVER_PORT || 5000;

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
