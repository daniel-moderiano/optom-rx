import styled from "styled-components";

const StyledTableFooter = styled.div`
  padding-top: 0.8rem;
  width: 100%;
  font-weight: 500;
  text-align: left;
  font-size: 16px;
  color: #2c3e50;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .arrow {
    background-color: #fff;
    border: none;
    padding-bottom: 0.1rem;
    &:hover {
      cursor: pointer;
    }
  }

  .arrow-right {
    margin-left: 0.75rem;
    border-radius: 2px;

    &:focus {
      outline: 2px solid #104362;
      outline-offset: 2px;
    }
  }

  .arrow-left {
    margin-right: 0.75rem;
    border-radius: 2px;

    &:focus {
      outline: 2px solid #104362;
      outline-offset: 2px;
    }
  }

  .button {
    font-family: var(--font-stack-segoe);
    font-size: 0.85rem;
    border: none;
    padding: 3px 10px 5px 10px;
    margin: 2px;
    border-radius: 8px;
    cursor: pointer;

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
  }

  .activeButton {
    color: white;
    background: #31776f;
  }

  .inactiveButton {
    color: #2c3e50;
    background: #ffffff;
  }
`

export { StyledTableFooter }