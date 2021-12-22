import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
        border: 0;
    }
    body {
        font-family: "Open Sans", sans-serif;
        color: #313136;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
