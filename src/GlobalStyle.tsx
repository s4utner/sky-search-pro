import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat-Regular';
    }

@font-face {
    font-family: 'Montserrat-Regular';
    src: url('./assets/fonts/Montserrat-Regular.ttf');
}
`
