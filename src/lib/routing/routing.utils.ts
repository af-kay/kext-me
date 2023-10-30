import { Path } from 'wouter';
import {
  BaseLocationHook,
  navigate,
  useLocationProperty,
} from 'wouter/use-location';

export const hashLocation = () =>
  window.location.hash.replace(/^#/, '') || APP_BASE;

export const hashNavigate = (to: Path) => navigate('#' + to);

export const makeHashPath = (to: Path) => '#' + to;

export const useHashLocation: BaseLocationHook = () => {
  const location = useLocationProperty(hashLocation);

  return [location, hashNavigate];
};
