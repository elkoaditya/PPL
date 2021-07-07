import React from 'react';

export const calendarConfigs = [
  {
    auth: ['user'],
    routes: [
      {
        path: '/calendar/basic',
        component: React.lazy(() => import('./Basic')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/calendar/cultures',
        component: React.lazy(() => import('./Cultures')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/calendar/dnd',
        component: React.lazy(() => import('./Dnd')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/calendar/popup',
        component: React.lazy(() => import('./Popup')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/calendar/rendering',
        component: React.lazy(() => import('./Rendering')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/calendar/selectable',
        component: React.lazy(() => import('./Selectable')),
      },
    ],
  },
  {
    auth: ['user'],
    routes: [
      {
        path: '/calendar/timeslots',
        component: React.lazy(() => import('./Timeslots')),
      },
    ],
  },
];
