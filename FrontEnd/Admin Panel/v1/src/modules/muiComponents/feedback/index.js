import React from 'react';
import {authRole} from '../../../shared/constants/AppConst';

export const feedbackConfigs = [
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/feedback/progress/',
        component: React.lazy(() => import('./Progress')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/feedback/dialog/',
        component: React.lazy(() => import('./Dialogs')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/mui/feedback/snackbars/',
        component: React.lazy(() => import('./Snacksbars')),
      },
    ],
  },
];
