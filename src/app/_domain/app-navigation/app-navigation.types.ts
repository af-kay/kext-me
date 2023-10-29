type AppRouteBase = {
  name: string;
  path: string;
};

export type ActiveAppRoute = AppRouteBase & {
  component: React.FC;
};

export type DisabledAppRoute = AppRouteBase & {
  isDisabled: true;
};

export type AppRoute = ActiveAppRoute | DisabledAppRoute;

export type UseAppLinks = () => {
  allRoutes: Readonly<AppRoute[]>;
  activeRoutes: ActiveAppRoute[];
  disabledRoutes: DisabledAppRoute[];
};
