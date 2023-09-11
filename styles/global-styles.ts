'use client';
import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

import { notoSerifFont, pretendardFont } from '@/styles/fonts';

export const styles = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }


  html, body {
    padding: 0;
    margin: 0;
     //font-family: ${pretendardFont.style.fontFamily}, ${notoSerifFont.style.fontFamily}, Malgun Gothic, Helvetica Neue, sans-serif;
    font-family: var(--font-pretendard), var(--font-noto-serif), Malgun Gothic, Helvetica Neue, sans-serif;
  }

  #__next {
    display: flex;
    flex-direction: column;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  input::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  strong, b {
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
    margin: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${styles}
`;

export default GlobalStyle;
