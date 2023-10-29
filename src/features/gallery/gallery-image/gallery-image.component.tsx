import styled, { css } from 'styled-components';

import { IGalleryImage } from './gallery-image.types';

import { ComixImage } from '$lib/comix/comix-image';

export const GalleryImage: React.FC<IGalleryImage> = ({
  item,
  onTagClick,
  selectedTags = [],
}) => {
  const hasTags: boolean = item.tags.length > 0;

  return (
    <Layout>
      <ComixImage {...item.imageProps} />
      {hasTags && (
        <Tags>
          {item.tags.map(tag => {
            const isTagSelected = selectedTags.includes(tag);

            return (
              <Tag
                key={tag}
                isSelected={isTagSelected}
                onClick={() => onTagClick(tag)}
              >
                #{tag}
              </Tag>
            );
          })}
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
const Tag = styled.span<{ isSelected: boolean }>`
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  ${p =>
    p.isSelected &&
    css`
      filter: brightness(0.9);
      text-decoration: underline;
    `}
`;
