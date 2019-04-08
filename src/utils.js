import { css } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';

const mediaBreakpoints = {
  desktop: 768,
  phone: 0,
  tablet: 496,
  wideDesktop: 992,
};
export const mq = (media, bp = mediaBreakpoints) =>
  `@media (min-width: ${bp[media]}px)`;

export const whenValue = mixin => v => (v ? mixin(v) : '');

export const calcFlexBasis = base => ({ span }) => {
  const result = base * span;
  return result > 100 ? 100 : result;
};

export const shouldForwardProp = prop =>
  prop !== 'height' && prop !== 'span' && prop !== 'width' && isPropValid(prop);

// css props
export const cssFullView = css`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;
`;

export const cssHeight = h => css`
  max-height: ${h}px;
  min-height: ${h}px;
`;

export const cssWidth = w => css`
  max-width: ${w}px;
  min-width: ${w}px;
`;
