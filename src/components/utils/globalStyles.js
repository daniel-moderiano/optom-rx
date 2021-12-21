import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #95c9e0;
    --title-color: #004165;
    --error: #B60000;
    --success: #1b7e46;
    --success-text: #006800;
    --neutral: #004997;
    --font-stack-segoe: 'Segoe UI', Arial, Helvetica, sans-serif;
    --font-stack-myriad: 'Myriad Pro Regular', Arial, Helvetica, sans-serif;
    --font-title: 'Myriad Pro Light', Arial, Helvetica, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100%;
  }

  /* Autocomplete dropdown styling */
  .pac-container {
    /* font-family: var(--font-stack-myriad); */
    .pac-item {
      /* font-size: 2rem; */
    }

    .pac-item-query {
      font-size: 0.875rem;
    }
  }

  /* COLOUR THEMING */
  /* Primary colour ideas include #0F6158 (btc markets), #25776A, #387A53, #0C5E6D, #1D5558, #2A7A74, #00857A, #295376  */

`

export default GlobalStyles;