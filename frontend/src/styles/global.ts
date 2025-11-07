import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box}
  html, body, #root { height: 100% }
  body {
    margin: 0;
    padding: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial;
    background: ${({theme}) => theme.colors.bg};
    color: {({theme}) => theme.colors.text}
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: 100%;
    display: blcok;
  }
  button { font: inherit }
`;

