import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat-Regular';
}

body {
    background-color: #6600FF;
    display: flex;
    justify-content: center;
}

@font-face {
    font-family: 'Montserrat-Regular';
    src: url('./assets/fonts/Montserrat-Regular.ttf');
}
`
