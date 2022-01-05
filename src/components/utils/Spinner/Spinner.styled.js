import styled from "styled-components";

// Currently styled as default select Toast. For styling of error or info toasts, the JS toast component with conditionally render different SVG icons
const StyledSpinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid var(--primary-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
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

