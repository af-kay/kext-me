import { Link } from 'wouter';

import { IAppLink } from './app-link.types';

export const AppLink: React.FC<IAppLink> = ({ to, children }) => {
  return (
    <a href={'#' + to} onClick={e => e.preventDefault()}>
      <Link to={to}>{children}</Link>
    </a>
  );
};
