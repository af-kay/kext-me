import React from 'react';

import { AppRoute } from './app-navigation.types';

const MainPage = React.lazy(() => import('$pages/main-page'));
const GalleryPage = React.lazy(() => import('$pages/gallery-page'));
const ContactsPage = React.lazy(() => import('$pages/contacts-page'));

export const APP_ROUTES: Readonly<AppRoute[]> = [
  {
    name: '~',
    path: APP_BASE,
    component: MainPage,
  },
  {
    name: '~/gallery',
    path: '/gallery',
    component: GalleryPage,
  },
  {
    name: '~/contacts',
    path: '/contacts',
    component: ContactsPage,
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
