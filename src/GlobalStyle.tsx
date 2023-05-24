import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    ${reset}
  }

	html,
	body {
		width: 100%;
		height: 100%;
	}
  
	body {
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
export default GlobalStyle;
