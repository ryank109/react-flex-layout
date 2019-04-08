import styled from '@emotion/styled';
import {
  calcFlexBasis,
  cssWidth,
  mq,
  shouldForwardProp,
  whenValue,
} from './utils';
import { PageContainer } from './container';

const flexGrow = ({ span }) => span;
const padding = ({ padding }) => `${padding}px`;
const getCssWidth = ({ width }) => whenValue(cssWidth)(width);
const getMedia = size => ({ media }) => media(size);

export const Column = styled('div', { shouldForwardProp })`
  box-sizing: border-box;
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  flex-grow: ${flexGrow};
  flex-shrink: 0;
  padding: ${padding};

  ${PageContainer} & {
    ${getMedia('tablet')} {
      flex-basis: ${calcFlexBasis(50)}%;
    }
    ${getMedia('desktop')} {
      flex-basis: ${calcFlexBasis(20)}%;
      ${getCssWidth}
    }
  }
`;

Column.defaultProps = {
  media: mq,
  padding: 10,
  span: 1,
};
