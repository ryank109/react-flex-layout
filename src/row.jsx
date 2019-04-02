import React from 'react';
import { css } from '@emotion/core';

export const Row = props => (
  <div
    css={css`
      display: flex;
      flex-grow: 0;
      flex-shrink: 1;
      flex-wrap: wrap;
    `}
    {...props}
  />
);

Row.displayName = 'Row';
