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
      font-weight: 600;
      border-top: none;
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
        width: 7.1rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    
        &:hover {
          background-color: #f8fafa;
          border: 0.1rem solid var(--neutral);
        }
      }

      .default--selected {
        width: 7.1rem;
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

    .default-header {
          text-align: center
        }

    .tableRowItems:last-child {
      .tableCell {
        border-bottom: none;
      }
    }
  

    .btns {
      display: flex;

      .non-default {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
 

      /* Landscape phone to portrait tablet */
  @media (max-width: 800px) { 

    .table {
      border: none;
      box-shadow: none;
      padding: 0;
    }
  
    
    .btns {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .default, .default--selected {
        margin-top: 1rem;
      }

      .delete {
        margin: 0;
      }
    }
  }

  /* Landscape phone to portrait tablet */
  @media (max-width: 800px) { 
  
    
    

    .btns {
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;

      .default, .default--selected {
        margin-top: 0;
      }

      .delete {
        margin-right: 0.8rem;
      }
    }
  }

  @media(min-width: 360px) and (max-width: 700px) {
    .btns {
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;

      .default, .default--selected {
        margin-top: 0;
      }

      .delete {
        margin-right: 0.8rem;
      }
    }
  }

  /* Simple CSS for flexbox table on mobile */
  @media(max-width: 700px) {
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
      font-family: var(--font-stack-segoe-semibold);
      border-top: none;
    }

    .tableRowItems:last-child {
      border-bottom: 1px solid #D1D6DB;
      border-radius: 6px;
      margin-bottom: 0;
    }
  }

  @media(max-width: 326px) {
    .btns {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .default, .default--selected {
        margin-top: 1rem;
      }

      .delete {
        margin: 0;
      }
    }
  }


  

`

export { StyledTableProviders }