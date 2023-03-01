import { createGlobalStyle } from "styled-components";
import "../node_modules/@fontsource/saira-stencil-one/400.css";
import "../node_modules/@fontsource/roboto/700.css";
import "../node_modules/@fontsource/roboto/400.css";

export const GlobalStyles = createGlobalStyle`

    :root{
    --primaryColor: #1e1e1e;
    --accentColor: #cccf18;
    --primaryFontColor: #fff;
    --warningFontColor: #f3949A;
    --primaryFont:"Roboto";
    --accentFont: "Saira Stencil One", sans-serif;
    --primaryFontSize: 1rem;
  
    }

    body {
      margin:0;
      font-family: var(--primaryFont);
      color: var(--primaryFontColor);
      background-color: var(--primaryColor);
    }

    * {
      box-sizing:border-box;
      padding:0;
    }

    html {
      font-family: var(--accent-font);
      color: var(--primaryColor)

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

export default GlobalStyles;
