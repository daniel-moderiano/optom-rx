import styled from "styled-components";

const StyledScripts = styled.div`

  .Scripts__container {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .pagination {
    padding-top: 0.8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .table, .data-table {
    width: 100%;
    border-collapse: separate;
    border-radius: 6px;
    border-spacing: 0;
    -moz-border-radius:6px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

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

    .tableCellNone {
      height: 7rem;
      text-align: center;
      vertical-align: middle;
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
      color: #5A6572;

      .tableRowItems:last-child {
        .tableCell {
          border-bottom: none;
        }
      }
    }

    .tableCell {
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
      color: #48515B;
    
      a {
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

    .tableRowItems:last-child {
      .tableCell {
        border-bottom: none;
      }
    }
  }

  .table-none {
    .tableHeader {
      font-size: 0;
    }
  }

  .Spinner {
    margin-top: 2rem;
  }


  /* Convert to card display when table width reaches breaking point (not specific to device) */
  @media (max-width: 700px) { 
    .data-table {
      border: none;
      box-shadow: none;
      padding: 0;

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
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
        border-collapse: separate;
        border-radius: 6px;
        border-spacing: 0;
        -moz-border-radius:6px;
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

    .pagination {
      justify-content: center;
    }
  }
`

export { StyledScripts }