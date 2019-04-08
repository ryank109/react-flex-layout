import styled from '@emotion/styled';
import { cssHeight, shouldForwardProp, whenValue } from './utils';

const getHeight = ({ height }) => whenValue(cssHeight)(height);
const flexGrow = ({ shouldGrow }) => (shouldGrow ? 1 : 0);

export const Row = styled('div', { shouldForwardProp })`
  box-sizing: border-box;
  display: flex;
  flex-grow: ${flexGrow};
  flex-shrink: 1;
  flex-wrap: wrap;
  ${getHeight}
`;

Row.defaultProps = {
  shouldGrow: false,
};
