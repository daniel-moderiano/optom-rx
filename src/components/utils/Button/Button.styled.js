import styled from "styled-components";

const StyledButton = styled.button`
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

  &.button--primary {
    background-color: var(--primary-color);
    color: rgb(255, 255, 255);
    min-width: 140px;  // To avoid shrinking when switching to pending dots

    &:hover {
      background-color: var(--btn-primary-hover);
    }
  }

  &.button--secondary {
    background-color: var(--btn-secondary);
    color: var(--btn-secondary-text);

    &:hover {
      background-color: var(--btn-secondary-hover);
      color: #21252A;
    }
  }

  &.button--delete {
    background-color: #cc3232;
    color: rgb(255, 255, 255);

    &:hover {
      background-color: var(--btn-negative-hover-text);
    }
  }

  &.button--ghost {
    background-color: #fff;
    color: #0b4740;
    border: 1px solid #0b4740;

    &:hover {
      background-color: var(--btn-positive-hover);
      /* color: var(--btn-positive-hover-text); */
      color: #0b4740;
    }
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

`

export { StyledButton }