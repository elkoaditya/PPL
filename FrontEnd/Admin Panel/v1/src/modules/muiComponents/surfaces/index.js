import React from 'react';
import {authRole} from '../../../shared/constants/AppConst';

export const surfaceConfigs = [
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/surface/app-Bar',
        component: React.lazy(() => import('./AppBar')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/surface/paper',
        component: React.lazy(() => import('./Paper')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/surface/cards',
        component: React.lazy(() => import('./Cards')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/surface/accordion',
        component: React.lazy(() => import('./Accordion')),
      },
    ],
  },
];
