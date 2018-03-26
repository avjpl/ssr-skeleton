import { AsyncComponent } from '../components/utils';

export const routes = [
  {
    component: AsyncComponent(() => System.import('../components/Home')),
    path: '/',
    exact: true,
  },
  {
    component: AsyncComponent(() => System.import('../components/About')),
    path: '/about',
    exact: true,
  },
  {
    component: AsyncComponent(() => System.import('../components/Topics')),
    path: '/topics',
    exact: true,
  },
];
