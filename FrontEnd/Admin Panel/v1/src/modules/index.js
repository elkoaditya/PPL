import React from 'react';
import {Redirect} from 'react-router-dom';

import {createRoutes} from '../@crema/utility/Utils';
import {dashBoardConfigs} from './dashboard';
import {muiComponentConfigs} from './muiComponents';
import {thirdPartyConfigs} from './thirdParty';
import {userPagesConfig} from './userPages';
import {appsConfig} from './apps';
import {extraPagesConfigs} from './extraPages';
import {userListConfig} from './userList';
import {errorPagesConfigs} from './errorPages';
import {ecommerceConfig} from './ecommerce';
import {authRouteConfig} from './auth';
import {initialUrl} from '../shared/constants/AppConst';
import {menuLevelConfig} from './menu';

const routeConfigs = [
  ...authRouteConfig,
  ...dashBoardConfigs,
  ...muiComponentConfigs,
  ...thirdPartyConfigs,
  ...userPagesConfig,
  ...appsConfig,
  ...userListConfig,
  ...extraPagesConfigs,
  ...errorPagesConfigs,
  ...ecommerceConfig,
  ...menuLevelConfig,
];

const routes = [
  ...createRoutes(routeConfigs),
  {
    path: '/',
    exact: true,
    component: () => <Redirect to={initialUrl} />,
  },
  {
    component: () => <Redirect to='/error-pages/error-404' />,
  },
];

export default routes;
