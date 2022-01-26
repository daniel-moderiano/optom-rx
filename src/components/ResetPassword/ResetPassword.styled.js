import styled from "styled-components";

const StyledResetPassword = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;

  .Login__container {
    background-color: #FFFFFF;
    box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
    padding: 2.4rem 3.5rem 2.5rem 3.5rem;
    width: 90%;
    max-width: 31rem;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }

  .Login__title {
    width: 100%;
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.2rem;
    margin: 0 0 1.6rem 0;
  }
  
  .Login__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-field {
      width: 100%;
      height: auto;
      margin: 0 0 1.5rem 0;      
    }
  
    /* Strictly styling the backend error container above the login button */
    .error-container {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: -1rem;
      width: 100%;

      .alert-icon {
        margin-right: 0.3rem;
        flex-shrink: 0;
      }

      .alert--error {
        color: var(--error);
        font-size: 0.8rem;
      }
    }

    .Login__btn {
      margin-top: 2rem;
      margin: 1rem 0 0.5rem 0;
      width: 100%;
    }     
  }  

  /* Landscape phones/portrait tables */
  @media (max-width: 550px) { 
    .Login__title {
      text-align: center;
      font-size: 2.1rem;
    }

    .Login__container {
      padding: 1.5rem 1.5rem 1.7rem 1.5rem;
      width: 100%;
      align-items: center;
    }

    .Login__form {
      width: 85%;
    }
  }

  /* Portrait phones */
  @media (max-width: 400px) {
    .Login__title {
      font-size: 2rem;
    }

    .Login__form {
      width: 90%;
    }

    .button {
      font-size: 0.9rem;
      height: 2.2rem;
    }

    .form-field {
      input {
        padding: 8px 12px;
        font-size: 0.9rem;
      }   
    }
  }
`
export { StyledResetPassword }