import { Global, css } from '@emotion/core';

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
	    }

      html, body {
        display: flex;
        height: 100%;
        margin: 0;
        overflow: hidden;
        padding: 0;
        width: 100%;
	    }

      #root {
        display: flex;
        height: 100%;
        margin: 0;
        overflow: hidden;
        width: 100%;
      }
    `}
  />
);
