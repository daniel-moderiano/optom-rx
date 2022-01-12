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
    padding: 0.75rem 1.5rem;
    color: #48515B;
    font-size: 0.75rem;
    line-height: 0.85rem;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-family: var(--font-stack-segoe-semibold);
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
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    color: #48515B;

    a {
      /* font-weight: 600; */
      color: #0b4740;

      &:focus {
        outline: 2px solid #104362;
        outline-offset: 2px;
      }
    }
  } 

`

export { StyledTable }