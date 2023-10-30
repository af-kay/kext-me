import styled from 'styled-components';

import { ExternalLink } from '$lib/external-link';

export const Jobs: React.FC = () => {
  return (
    <Layout>
      <h1>Опыт работы</h1>
      <hr />
      <Layout>
        <h4>
          <ExternalLink href="https://kotelov.com">KOTELOV</ExternalLink> (Aug
          23 - now)
        </h4>
        <p>
          Занимаюсь разработкой админки лизинга для службы безопасности
          Газпромбанка.
        </p>
        <p>
          Что успел сделать: фича с документацией для сторонних сервисов,
          улучшение фичи с досье + мильйон апдейтов и фиксов.
        </p>
      </Layout>
      <Layout>
        <h4>
          <ExternalLink href="https://sberbank.ru">Sber</ExternalLink> (Aug 22 -
          Jun 23)
        </h4>
        <p>
          Работал в 3 командах (блок ДИТ Риски).
          <br />
          Что сделал:
          <ul>
            <li>
              Сильно проапдейтил кредитный калькулятор для клиентов розничного
              бизнеса
            </li>
            <li>
              Апдейтил фронтенд на последний вебпак, добавлял тесты, мелкие фичи
            </li>
            <li>Редизайн приложения</li>
          </ul>
        </p>
      </Layout>
      <Layout>
        <h4>
          <ExternalLink href="https://it-only.ru">ONLY</ExternalLink> (Aug 19 -
          Oct 21)
        </h4>
        <p>
          Сделал социальную сеть с уклоном в HR-потребности (что-то вроде
          Сбер-Пульса или Линкедина). Основные приколы:{' '}
          <code>
            календарь, лента, посты, комментарии, профиль, стена, поиск,
            уведомления, сложные таблицы.
          </code>
          <br />
          Стек:
          <ul>
            <li>Vue2</li>
            <li>TypeScript</li>
            <li>VueX</li>
            <li>CSS Modules</li>
          </ul>
        </p>
        <p>
          Работал над приложением по контролю за процессами строительства для
          крупного ру-застройщика (вы о нем точно слышали). Основные
          достижения:&nbsp;
          <code>
            много апдейтил Диаграмму Гантта, разрабатывал фунциональность
            согласований, загрузки файлов, сложные фильтры.
          </code>
          <br />
          Стек:
          <ul>
            <li>React+TS</li>
            <li>MobX</li>
            <li>Swagger/OpenApi</li>
            <li>Ant Design</li>
            <li>styled-components</li>
          </ul>
        </p>
        <p>
          Помогал редизайнить веб-приложение для изучения английского языка.
          <br />
          Стек:
          <ul>
            <li>React+TS</li>
            <li>MobX</li>
            <li>Pure CSS (🙈)</li>
          </ul>
        </p>
      </Layout>
      <Layout>
        <h4>
          <ExternalLink href="https://impulse.ua">
            ЧАО СНПО "Импульс"
          </ExternalLink>{' '}
          (Apr 18 - Aug 19)
        </h4>
        <p>
          Работал над аппаратно-программным комплексом контроля подвижных единиц
          (АКРО-Б). Разрабатывали прототип версии "Б".
          <br />
          Что сделал:
          <ul>
            <li>
              Серверная часть комплекса (принимала и отдавала пакеты с данными и
              прочее-прочее)
            </li>
            <li>
              Клиентская часть для операторов ЖД станций (информирование о
              приближающихся подвижных составах, "тревоги", информация об
              оборудовании, действия с оборудованием (самодиагностика,
              автообогрев))
            </li>
            <li>Дипломная работа бакалавра по этому проекту</li>
          </ul>
          Стек:
          <ul>
            <li>C/C++11</li>
            <li>libpthread</li>
            <li>libsocket</li>
            <li>Qt</li>
          </ul>
        </p>
      </Layout>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ul {
    margin-left: 2rem;
  }
`;
