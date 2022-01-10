import styled from "styled-components";

const StyledScripts = styled.div`
  margin: 3rem 0;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 5.5rem 4rem 5.5rem;
  max-width: 1140px;
  width: 100%;

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

  .Scripts__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    padding: 0;
    margin: 1rem 0 0.75rem 0;
    place-self: flex-start;
  }

  .Scripts__description {
    margin: 0;
  }

  .Spinner {
    margin-top: 2rem;
  }
`

export { StyledScripts }