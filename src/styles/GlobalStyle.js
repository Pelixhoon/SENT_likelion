import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    
    :root {
       --vh: 100%;
    }
    *{
        box-sizing:boerder-box;
    }
`;

export default GlobalStyle;
