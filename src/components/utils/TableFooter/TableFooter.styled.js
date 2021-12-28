import styled from "styled-components";

const StyledTableFooter = styled.div`

  /* background-color: #f1f1f1; */
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
  }

  .arrow-right {
    padding-left: 1rem;
  }

  .arrow-left {
    padding-right: 1rem;
  }

  .button {
    font-family: var(--font-stack-segoe);
    font-size: 0.85rem;
    border: none;
    padding: 3px 10px 5px 10px;
    margin: 2px;
    border-radius: 0.5rem;
    cursor: pointer;
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