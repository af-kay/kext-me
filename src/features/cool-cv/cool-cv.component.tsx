import styled from 'styled-components';

import { Introductory } from './introductory';
import { Jobs } from './jobs';

export const CoolCv: React.FC = () => {
  return (
    <Layout>
      <Introductory />
      <Jobs />
      {/* TODO: About me (I LOVE COOL PEOPLE AND PRODUCTIVE TEAMS) */}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 16px;
  text-shadow: none;
  background: #ffffff11;
  padding: 0 64px 16px 64px;

  max-width: 800px;
`;
