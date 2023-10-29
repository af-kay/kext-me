import styled from 'styled-components';

import { IAppLayout } from './app-layout.types';

export const AppLayout: React.FC<IAppLayout> = ({
  headerContent,
  sideMenu,
  children,
}) => {
  return (
    <Layout>
      {headerContent && <header>{headerContent}</header>}
      {sideMenu && <aside>{sideMenu}</aside>}
      <main>{children}</main>
    </Layout>
  );
};

const Layout = styled.div``;
