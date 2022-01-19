import styled from "styled-components";

const StyledScripts = styled.div`

  .Scripts__container {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .table-container {
      width: 100%;
    }
  }

  .table {
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


  /* Landscape phone to portrait tablet */
  @media (max-width: 768px) { 
   
    .TableFooter {
      justify-content: center;
    }
  }

  /* Landscape phone to portrait tablet */
  @media (max-width: 550px) { 
    .table {
      border: none;
      box-shadow: none;
      padding: 0;
    }

    .table-none {
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
      border-collapse: separate;
      border-radius: 6px;
      border-spacing: 0;
      -moz-border-radius:6px;

      .tableHeader {
        font-size: 0;
      }
    }

    .TableFooter {
      justify-content: center;
    }

    .Modal {
      .Modal__content {
        width: 90%;
        text-align: left;
        max-width: 500px;
      }
    }
  }

  
`

export { StyledScripts }