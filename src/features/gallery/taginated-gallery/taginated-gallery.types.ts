import { GalleryItem, GalleryTag } from '../gallery.types';

export type ITaginatedGallery = {
  items: GalleryItem[];
};

export type UseTaginatedGallery = (items: GalleryItem[]) => {
  selectedTag: undefined | GalleryTag;
  selectTag: (tag: undefined | GalleryTag) => void;
  filteredItems: GalleryItem[];
  tagsToSelect: GalleryTag[];
  hasTagsToSelect: boolean;
};
