import styled from 'styled-components';

import { useAppRoutes } from '../_domain/app-navigation';

import { AppLink } from '$lib/routing';

export const AppHeaderContent: React.FC = () => {
  const { activeRoutes } = useAppRoutes();

  return (
    <Nav>
      <ul>
        {activeRoutes.map(route => (
          <AppLink key={route.path} to={route.path}>
            <li>{route.name}</li>
          </AppLink>
        ))}
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 2rem;

  ul {
    display: flex;
    gap: 4rem;

    list-style: none;
  }
`;
