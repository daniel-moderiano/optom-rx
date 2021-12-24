import styled from "styled-components";

const StyledProviders = styled.div`
  margin: 3rem 0;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 5.5rem 4rem 5.5rem;
  width: 90%;

  .Providers__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    padding: 0;
    margin: 1rem 0 0.75rem 0;
    place-self: flex-start;
  }

  .Providers__description {
    margin: 0;
  }

  .Providers__add-btn {
    display: inline-block;
    font-size: 1rem;
    font-family: var(--font-stack-segoe);
    box-sizing: border-box;
    cursor: pointer;
    padding: 6px 16px 8px 16px;
    border-radius: 2px;
    min-width: 80px;
    background-color: var(--primary-color);
    color: rgb(255, 255, 255);
    border: 1px solid var(--primary-color); 
    text-decoration: none;
    margin-top: 0.75rem;
    
    &:hover {
      background-color: var(--btn-primary-hover);
      border: 1px solid var(--btn-primary-hover);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  .Providers__table {

    margin-top: 2rem;
    border-collapse: collapse;
    width: 100%;
    /* table-layout: fixed; */
    /* border: 1px solid black; */
    /* box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%); */

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
        /* vertical-align: middle; */
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