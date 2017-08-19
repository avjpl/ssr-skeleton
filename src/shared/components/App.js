import React from 'react'; // eslint-disable-line
import {
  Route,
  Link,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { mainRoutes } from '../routes';

const App = () => (
  <div id="container">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>

    { renderRoutes(mainRoutes) }
  </div>
);

export default App;
