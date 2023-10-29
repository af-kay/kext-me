import { GalleryItem, GalleryTag } from '../gallery.types';

export type IGalleryImage = {
  item: GalleryItem;
  onTagClick: (tag: GalleryTag) => void;
};
