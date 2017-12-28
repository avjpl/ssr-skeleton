const path = require('path');
const exphbs = require('express-handlebars');

const helpers = require('./layoutHelpers');

const { PATHS } = require('../../../config/webpack.constants');

const env = process.env.NODE_ENV === 'development';

const viewLocation = !env
  ? path.resolve(__dirname, '../../../dist/views/layouts/layout/')
  : path.resolve(__dirname, '../../views/layouts/layout/');

module.exports = app => {
  app.engine('.hbs', exphbs({
    extname: '.hbs',
    compilerOptions: { preventIndent: true },
    defaultLayout: path.resolve(viewLocation),
    partialsDir: [
      path.resolve(__dirname, '../../views/partials/'),
    ],
    helpers,
  }));
  app.set('view engine', '.hbs');
  app.set('views', path.resolve(__dirname, '../../views/'));
};
