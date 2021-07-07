import React from 'react';
import {authRole} from '../../../shared/constants/AppConst';

export const utilConfigs = [
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/utility/alert',
        component: React.lazy(() => import('./Alerts')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/utility/modal',
        component: React.lazy(() => import('./Modal')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/utility/popover',
        component: React.lazy(() => import('./Popover')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/utility/pagination',
        component: React.lazy(() => import('./Pagination')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/utility/popper',
        component: React.lazy(() => import('./Popper')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/utility/rating',
        component: React.lazy(() => import('./Rating')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/utility/skeleton',
        component: React.lazy(() => import('./Skeleton')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/utility/speed-dial',
        component: React.lazy(() => import('./SpeedDial')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/utility/toggle-buttons',
        component: React.lazy(() => import('./ToggleButtons')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/utility/tree-view',
        component: React.lazy(() => import('./TreeView')),
      },
    ],
  },
];
