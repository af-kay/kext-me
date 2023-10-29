import styled, { css } from 'styled-components';
import { useTaginatedGallery } from './taginated-gallery.hooks';
import { ITaginatedGallery } from './taginated-gallery.types';
import { GalleryImage } from '../gallery-image';

export const TaginatedGallery: React.FC<ITaginatedGallery> = ({ items }) => {
  const {
    selectedTag,
    selectTag,
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

            const toggleOrSelectTag = () => {
              if (isSelected) {
                selectTag(undefined);
              } else {
                selectTag(tag);
              }
            };

            return (
              <Tag
                key={tag}
                isSelected={isSelected}
                onClick={toggleOrSelectTag}
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
            onTagClick={selectTag}
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
