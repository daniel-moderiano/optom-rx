import styled from "styled-components";

const StyledTableFooter = styled.div`

  /* background-color: #f1f1f1; */
  padding: 8px 0px;
  width: 100%;
  font-weight: 500;
  text-align: left;
  font-size: 16px;
  color: #2c3e50;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;


  .button {
    border: none;
    padding: 7px 14px;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 4px;
    margin-left: 4px;
  }

  .activeButton {
    color: white;
    background: #185adb;
  }

  .inactiveButton {
    color: #2c3e50;
    background: #f9f9f9;
  }
`

export { StyledTableFooter }