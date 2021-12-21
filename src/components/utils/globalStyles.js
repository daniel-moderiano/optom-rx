import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #31776f;
    --title-color: #0b4740;
    --btn-hover: #2C6D66;
    --btn-secondary: #E8EAED;
    --btn-secondary-text: #48515B;
    --text: #1B1E22;
    --error: #ab4f57;
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
    color: var(--text);
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

`

export default GlobalStyles;