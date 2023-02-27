import { createGlobalStyle } from "styled-components";
import "../node_modules/@fontsource/saira-stencil-one/400.css";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing:border-box;
    margin:0;
    padding:0;
  }

  html {
    font-family: "Saira Stencil One", sans-serif;
    color: #1E1E1E;

  }

  body {
    background-color: #1E1E1E;
  }
  
  ol, ul {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    font-family: inherit;
  }

  input {
    border: none;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img{
    max-width: 100%;
  }
`;

export default GlobalStyle;
