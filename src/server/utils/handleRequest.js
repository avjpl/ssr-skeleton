const React = require('react');
const ReactDOMServer = require('react-dom/server');

const {
  renderRoutes,
  matchRoutes,
} = require('react-router-config');
const { StaticRouter } = require('react-router');
const { createStore, applyMiddleware } = require('redux');
const { Provider } = require('react-redux');
const { configureStore } = require('../../shared/redux/store/configureStore');

const App = require('../../shared/components/App').default;
const { routes } = require('../../shared/routes/syncRoutes');

module.exports = () => ({
  init: (req, res) => {
    const store = configureStore();
    const match = matchRoutes(routes, req.url);

    const promises = match.map(({ route }) => {
      if (!route.component.needs) {
        return Promise.resolve();
      }

      const fetchData = route.component.needs;
      return store.dispatch(fetchData());
    });

    Promise.all(promises).then(() => {
      const initialState = store.getState();
      const context = {};
      const html = ReactDOMServer.renderToString(
        <StaticRouter
          location={ req.url }
          context={ context }
        >
          <Provider store={ store }>
            <App />
          </Provider>
        </StaticRouter>
      );

      context.url
        ? res.redirect(302, context.url)
        : res.render('index', { html, state: JSON.stringify(initialState) });
    });
  },
});
