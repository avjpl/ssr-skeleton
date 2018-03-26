const webpack = require('webpack');
const path = require('path');
const React = require('react');
const bunyan = require('bunyan');
const express = require('express');
const cors = require('cors');
const webpackDevMiddleware = require('webpack-dev-middleware');

const webpackConfig = require('../../webpack.config');
const handleRequest = require('./utils/handleRequest');
const layoutSetup = require('./utils/layoutSetup');

const reqSerializer = req => ({
  method: req.method,
  url: req.url,
  statusCode: req.statusCode,
  statusMessage: req.statusMessage,
  baseUrl: req.baseUrl,
  originalUrl: req.originalUrl,
  params: req.params,
  /***************************************************************/
  /*                                                             */
  /*    req.headers is very verbose. Try a to minimize output    */
  /*                                                             */
  /***************************************************************/
  // headers: req.headers,
});

const log = bunyan.createLogger({
  name: 'ssr',
  serializers: { req: reqSerializer },
});

const app = express();

let wrap = fn => (...args) => fn(...args).catch(args[2]);

app.use((req, res, next) => {
  log.info({ req });
  next();
});

app.get('/favicon.ico', (req, res) => {
  return res.status(204);
});

if (process.env.NODE_ENV === 'development') {
  const config = webpackConfig(process.env.NODE_ENV);
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
  }));
} else {
  app.use(require('compression')());
}

const fetch = require('node-fetch');

app.get('/test', wrap(async function (req, res) {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);

  // let data = await queryDb()
  // // handle data
  // let csv = await makeCsv(data)
  // // handle csv
  res.json(data);
}));

app.get('/grid', (req, res) => {
  res.render('grids', {});
});

app.get('/slack', (req, res) => {
  res.render('slack', {});
});

app.get('/grid-positions', (req, res) => {
  res.render('grid-positions', {});
});

app.use('/', express.static(path.resolve(__dirname, '../../dist')));
app.use(handleRequest().init);
app.use(cors);

layoutSetup(app);

app.listen(5000);
