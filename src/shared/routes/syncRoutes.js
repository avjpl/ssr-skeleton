import Home from '../components/Home';
import About from '../components/About';
import Topics from '../components/Topics';

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
  {
    component: Topics,
    path: '/topics',
    exact: true,
  },
];
