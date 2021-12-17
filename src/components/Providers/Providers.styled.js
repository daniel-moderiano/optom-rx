import styled from "styled-components";

const StyledProviders = styled.div`
  margin-top: 1rem;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 3rem;
  width: 90%;

  .Providers__title {
    font-family: var(--font-title);
    font-weight: normal;
    color: var(--title-color);
    font-size: 2rem;
    padding: 0;
    margin: 0;
  }

  .Providers__add-btn {
    font-size: 1rem;
    font-family: var(--font-stack-segoe);
    box-sizing: border-box;
    cursor: pointer;
    padding: 6px 16px 8px 16px;
    border-radius: 2px;
    min-width: 80px;
    background-color: rgb(0, 120, 212);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(0, 120, 212); 
    margin-bottom: 1.5rem;
    
    &:hover {
      background-color: rgb(16, 110, 190);
      border: 1px solid rgb(16, 110, 190);
    }
  }

  .Providers__table {
    padding: 0;
    margin: 0;
    border-collapse: collapse;
    width: 100%;
    /* table-layout: fixed; */

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
      border-bottom: 1px solid #d4d4d4;

      td, th {
        margin: 0;
        padding: 0.5rem 0;
        text-align: left;
        font-size: 0.9rem;
        /* vertical-align: middle; */
      }

      .actions-cell {
        padding-left: 0.5rem;

        .table__action {
          font-size: 0.85rem;
          font-family: var(--font-stack-segoe);
          box-sizing: border-box;
          text-decoration: none;
          cursor: pointer;
          padding: 2px 8px 5px 8px;
          border-radius: 2px;
          /* min-width: 80px; */
          background-color: rgb(0, 120, 212);
          color: rgb(255, 255, 255);
          border: 1px solid rgb(0, 120, 212); 
          
          &:hover {
            background-color: rgb(16, 110, 190);
            border: 1px solid rgb(16, 110, 190);
          }
        }

        .edit {
          margin-right: 0.8rem;
        }

        .delete {
          background-color: var(--error);
          border: 1px solid var(--error); 

          &:hover {
            background-color: #a80000;
            border: 1px solid #a80000;
          }
        }

        

        max-width: 10rem;
      }

      .actions-header {
        padding-left: 0.5rem;
      }

      .default-header {
        text-align: center
      }

      .default-cell {

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
    }

  }
  
  .checkbox {
    width: auto;

    
  }
`

export { StyledProviders }