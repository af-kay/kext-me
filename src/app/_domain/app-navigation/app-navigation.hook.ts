import { useMemo } from 'react';

import {
  ActiveAppRoute,
  DisabledAppRoute,
  UseAppLinks,
} from './app-navigation.types';
import { APP_ROUTES } from './app-navigation.constants';

export const useAppRoutes: UseAppLinks = () => {
  const activeAppRoutes = useMemo(() => {
    return <ActiveAppRoute[]>APP_ROUTES.filter(route => 'component' in route);
  }, []);

  const disabledAppRoutes = useMemo(() => {
    return <DisabledAppRoute[]>(
      APP_ROUTES.filter(route => 'disabled' in route && route.disabled)
    );
  }, []);

  return {
    allRoutes: APP_ROUTES,
    activeRoutes: activeAppRoutes,
    disabledRoutes: disabledAppRoutes,
  };
};
