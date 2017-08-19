const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { renderRoutes } = require('react-router-config');
const { StaticRouter } = require('react-router');

// const fetchComponentData = require('./fetchData').default;

import App from '../../shared/components/App';

module.exports = () => ({
  init: (req, res) => {
    const context = {};

    const html = ReactDOMServer.renderToString(
      <StaticRouter
        location={ req.url }
        context={ context }
      >
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(302, context.url);
    } else {
      res.render('index', { html, data: JSON.stringify({data: 'testing'}) });
    }
  },
});
