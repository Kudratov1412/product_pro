import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
    text-align: center;
  }
  body {
    margin: 8px;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  p {
    font-weight: 300;
  }
`;

export default GlobalStyle;
