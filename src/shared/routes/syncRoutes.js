import Home from '../components/Home';
import About from '../components/About';

export const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: About,
    path: '/about',
    exact: true,
  },
];
