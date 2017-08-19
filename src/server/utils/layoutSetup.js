const path = require('path');
const exphbs = require('express-handlebars');

module.exports = app => {
  app.engine('.hbs', exphbs({
    extname: '.hbs',
    compilerOptions: { preventIndent: true },
    defaultLayout: path.resolve(__dirname, '../../views/layouts/layout/'),
    partialsDir: [
      path.resolve(__dirname, '../../views/partials/'),
    ],
  }));
  app.set('view engine', '.hbs');
  app.set('views', path.resolve(__dirname, '../../views/'));
};
