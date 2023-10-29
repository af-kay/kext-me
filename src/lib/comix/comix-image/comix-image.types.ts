import { ComixCaptionPosition } from './comix-caption/comix-caption.types';

export type IComixImage = {
  src: string;
  width?: number;
  height?: number;
  captionsTypeEffect?: boolean;
  captions?: Partial<Record<ComixCaptionPosition, string>>;
};
