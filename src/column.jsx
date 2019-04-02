import React from 'react';
import { css } from '@emotion/core';

const calcFlexBasisPercent = (base, span) => {
	const result = base * span;
	return result > 100 ? 100 : result;
};

export const Column = ({ span, ...props }) => (
  <div
	  css={css`
      background-color: #eee;
      border: 1px solid #ddd;
      display: flex;
      flex-direction: column;
      flex-grow: ${span};
      flex-shrink: 0;
      padding: 20px;

      @media (min-width: 768px) {
        flex-basis: ${calcFlexBasisPercent(10, span)}%;
      }
      @media (max-width: 768px) {
        flex-basis: ${calcFlexBasisPercent(50, span)}%;
      }
      @media (max-width: 500px) {
        flex-basis: 100%;
      }
    `}
    {...props}
  />
);

Column.defaultProps = {
  span: 1,
};

Column.displayName = 'Column';
