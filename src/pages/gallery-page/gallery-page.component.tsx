import styled from 'styled-components';

import { ComixImage } from '$lib/comix/comix-image';

export const GalleryPage: React.FC = () => {
  return (
    <Layout>
      <ComixImage
        src="/img/pivo.jpg"
        width={200}
        captions={{
          'bottom-left': 'pivo.jpg',
          'top-left': 'TOP_LEFT',
        }}
        captionsTypeEffect
      />
      <ComixImage
        src="/img/pom-pom.jpg"
        width={400}
        captions={{
          'bottom-left': 'pom-pom.jpg',
          'top-left': 'TOP_LEFT',
        }}
        captionsTypeEffect
      />
      <ComixImage
        src="/img/cool.png"
        width={400}
        captions={{
          'bottom-left': 'cool.png',
          'top-left': 'TOP_LEFT',
          'bottom-right': 'BOTTOM_RIGHT',
        }}
        captionsTypeEffect
      />
      <ComixImage
        src="/img/catgirls.jpg"
        width={400}
        captions={{
          'bottom-left': 'catgirls.jpg',
          'top-left': 'TOP_LEFT',
          'bottom-right': 'BOTTOM_RIGHT',
        }}
        captionsTypeEffect
      />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  justify-content: space-evenly;
  align-items: center;
  gap: 16px;
`;
