import { GALLERY_CONFIG } from './gallery.config';
import { MakeGalleryItem } from './gallery.types';

import { ComixCaptionPosition } from '$lib/comix/comix-image/comix-caption';
import { IComixImage } from '$lib/comix/comix-image/comix-image.types';

const makeImageCaptions = (
  fileName: string,
  captionStrings: string[],
): NonNullable<IComixImage['captions']> => {
  const positionsDistributionOrder: ComixCaptionPosition[] = [
    'top-left',
    'bottom-left',
    'top-right',
  ];

  return captionStrings.reduce(
    (captions, caption, captionIndex) => {
      const position = positionsDistributionOrder[captionIndex];

      if (caption && position) {
        captions[position] = caption;
      }

      return captions;
    },
    {
      'bottom-right': fileName,
    } as NonNullable<IComixImage['captions']>,
  );
};

export const makeGalleryItem: MakeGalleryItem = ({
  src,
  captions = [],
  width = 200,
  tags = [],
}) => {
  const [fileName = '???'] = src.split('/').reverse();

  return {
    imageProps: {
      src,
      width,
      captions: makeImageCaptions(fileName, captions),
      captionsTypeEffect: GALLERY_CONFIG.enableTypingEffect,
    },
    tags,
  };
};
