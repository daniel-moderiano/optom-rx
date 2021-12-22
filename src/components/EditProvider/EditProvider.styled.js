import styled from "styled-components";

const StyledEditProvider = styled.div`
  margin-top: 1rem;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 3rem;
  width: 90%;
  max-width: 880px;

  .EditProvider__title {
    font-family: var(--font-title);
    font-weight: normal;
    color: var(--title-color);
    font-size: 2rem;
    padding: 0;
    margin: 0 0 0.75rem 0;
  }

  .EditProvider__description {
    margin: 0;
  }

  .ProviderForm {
    margin-top: 2rem;
  }

  .ProviderForm__btns {
    /* place-self: flex-end;
    margin-right: 10%; */

    .ProviderForm__btn {
      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      box-sizing: border-box;
      cursor: pointer;
      padding: 8px 16px 10px 16px;
      border-radius: 2px;

    }

    .submit-btn {
      min-width: 80px;
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      /* border: 1px solid rgb(0, 120, 212);          */
      border: none;
    }
    
    .submit-btn:hover {
      background-color: var(--btn-primary-hover);
      /* border: 1px solid rgb(16, 110, 190); */
    }
          
    .cancel-btn {
      text-decoration: none;
      margin-right: 2rem;
      min-width: 80px;
      background-color: var(--btn-secondary);
      color: var(--btn-secondary-text);
      /* border: 1px solid rgb(138, 136, 134);                 */
      border: none;
    }
    .cancel-btn:hover {
      background-color: var(--btn-secondary-hover);
      color: #21252A;
    }
  }

`

export { StyledEditProvider }