import React from 'react';
import {authRole} from '../../../shared/constants/AppConst';

export const navigationConfigs = [
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/navigation/bottom-navigation',
        component: React.lazy(() => import('./BottomNavigation')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/navigation/breadcrumbs',
        component: React.lazy(() => import('./BreadCrumbs')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/navigation/drawers',
        component: React.lazy(() => import('./Drawers')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/navigation/links',
        component: React.lazy(() => import('./Links')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/navigation/menus',
        component: React.lazy(() => import('./Menus')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/navigation/steppers',
        component: React.lazy(() => import('./Steppers')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/navigation/tabs',
        component: React.lazy(() => import('./Tabs')),
      },
    ],
  },
];
