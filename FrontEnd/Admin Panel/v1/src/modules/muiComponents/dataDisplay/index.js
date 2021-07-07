import React from 'react';
import {authRole} from '../../../shared/constants/AppConst';

export const dataDisplayConfigs = [
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/db-display/avatars',
        component: React.lazy(() => import('./Avatars')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/db-display/badges',
        component: React.lazy(() => import('./Badges')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/db-display/chips',
        component: React.lazy(() => import('./Chips')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/db-display/divider',
        component: React.lazy(() => import('./Divider')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/db-display/lists',
        component: React.lazy(() => import('./Lists')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/db-display/tables',
        component: React.lazy(() => import('./Tables')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/db-display/tooltip',
        component: React.lazy(() => import('./Tooltip')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/db-display/typography',
        component: React.lazy(() => import('./Typography')),
      },
    ],
  },
];
