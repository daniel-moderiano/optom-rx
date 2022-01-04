import styled from "styled-components";

const StyledToast = styled.div`
  position: fixed;
  bottom: ${props => props.visible ? '40px' : '0'};
  left: 0;
  right: 0;
  margin: auto;
  max-width: 250px;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
  z-index: 10;
  padding: 0.4rem;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  transition: opacity 0.2s, bottom 0.2s, visibility 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-stack-segoe);

  ${props => props.type === 'success' && `
    background-color: #fff;
  `}

  ${props => props.type === 'error' && `
    background-color: rgb(182, 51, 46);
    color: var(--light);
    border: 1px solid #9e2e2e;
  `}

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
      justify-content: space-between;
      width: 3.2rem;

      .line {
        height: 60px;
      }

      .toast-icon {
        line-height: 0;
      }
    }

    .toast-text {
      text-align: left;

      .toast-title {
        margin: 0;
        padding: 0;
        font-weight: bold;
        font-size: 1.1rem;
        color: #292E34;
      }

      .toast-description {
        padding: 0;
        margin: 0;
        font-size: 1rem;
        color: #677383;
      }
    }
  }
`

export { StyledToast }

