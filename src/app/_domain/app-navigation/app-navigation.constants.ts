import React from 'react';

import { AppRoute } from './app-navigation.types';

const IndexPage = React.lazy(() => import('$pages/index-page'));

export const APP_ROUTES: AppRoute[] = [
  {
    name: '~',
    path: '/',
    component: IndexPage,
  },
  {
    name: '~/foo',
    path: '/foo',
    isDisabled: true,
  },
  {
    name: '~/bar',
    path: '/bar',
    isDisabled: true,
  },
  {
    name: '~/baz',
    path: '/baz',
    isDisabled: true,
  },
];
