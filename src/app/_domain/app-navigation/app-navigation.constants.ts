import React from 'react';

import { AppRoute } from './app-navigation.types';

const IndexPage = React.lazy(() => import('$pages/index-page'));
const GalleryPage = React.lazy(() => import('$pages/gallery-page'));

export const APP_ROUTES: Readonly<AppRoute[]> = [
  {
    name: '~',
    path: '',
    component: IndexPage,
  },
  {
    name: '~/gallery',
    path: '/gallery',
    component: GalleryPage,
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
] as const;
