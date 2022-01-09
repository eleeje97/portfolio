import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    // 전역 스타일
    a {
        color : red;
    }
    `;
export default GlobalStyles;