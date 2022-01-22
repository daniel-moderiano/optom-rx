import styled from "styled-components";

const StyledProviders = styled.div`
  .Providers__list {
    position: relative;
  }

  .no-providers-text {
    color: #757575;
  }

  .Providers__container {
    display: flex;
    align-items: center;
    justify-content: center;

    .Spinner {
      margin-top: 4rem;
    }

    .table__container {
      width: 100%;
    }
  }

  .Providers__add-btn {
    max-width: 170px;
    margin-top: 1.85rem;
  }


  .table {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 0px 1px 0px;
    border-collapse: separate;
    border-radius: 6px;
    border-spacing: 0;
    -moz-border-radius:6px;
    margin-top: 2rem;

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

    .tableCell {
      padding: 0.8rem 1.5rem;
      font-size: 0.9rem;
      color: #48515B;
      border-bottom: 1px solid #D1D6DB;
      vertical-align: middle;

    
      .table__action {
        font-size: 0.85rem;
        font-family: var(--font-stack-segoe);
        box-sizing: border-box;
        text-decoration: none;
        cursor: pointer;
        padding: 2px 8px 5px 8px;
        border-radius: 2px;
        background-color: #fff;
        box-sizing: border-box;
        height: 1.75rem;

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

        &:active {
          transform: scale(0.98);
        }
      }

      .default {
        color: var(--neutral);
        border: 0.1rem solid #4a7188; 
        width: 8rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    
        &:hover {
          background-color: #f8fafa;
          border: 0.1rem solid var(--neutral);
        }
      }

      .default--selected {
        width: 8rem;
        color: #fff;
        border: 0.1rem solid #1A6899; 
        background-color: #1A6899;
        
        
        &:hover {
          border: 0.1rem solid #1A6899; 
          background-color: #185F8C;
        }
      }

      .edit {
        margin-right: 0.8rem;
        color: var(--btn-positive);
        border: 0.1rem solid var(--btn-positive); 
        
        &:hover {
          color: var(--btn-positive-hover-text);
          background-color: var(--btn-positive-hover);
          border: 0.1rem solid var(--btn-positive);
        }
      }

      .delete {
        border: 0.1rem solid var(--btn-negative); 
        color: var(--btn-negative);
        margin-right: 0.8rem;

        &:hover {
          background-color: var(--btn-negative-hover);
          color: var(--btn-negative-hover-text);
          border: 0.1rem solid var(--btn-negative); 
        }
      }
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

  .Providers__none {
    margin-top: 2rem;
  }

  .Providers__table {

    margin-top: 2rem;
    border-collapse: collapse;
    width: 100%;

    .table__header-row {
      border-bottom: 1px solid #646e6d;
    }

    .table__form {
      &.expand {
        display: table-row;
      }

      &.collapse {
        display: none;
      }
    }

    tr {
      margin: 0;
      border-bottom: 1px solid #dfe1e1;

      td, th {
        margin: 0;
        padding: 0.5rem 0;
        text-align: left;
        font-size: 0.9rem;
      }

      .name-cell, .name-header {
        padding-left: 1rem;
      }

      .actions-cell {
        padding: 0 0.5rem;

        .table__action {
          font-size: 0.85rem;
          font-family: var(--font-stack-segoe);
          box-sizing: border-box;
          text-decoration: none;
          cursor: pointer;
          padding: 2px 8px 5px 8px;
          border-radius: 2px;
          background-color: #fff;
        }

        .edit {
          margin-right: 0.8rem;
          color: var(--btn-positive);
          border: 0.1rem solid var(--btn-positive); 
          
          &:hover {
            color: var(--btn-positive-hover-text);
            background-color: var(--btn-positive-hover);
            border: 0.1rem solid var(--btn-positive);
          }
        }

        .delete {
          border: 0.1rem solid var(--btn-negative); 
          color: var(--btn-negative);

          &:hover {
            background-color: var(--btn-negative-hover);
            color: var(--btn-negative-hover-text);
            border: 0.1rem solid var(--btn-negative); 
          }
        }
        max-width: 10rem;
      }

      .actions-header {
        padding-left: 0.5rem;
      }
    }
  }

  .Modal {
    .error-container {
      margin-top: 1.25rem;
      background-color: #FBE9E7;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem;
      border-radius: 2px;

      .error-icon {
        line-height: 0;
        margin-right: 0.5rem;
      }

      .error-text {
        color: #C02121;
        font-size: 0.9rem;
        font-weight: 600;
      }
    }

    .provider-display {
      padding-top: 1.25rem;
      margin-bottom: 2rem;
      .provider-label {
        font-size: 0.85rem;
        color: #5A6572;
        margin-bottom: 0.4rem;
      }
    }

    .Modal__buttons {
      padding-top: 0.5rem;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-end;
      

      .button {
        font-size: 0.9rem;
        min-width: 80px;
        width: 100px;
        height: 35px;
      }
   
      .cancel {
        margin-right: 1rem;
      }
    }    
  }
  
  
  @media(max-width: 700px) {
    .table {
      border: none;
      box-shadow: none;
      padding: 0;
    }

    .table-none {
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 0px 1px 0px;
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
  }
`

export { StyledProviders }