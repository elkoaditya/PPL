import React from 'react';
import {authRole} from '../../../shared/constants/AppConst';

export const inputsConfigs = [
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/inputs/buttons',
        component: React.lazy(() => import('./Buttons')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/inputs/button-group',
        component: React.lazy(() => import('./ButtonGroup')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/inputs/checkboxes',
        component: React.lazy(() => import('./Checkboxes')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/inputs/fab',
        component: React.lazy(() => import('./FAB')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/inputs/date-time',
        component: React.lazy(() => import('./DataTime')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/inputs/radios',
        component: React.lazy(() => import('./RadiosButton')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/inputs/selects',
        component: React.lazy(() => import('./Selects')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/inputs/slider',
        component: React.lazy(() => import('./Sliders')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/inputs/switches',
        component: React.lazy(() => import('./Switches')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/inputs/text-fields',
        component: React.lazy(() => import('./TextFields')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/inputs/transfer-list',
        component: React.lazy(() => import('./TransferList')),
      },
    ],
  },
];
