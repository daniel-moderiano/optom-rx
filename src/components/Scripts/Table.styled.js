import styled from "styled-components";

const StyledTable = styled.table`


  width: 100%;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  border-collapse: separate;
  border: solid black 1px;
  border-radius: 6px;
  border-spacing: 0;
  -moz-border-radius:6px;
  /* background-color: red; */

  th {
    border-top: none;
    border-bottom: 1px solid black;
  } 

  td:first-child, th:first-child {
    border-left: none;
  }



  .tableRowHeader {
    background-color: transparent;
    transition: all 0.25s ease;
    border-bottom: 2px solid black;
  }

  .tableHeader {
    background-color: #F9FAFB;
    padding: 12px;
    font-weight: 500;
    text-align: left;
    font-size: 14px;
    color: #2c3e50;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .tableHeader:first-child {
    border-top-left-radius: 6px;
  }

  .tableHeader:last-child {
    border-top-right-radius: 6px;
  }

  .tableRowItems {
    cursor: auto;
  }

  .tableRowItems:nth-child(even) {
    background-color: #F9FAFB;
  }

  .tableCell {
    padding: 12px;
    font-size: 14px;
    color: grey;
  } 

`

export { StyledTable }