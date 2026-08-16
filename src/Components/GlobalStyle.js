import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'SF Pro Display', sans-serif;
    text-align: center;
  }
  body {
    margin: 8px;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export default GlobalStyle;
