import styled from "styled-components";

const StyledTable = styled.table`

  width: 100%;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  border-collapse: separate;
  border-radius: 6px;
  border-spacing: 0;
  -moz-border-radius:6px;

  .tableHeader {
    background-color: #F9FAFB;
    padding: 12px;

    text-align: left;


    font-weight: normal;

    border-top: none;
    border-bottom: 1px solid #D1D6DB;
  }

  .tableHeader:first-child {
    border-top-left-radius: 6px;
  }

  .tableHeader:last-child {
    border-top-right-radius: 6px;
  }

  .tableRowItems:nth-child(even) {
    background-color: #F9FAFB;
  }

  .tableCell {
    padding: 12px;
    font-size: 14px;
    color: #48515B;
  } 

`

export { StyledTable }