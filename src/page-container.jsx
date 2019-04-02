import React from 'react';
import { css } from '@emotion/core';

export const PageContainer = props => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      overflow: auto;
      width: 100%;
    `}
    {...props}
  />
);

PageContainer.displayName = 'PageContainer';
