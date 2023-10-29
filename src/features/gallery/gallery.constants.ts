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
  makeGalleryItem({
    src: '/img/sber-moscowcity.jpeg',
    width: 600,
    captions: ['Sber tower -> Moscow City'],
    tags: [GalleryTag.IRL, GalleryTag.LowRes, GalleryTag.Sber],
  }),
  makeGalleryItem({
    src: '/img/sueta.jpeg',
    width: 400,
    captions: ['Moscow'],
    tags: [GalleryTag.IRL, GalleryTag.LowRes],
  }),
  makeGalleryItem({
    src: '/img/sueta2.jpeg',
    width: 200,
    captions: ['More of Moscow'],
    tags: [GalleryTag.IRL, GalleryTag.LowRes],
  }),
  makeGalleryItem({
    src: '/img/moscow.jpeg',
    width: 400,
    captions: ['Even more of Moscow!'],
    tags: [GalleryTag.IRL, GalleryTag.LowRes],
  }),
  makeGalleryItem({
    src: '/img/sber-chan.jpg',
    width: 300,
    captions: ['Sber-chan!'],
    tags: [GalleryTag.Anime, GalleryTag.Sber],
  }),
  makeGalleryItem({
    src: '/img/march7.jpeg',
    width: 400,
    captions: ['March 7 from Dodo!'],
    tags: [GalleryTag.Anime, GalleryTag.IRL],
  }),
  makeGalleryItem({
    src: '/img/sokolniki.jpeg',
    width: 400,
    captions: ['Sokolniki Metro', 'One of oldest ones'],
    tags: [GalleryTag.IRL],
  }),
  makeGalleryItem({
    src: '/img/sber-cat.jpeg',
    width: 400,
    captions: ['Cool pillow-cat!'],
    tags: [GalleryTag.IRL, GalleryTag.Sber],
  }),
  makeGalleryItem({
    src: '/img/sber.jpeg',
    width: 400,
    captions: ['Lunch zone'],
    tags: [GalleryTag.Me, GalleryTag.IRL, GalleryTag.Sber],
  }),
];
