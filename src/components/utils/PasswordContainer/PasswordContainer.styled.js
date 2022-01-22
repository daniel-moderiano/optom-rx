import styled from "styled-components";

const StyledPasswordContainer = styled.div`
  width: 100%;
  position: relative;

  /* Eye icon */
  .toggle-password {
    min-width: 20px;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 3.2rem;
    right: 1rem;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    z-index: 2;
    border-radius: 2px;

    &:focus {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }

    &:focus:not(:focus-visible) {
      outline: none
    }

    &:focus-visible {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }

    &:hover {
      cursor: pointer;
    }

    .overlay {
      width: 20px;
      height: 20px;
      position: absolute;
      background-color: #fff;
      opacity: 0.5;
      pointer-events: none;
    }
  }
`

export { StyledPasswordContainer }