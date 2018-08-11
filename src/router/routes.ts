import About from '@/views/About';
import AboutActions from '@/views/About/Actions';
import Page401 from '@/views/Page401';
import Page404 from '@/views/Page404';
import Home from '@/views/Home';

export default [
  {
    path: '/about',
    name: 'about',
    component: About,
    props: true,
    children: [
      {
        path: '',
        props: true,
        name: 'about.action',
        component: AboutActions,
      },
    ],
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/404',
    name: '404',
    component: Page404,
    meta: {
      auth: false,
    },
  },
  {
    path: '/401',
    name: '401',
    component: Page401,
    meta: {
      auth: false,
    },
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/*',
    redirect: '/404',
  },
];
