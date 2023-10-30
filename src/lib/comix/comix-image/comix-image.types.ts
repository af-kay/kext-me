import { ComixCaptionPosition } from './comix-caption';

export type IComixImage = {
  src: string;
  width?: number;
  height?: number;
  captionsTypeEffect?: boolean;
  captions?: Partial<Record<ComixCaptionPosition, string>>;
};
