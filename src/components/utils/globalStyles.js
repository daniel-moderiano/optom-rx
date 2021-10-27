import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #95c9e0;
  }

  * {
    box-sizing: border-box;
  }

  input {
    width: 400px;
  }
`

export default GlobalStyles;