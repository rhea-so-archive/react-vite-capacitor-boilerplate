import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    ${reset}
  }
`;
export default GlobalStyle;
