const path = require('path');
const React = require('react');
const bunyan = require('bunyan');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');

const handleRequest = require('./utils/handleRequest');
const layoutSetup = require('./utils/layoutSetup');

const dist = {
  production: path.resolve(__dirname, '../..', 'dist'),
  development: path.resolve(__dirname, '../../dist'),
};

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
  /*  This is very verbose. Maybe find a why to minimize output  */
  /*                                                             */
  /***************************************************************/
  // headers: req.headers,
});
const log = bunyan.createLogger({
  name: 'ssr',
  serializers: { req: reqSerializer },
});

const app = express();

app.use((req, res, next) => {
  log.info({ req });
  next();
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

app.use('/', express.static(dist[process.env.NODE_ENV]));
app.use(handleRequest().init);

layoutSetup(app);

app.listen(5000);
