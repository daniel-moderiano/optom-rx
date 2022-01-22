import styled from "styled-components";

const StyledTableProviders = styled.table`


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
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 0px 1px 0px;
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

      border-radius: 6px;
      margin-bottom: 0;
    }
  }

  @media(max-width: 360px) {
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