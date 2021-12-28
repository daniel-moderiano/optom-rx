import styled from "styled-components";

const StyledTable = styled.table`

    border-collapse: collapse;
    border: none;
    width: 100%;


  .tableRowHeader {
    background-color: transparent;
    transition: all 0.25s ease;
    border-radius: 10px;
  }

  .tableHeader {
    background-color: #f1f1f1;
    padding: 12px;
    font-weight: 500;
    text-align: left;
    font-size: 14px;
    color: #2c3e50;
  }

  .tableHeader:first-child {
    border-top-left-radius: 15px;
  }

  .tableHeader:last-child {
    border-top-right-radius: 15px;
  }

  .tableRowItems {
    cursor: auto;
  }

  .tableRowItems:nth-child(odd) {
    background-color: #f9f9f9;
  }

  .tableCell {
    padding: 12px;
    font-size: 14px;
    color: grey;
  }

`

export { StyledTable }