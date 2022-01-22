// Toast design inspired by Jon Rundle's (Envoy) notification design @ https://dribbble.com/shots/9837444-Toast-Messages-v2

import styled from "styled-components";

// Currently styled as default select Toast. For styling of error or info toasts, the JS toast component with conditionally render different SVG icons
const StyledToast = styled.div`
  position: fixed;
  bottom: ${props => props.visible ? '40px' : '0'};
  left: 0;
  right: 0;
  margin: auto;
  width: 20rem;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
  z-index: 10;
  padding: 0.4rem 0.75rem 0.4rem 0.4rem;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 16px 0px;
  transition: opacity 0.2s, bottom 0.2s, visibility 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-stack-segoe);
  background-color: #fff;

  .toast-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .toast-type {
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 0.9rem;

      .line {
        height: 60px;
        margin-right: 0.9rem;
      }

      .toast-icon {
        line-height: 0;
      }
    }

    .toast-text {
      text-align: left;
      width: 100%;

      .toast-title {
        margin: 0;
        padding: 0;
        font-weight: bold;
        font-size: 1.05rem;
        color: #292E34;
      }

      .toast-description {
        padding: 0;
        margin: 0;
        font-size: 1rem;
      }
    }
  }
`

export { StyledToast }

