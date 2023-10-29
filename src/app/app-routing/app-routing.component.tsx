import { Route } from 'wouter';
import { Suspense } from 'react';

import { useAppRoutes } from '../_domain/app-navigation';

export const AppRouting: React.FC = () => {
  const { activeRoutes } = useAppRoutes();

  return (
    <>
      <Suspense fallback={<span>Loading</span>}>
        {activeRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Suspense>
    </>
  );
};
