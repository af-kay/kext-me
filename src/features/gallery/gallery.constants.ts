import { GalleryTag } from './gallery.types';
import { makeGalleryItem } from './gallery.utils';

export const GALLERY_ITEMS = [
  makeGalleryItem({
    src: '/img/pivo.jpg',
    captions: ['Hello'],
    tags: [GalleryTag.Anime],
  }),
  makeGalleryItem({
    src: '/img/pom-pom.jpg',
    width: 400,
    tags: [GalleryTag.Anime, GalleryTag.HiRes],
  }),
  makeGalleryItem({
    src: '/img/cool.png',
    width: 400,
    tags: [GalleryTag.Anime, GalleryTag.HiRes],
  }),
  makeGalleryItem({
    src: '/img/catgirls.jpg',
    width: 400,
    captions: ['First caption', 'Second Caption', 'Third caption'],
  }),
];
