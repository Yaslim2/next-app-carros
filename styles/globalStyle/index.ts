import { defaultBlack, OpenSans } from "@shared/themes";
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
        font-family: ${OpenSans};
        color: ${defaultBlack};
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
