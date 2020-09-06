import { lazy } from 'react';

export default [
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./components/logInPage/LogInPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./components/registerPage/registerPage')),
    private: false,
    restricted: true,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    exact: true,
    component: lazy(() => import('./components/contacts/Contacts')),
    private: true,
    restricted: false,
  },
];
