import styled, { css } from 'styled-components';

import { GalleryImage } from '../gallery-image';

import { useTaginatedGallery } from './taginated-gallery.hooks';
import { ITaginatedGallery } from './taginated-gallery.types';

export const TaginatedGallery: React.FC<ITaginatedGallery> = ({ items }) => {
  const {
    selectedTag,
    selectOrToggleTag,
    filteredItems,
    tagsToSelect,
    hasTagsToSelect,
  } = useTaginatedGallery(items);

  return (
    <Layout>
      {hasTagsToSelect && (
        <TagsLayout>
          {tagsToSelect.map(tag => {
            const isSelected: boolean = tag === selectedTag;

            return (
              <Tag
                key={tag}
                isSelected={isSelected}
                onClick={() => selectOrToggleTag(tag)}
              >
                #{tag}
              </Tag>
            );
          })}
        </TagsLayout>
      )}
      <ImagesLayout>
        {filteredItems.map(item => (
          <GalleryImage
            key={item.imageProps.src}
            item={item}
            selectedTags={selectedTag && [selectedTag]}
            onTagClick={selectOrToggleTag}
          />
        ))}
      </ImagesLayout>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  gap: 16px;

  // If mobile TODO: declarative multi-screen layout
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const TagsLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
`;
const Tag = styled.div<{ isSelected: boolean }>`
  padding: 16px;
  font-size: 1.5em;
  cursor: pointer;

  ${p =>
    p.isSelected &&
    css`
      backdrop-filter: brightness(0.9);
      text-decoration: underline;
    `}
`;

const ImagesLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  justify-content: space-evenly;
  align-items: center;
  gap: 16px;
`;
