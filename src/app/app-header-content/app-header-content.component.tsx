import styled from 'styled-components';
import { Link } from 'wouter';

import { useAppRoutes } from '../_domain/app-navigation';

export const AppHeaderContent: React.FC = () => {
  const { activeRoutes } = useAppRoutes();

  return (
    <Nav>
      <ul>
        {activeRoutes.map(route => (
          <Link key={route.path} to={route.path}>
            <li key={route.path}>{route.name}</li>
          </Link>
        ))}
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  ul {
    list-style: none;
  }
`;
