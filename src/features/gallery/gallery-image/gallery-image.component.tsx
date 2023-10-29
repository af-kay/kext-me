import styled from 'styled-components';

import { IGalleryImage } from './gallery-image.types';

import { ComixImage } from '$lib/comix/comix-image';

export const GalleryImage: React.FC<IGalleryImage> = ({ item, onTagClick }) => {
  const hasTags: boolean = item.tags.length > 0;

  return (
    <Layout>
      <ComixImage {...item.imageProps} />
      {hasTags && (
        <Tags>
          {item.tags.map(tag => (
            <Tag key={tag} onClick={() => onTagClick(tag)}>
              #{tag}
            </Tag>
          ))}
        </Tags>
      )}
    </Layout>
  );
};

const Layout = styled.div``;

const Tags = styled.div`
  display: flex;
  gap: 8px;
`;
const Tag = styled.span``;
