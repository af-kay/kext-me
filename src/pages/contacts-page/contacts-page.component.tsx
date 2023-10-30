import styled from 'styled-components';

import { ExternalLink } from '$lib/external-link';

export const ContactsPage: React.FC = () => {
  return (
    <Layout>
      <h1>Мои контакты</h1>
      <ContactsLayout>
        <ExternalLink href="https://kextcache.t.me">
          Telegram (в первую пишите сюда)
        </ExternalLink>
        <ExternalLink href="https://github.com/af-kay/kext-me">
          Этот репозиторий
        </ExternalLink>
        <ExternalLink href="https://github.com/af-kay">
          GitHub
        </ExternalLink>
        <ExternalLink href="https://af-kay.github.io/guessing-game">
          Поиграй в мою игру (она без рекламы)
        </ExternalLink>
      </ContactsLayout>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ContactsLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 64px;
  align-items: center;

  a {
    width: fit-content;
    padding: 16px;
  }
`;
