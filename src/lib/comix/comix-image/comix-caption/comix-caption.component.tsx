import styled, { css } from 'styled-components';
import Typewriter from 'typewriter-effect';

import { ComixCaptionPosition, IComixCaption } from './comix-caption.types';

export const ComixCaption: React.FC<IComixCaption> = ({
  position,
  text,
  typeEffect,
  maxWidth,
}) => {
  return (
    <>
      <Caption
        maxWidth={maxWidth}
        position={position}
        style={{ color: 'transparent' }}
      >
        {text}&nbsp;
      </Caption>
      <Caption
        maxWidth={maxWidth}
        position={position}
        style={{ outline: 'none' }}
      >
        {typeEffect ? (
          <Typewriter
            options={{ cursor: '', loop: false }}
            onInit={typewriter => typewriter.typeString(text).start()}
          />
        ) : (
          <span>{text}</span>
        )}
      </Caption>
    </>
  );
};

const getCaptionPositionStyle = (position: ComixCaptionPosition) => {
  const converter: Record<ComixCaptionPosition, string> = {
    'top-left': `
        top: 0;
        left: 0;
        padding: 0 8px 0 32px;`,
    'top-right': `
        top: 0;
        right: 0;
        padding: 0 32px 0 8px;`,
    'bottom-left': `
        bottom: 0;
        left: 0;
        padding: 0 8px 0 32px;`,
    'bottom-right': `
        bottom: 0;
        right: 0;
        padding: 0 32px 0 8px;`,
  };

  return converter[position];
};

const Caption = styled.span<Pick<IComixCaption, 'maxWidth' | 'position'>>`
  position: absolute;
  max-width: ${p => p.maxWidth}px;
  overflow: hidden;

  color: black;
  text-shadow: none;
  font-weight: 700;
  font-size: 1.5rem;

  background: white;
  outline: 4px solid black;

  ${p => css`
    ${getCaptionPositionStyle(p.position)}
  `}
`;
