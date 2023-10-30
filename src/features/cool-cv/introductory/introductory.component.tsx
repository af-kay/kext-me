import styled from 'styled-components';

import { ExternalLink } from '$lib/external-link';

export const Introductory = () => {
  return (
    <Layout>
      <h1>Привет!</h1>
      <p>
        Меня зовут Артём, работаю в{' '}
        <ExternalLink href="https://kotelov.com">Котелове</ExternalLink>.
        Занимаюсь профессиональной фронтенд-разработкой с 2019-го года. Основной
        стек: <code>React+TS, `@tanstack/react-query`, sass-mod/styled</code>. Есть опыт с{' '}
        <code>
          redux+toolkit, MobX, webpack/vite, react-*-form, mui/antd, OpenApi/Swagger, Django
        </code>
        .
      </p>
      <ParagraphExperienceShort>
        Мои рандомные теги на 20 секунд вашей жизни:{' '}
        <code>
          Селекты, таблицы, виртуальный скролл, диаграммы, сложные формы, svg+css, анимации,
          оптимизации бандла и ассетов, тесты, контрактное программирование, моки и точно что-то еще
        </code>
        .
      </ParagraphExperienceShort>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ParagraphExperienceShort = styled.p``;
