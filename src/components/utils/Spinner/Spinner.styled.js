// Spinner design inspired by Kirtesh Bansal's Spinner Loader @ https://dev.to/kirteshbansal/spinner-loader-in-react-using-css-458h

import styled from "styled-components";

// Currently styled as default select Toast. For styling of error or info toasts, the JS toast component with conditionally render different SVG icons
const StyledSpinner = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
`

export { StyledSpinner }

