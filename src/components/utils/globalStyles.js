import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #95c9e0;
    --error: rgb(196, 0, 0);
    --success: #219653;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

`

export default GlobalStyles;