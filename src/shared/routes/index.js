import Home from '../components/Home';
import About from '../components/About';
import Topics from '../components/Topics';

export const mainRoutes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: About,
    path: '/about',
  },
  {
    component: Topics,
    path: '/topics',
  },
];
