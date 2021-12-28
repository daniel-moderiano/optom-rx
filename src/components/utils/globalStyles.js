import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Base colour theming */
    --primary-color: #31776f;
    --background: #F4F5F6;

    /* Text colours */
    --title-color: #0b4740;
    --text: #1B1E22;

    /* Buttons */
    --btn-primary: #31776f;
    --btn-primary-hover: #2C6D66;
    --btn-primary-text: #FFFFFF;
    --btn-secondary: #E8EAED;
    --btn-secondary-hover: #DDE0E4;
    --btn-secondary-text: #48515B;
    --btn-secondary-hover-text: #21252A;

    /* Ghost buttons */
    --btn-negative: #D12323;
    --btn-negative-hover: #F8F2F2;
    --btn-negative-hover-text: #C02121;
    --btn-positive: #31776f;
    --btn-positive-hover: #F3F7F6;
    --btn-positive-hover-text: #116A61;

    /* Alerts */
    --error: #B3000F;
    --success: #0a7e00;
    --success-text: #096600;
    --neutral: #00477A;

    /* Font stacks */
    --font-stack-segoe: 'Segoe UI', Arial, Helvetica, sans-serif;
    --font-stack-segoe-semi: 'Segoe UI Semibold', Arial, Helvetica, sans-serif;
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