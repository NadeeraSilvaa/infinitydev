// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const theme = {
  body: '#FFF',
  text: '#333',
  primary: '#FF0000',
};
