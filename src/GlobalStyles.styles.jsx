import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: auto;

    list-style: none;
    text-decoration: none;
    }

    html {
        font-family: 'Roboto', sans-serif;
        background-color: "#67bc98";
    }
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
		background-color: #13131f;
        color: white

    }
    li {
        list-style: none;
    }

`;

export default GlobalStyles;
