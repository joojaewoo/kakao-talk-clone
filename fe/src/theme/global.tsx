import React from 'react';
import { Global, css } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}
      * {
        box-sizing: border-box;
      }
      body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 14px;
        height: 100%;
      }
      html {
        height: 100%;
      }
      a {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
      a:hover {
        text-decoration: none;
      }
      button {
        cursor: pointer;
      }
      #__next-wrapper {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      #__next {
        width: 100%;
        height: 100%;
        @media (min-width: 1024px) {
          max-width: 375px;
          max-height: 812px;
          border: 1px solid black;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    `}
  />
);

export default GlobalStyle;
