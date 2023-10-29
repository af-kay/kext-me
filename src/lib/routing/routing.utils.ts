import { Path } from 'wouter';
import {
  BaseLocationHook,
  navigate,
  useLocationProperty,
} from 'wouter/use-location';

export const hashLocation = () => window.location.hash.replace(/^#/, '') || '/';

export const hashNavigate = (to: Path) => navigate('#' + to);

export const useHashLocation: BaseLocationHook = () => {
  const location = useLocationProperty(hashLocation);

  return [location, hashNavigate];
};
