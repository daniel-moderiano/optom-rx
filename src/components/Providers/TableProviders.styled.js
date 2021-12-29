import styled from "styled-components";

const StyledTableProviders = styled.table`

  width: 100%;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

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

  .tableCell {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    color: #48515B;
    border-bottom: 1px solid #D1D6DB;

  
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

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;

      label {
        width: 16px;
        position: relative;

        .checkmark {
          position: absolute;
          width: 5px;
          height: 10px;
          top: 2px;
          left: 0.35rem;
          border: solid white;
          border-width: 0 2px 2px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }  
  } 

  .default-header {
        text-align: center
      }

  .tableRowItems:last-child {
    .tableCell {
      border-bottom: none;
    }
  }

  

`

export { StyledTableProviders }