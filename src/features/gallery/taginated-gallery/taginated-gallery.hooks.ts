import { useCallback, useMemo, useState } from 'react';

import { GalleryTag } from '../gallery.types';

import { UseTaginatedGallery } from './taginated-gallery.types';

export const useTaginatedGallery: UseTaginatedGallery = items => {
  const [selectedTag, setSelectedTag] = useState<GalleryTag>();

  const tagsToSelect = useMemo(() => {
    const tagsFromAllItems = items.flatMap(it => it.tags);
    const deduplicatedTags = Array.from(new Set(tagsFromAllItems));

    return deduplicatedTags;
  }, [items]);

  const selectTag = useCallback(
    (tag: undefined | GalleryTag) => {
      if (tag && tagsToSelect.includes(tag)) {
        setSelectedTag(tag);
      } else {
        setSelectedTag(undefined);
      }
    },
    [tagsToSelect],
  );

  const filteredItems = useMemo(() => {
    const shouldDisplayAllItems = !selectedTag;

    return shouldDisplayAllItems
      ? items
      : items.filter(it => it.tags.includes(selectedTag));
  }, [items, selectedTag]);

  return {
    selectedTag,
    selectTag,
    filteredItems,
    tagsToSelect,
    hasTagsToSelect: Boolean(tagsToSelect.length > 0),
  };
};
