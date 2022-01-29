import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Base colour theming */
    --primary-color: #31776f;
    --small-shadow: rgba(27, 31, 36, 0.04) 0px 1px 0px 0px;
    --focus: #104362;
    --background: #F3F4F7;
    /* --background: #FFFFFF; */

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
    --warning: #9a6700;

    /* Font stacks */
    --font-stack-segoe: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .focus-styles {
    &:focus {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }

    &:focus:not(:focus-visible) {
      outline: none
    }

    &:focus-visible {
      outline: 2px solid #104362;
      outline-offset: 2px;
    }
  }

  /* Use on elements to replicate primary button styling (links mainly) */
  .btn-primary {
    box-sizing: border-box;
    font-size: 1rem;
    font-family: var(--font-stack-segoe);
    box-sizing: border-box;
    cursor: pointer;
    padding: 0.45rem 16px 10px 16px;
    border-radius: 2px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.4rem;
    border: 1px solid transparent;
    background-color: var(--primary-color);
    color: rgb(255, 255, 255);

    &:hover {
      background-color: var(--btn-primary-hover);
    }

    &:active {
      transform: scale(0.98);
    }

    &:focus {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }

    &:focus:not(:focus-visible) {
      outline: none
    }

    &:focus-visible {
      outline: 2px solid #104362;
      outline-offset: 2px;
    }
  }

  /* Use on elements to replicate secondary button styling (links mainly) */
  .btn-secondary {
    box-sizing: border-box;
    font-size: 1rem;
    font-family: var(--font-stack-segoe);
    box-sizing: border-box;
    cursor: pointer;
    padding: 0.45rem 16px 10px 16px;
    border-radius: 2px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.4rem;
    border: 1px solid transparent;
    background-color: var(--btn-secondary);
    color: var(--btn-secondary-text);

    &:hover {
      background-color: var(--btn-secondary-hover);
      color: #21252A;
    }

    &:active {
      transform: scale(0.98);
    }

    &:focus {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }

    &:focus:not(:focus-visible) {
      outline: none
    }

    &:focus-visible {
      outline: 2px solid #104362;
      outline-offset: 2px;
    }
  }

  * {
    box-sizing: border-box;
  }

    /* Use on elements to replicate ghost button styling (links mainly) */
  .btn-ghost {
    box-sizing: border-box;
    font-size: 1rem;
    font-family: var(--font-stack-segoe);
    box-sizing: border-box;
    cursor: pointer;
    padding: 0.45rem 16px 10px 16px;
    border-radius: 2px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.4rem;
    background-color: #fff;
    color: #0b4740;
    border: 1px solid #0b4740;

    &:hover {
      background-color: var(--btn-positive-hover);
      color: #0b4740;
    }

    &:active {
      transform: scale(0.98);
    }

    &:focus {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }

    &:focus:not(:focus-visible) {
      outline: none
    }

    &:focus-visible {
      outline: 2px solid #104362;
      outline-offset: 2px;
    }
  }

  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  body {
    height: 100vh;
    width: 100%;
    color: var(--text);
    font-family: var(--font-stack-segoe);

    p {
      margin: 0;
    }
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

  /* Note on media queries. The main breakpoints in use include 920px (form width below this must be adjusted to maintain styling concept), 768px (landscape phone/portrait table and down), approx 550px (more a breakpoint for certain tables rathen than a device), approx 450px (portrait phones and down), and <400px (specific adjustments for smaller phone screens where applicable) */

`

export default GlobalStyles;