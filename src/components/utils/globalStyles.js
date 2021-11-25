import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #95c9e0;
    --error: #c40000;
    --success: #219653;
    --font-stack: 'Segoe UI', Arial, Helvetica, sans-serif;
    --font-title: 'Myriad Pro Light', Arial, Helvetica, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

`

export default GlobalStyles;