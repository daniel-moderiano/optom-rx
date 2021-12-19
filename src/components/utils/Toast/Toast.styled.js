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
  padding: 0.5rem;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  transition: opacity 0.2s, bottom 0.2s, visibility 0.2s;

  ${props => props.type === 'success' && `
    background-color: rgb(46, 129, 52);
    color: var(--light);
    border: 1px solid #246b2d;
  `}

  ${props => props.type === 'error' && `
    background-color: rgb(182, 51, 46);
    color: var(--light);
    border: 1px solid #9e2e2e;
  `}
`

export { StyledToast }

