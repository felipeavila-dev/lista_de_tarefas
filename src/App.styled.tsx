import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    :root {
      font-size: 10px;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;

    }
`;