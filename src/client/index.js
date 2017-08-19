import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
} from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';
import '../app.pcss';

import App from '../shared/components/App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);

// Check for updates and apply it
if (module.hot) {
  module.hot.accept('../shared/components/App', () => {
    const App = require('../shared/components/App').default;

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('app'));
  });
}
