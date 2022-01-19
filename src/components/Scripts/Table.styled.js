import styled from "styled-components";

const StyledTable = styled.table`

  width: 100%;
  border-collapse: separate;
  border-radius: 6px;
  border-spacing: 0;
  -moz-border-radius:6px;
  border: 1px solid #d0d7de;
  box-shadow: 0;

  .tableHeader {
    background-color: #F9FAFB;
    padding: 0.75rem 1.5rem;
    color: #48515B;
    font-size: 0.75rem;
    line-height: 0.85rem;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-weight: 600;
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
          outline-offset: 2px;
        }
    }
  } 

  /* Simple CSS for flexbox table on mobile */
  @media(max-width: 600px) {
    thead {
      left: -9999px;
      position: absolute;
      visibility: hidden;
    }

    tr {
      border-bottom: 0;
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px -1px rgb(0 0 0 / 1%), 0 1px 5px 0 rgb(0 0 0 / 5%), 0 1px 5px 0 rgb(0 0 0 / 10%);
      border-collapse: separate;
      border-radius: 6px;
      border-spacing: 0;
      -moz-border-radius:6px;
    }

    .tableCell {
      position: relative;
      padding: 2.1rem 1rem 0.9rem 1rem;
      width: 100%;
      border: none;

      &:nth-of-type(3) {
        border-radius: 6px;
        width: 100%;
      }
    }

    .tableCell:before {
      position: absolute;
      
      top: 0;
      left: 0;
      content: attr(data-title);
      display: inline-block;
      height: 14px;
      width: calc(100% - 0.5rem);
      background-color: #F9FAFB;
      padding: 0.2rem 0rem 0.2rem 0.5rem;
      color: #48515B;
      font-size: 0.75rem;
      line-height: 0.85rem;
      text-align: left;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      border-top: none;
      font-weight: 600;
    }

    .tableRowItems:last-child {
      border-bottom: 1px solid #D1D6DB;
      border-radius: 6px;
      margin-bottom: 0;
    }

    .tableRowItems:nth-child(even) {
      background-color: #FFFFFF;
    }
  }



`

export { StyledTable }