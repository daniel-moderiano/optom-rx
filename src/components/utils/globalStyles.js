import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #95c9e0;
    --error: #c40000;
    --success: #219653;
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

`

export default GlobalStyles;