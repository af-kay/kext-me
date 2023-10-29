export type ComixCaptionPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type IComixCaption = {
  position: ComixCaptionPosition;
  text: string;
  typeEffect: boolean;
  maxWidth: number;
};
