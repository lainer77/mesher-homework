import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const styled = { createGlobalStyle };
const GlobalStyle = styled.createGlobalStyle`
    ${reset}
    html {
        font-size: 16px;
        font-weight: 485;
        font-variant: none;
        font-smooth: always;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
    }
    #root,
    body,
    html {
        min-height: 100%;
        height: 100%;
    }
    #root-portal {
        /* *::-webkit-scrollbar {
            display: none;
        } */
    }
`;

export default GlobalStyle;
