import styled from 'styled-components';

import { IExternalLink } from './external-link.types';

export const ExternalLink: React.FC<IExternalLink> = ({ children, href }) => {
  return (
    <Anchor target="_blank" referrerPolicy="no-referrer" href={href}>
      {children}
    </Anchor>
  );
};

const Anchor = styled.a`
  outline: 1px dashed white;
`;
