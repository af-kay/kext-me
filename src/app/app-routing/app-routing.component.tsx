import { Route } from 'wouter';

import { useAppRoutes } from '../_domain/app-navigation';

export const AppRouting: React.FC = () => {
  const { activeRoutes } = useAppRoutes();

  return (
    <>
      {activeRoutes.map(route => (
        <Route key={route.path} path={route.path} component={route.component} />
      ))}
    </>
  );
};
