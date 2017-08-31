import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
} from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';

import '../app.pcss';
import { configureStore } from '../shared/redux/store/configureStore';
import App from '../shared/components/App';

const store = configureStore(window.__INITIAL_STATE__);

render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('../shared/components/App', () => {
    const App = require('../shared/components/App').default;

    render(
      <Provider store={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.getElementById('app'));
  });
}
