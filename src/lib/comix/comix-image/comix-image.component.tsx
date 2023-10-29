import styled, { css } from 'styled-components';
import { useCallback, useMemo, useState } from 'react';

import { IComixImage } from './comix-image.types';
import {
  ComixCaption,
  ComixCaptionPosition,
  IComixCaption,
} from './comix-caption';

export const ComixImage: React.FC<IComixImage> = ({
  src,
  width,
  height,
  captions = {},
  captionsTypeEffect = false,
}) => {
  const [layoutWidth, setLayoutWidth] = useState(width);
  const [layoutHeight, setLayoutHeight] = useState(height);

  const onImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const { width, height } = e.currentTarget;

      setLayoutHeight(height);
      setLayoutWidth(width);
    },
    [],
  );

  const layoutSizes = useMemo(() => {
    return {
      width: layoutWidth ?? width ?? 1,
      height: layoutHeight ?? height ?? 0,
    };
  }, [height, layoutHeight, layoutWidth, width]);

  const captionsProps: Array<IComixCaption> = useMemo(() => {
    return (
      Object.entries(captions) as unknown as [ComixCaptionPosition, string]
    ).map(([position, text]) => {
      return {
        text,
        position: position as ComixCaptionPosition,
        typeEffect: captionsTypeEffect,
        maxWidth: layoutSizes.width,
      } satisfies IComixCaption;
    });
  }, [captions, captionsTypeEffect, layoutSizes.width]);

  return (
    <Layout {...layoutSizes}>
      <img src={src} width={width} height={height} onLoad={onImageLoad} />

      {captionsProps.map(props => (
        <ComixCaption key={props.position} {...props} />
      ))}
    </Layout>
  );
};

const Layout = styled.div<{ height: number; width: number }>`
  position: relative;
  outline: 8px solid black;
  margin: 8px;

  width: ${p => p.width}px;
  height: ${p => p.height}px;

  ${p =>
    p.height === 0 &&
    css`
      outline: none;

      span {
        display: none;
      }
    `}
`;
