import { IComixImage } from '$lib/comix/comix-image/comix-image.types';

export type GalleryConfig = {
  enableTypingEffect: boolean;
};

export enum GalleryTag {
  Anime = 'anime',
  IRL = 'irl',
  LowRes = 'low_res',
  HiRes = 'hi_res',
}

export type GalleryItem = {
  imageProps: IComixImage;
  tags: GalleryTag[];
};

export type MakeGalleryItem = (
  params: Pick<GalleryItem['imageProps'], 'src' | 'width'> & {
    captions?: string[];
    tags?: GalleryItem['tags'];
  },
) => GalleryItem;
