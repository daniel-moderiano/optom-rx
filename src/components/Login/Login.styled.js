import styled from "styled-components";

const StyledLogin = styled.div`
/* The overall page styling, NOT the login form/container itself */
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 4rem;

  .Spinner {
    margin-top: -4rem;
  }



  /* The actual white space around the form */
  .Login__container {
    background-color: #FFFFFF;
    box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
    padding: 2.5rem 3.5rem 0.85rem 3.5rem;
    width: 90%;
    max-width: 31rem;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }

  .Login__title {
    width: 100%;
    font-family: var(--font-title);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.2rem;
    margin: 0 0 1.5rem 0;
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

    .toggle-password {
      top: 38px;
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
      margin: 1.5rem 0 0.5rem 0;
      width: 100%;
    }     
  }  

  /* Adding keyboard only focus styles */
  .reset-password, .signup-link {
    &:focus {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }

    &:focus:not(:focus-visible) {
      outline: none
    }

    &:focus-visible {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }
  }

  .signup-option {
    margin: 1.5rem 0 0.75rem 0;
    padding-top: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .signup-msg {
      color: #48515B;
      margin-right: 0.4rem;
    }

    .signup-link {
      text-decoration: none;
      color: var(--primary-color);
      font-weight: bold;
      border-radius: 2px;

      &:hover {
        text-decoration: underline;
      }
    }
  }


  .forgot-password {
    text-align: center;
    color: #48515B;
    font-size: 0.9rem;
    text-decoration: none;
    border-radius: 2px;
    margin-top: 0.25rem;

    &:hover {
      background-color: transparent;
      color: #1B1E22;
    }    
  }

  
  /* Landscape phones and down */
  @media (max-width: 550px) { 
    .Login__title {
      text-align: center;
      font-size: 2.1rem;
    }

    .Login__container {
      padding: 1.5rem 1.5rem 1rem 1.5rem;
      width: 100%;
      align-items: center;
    }

    .Login__form {
      width: 85%;
    }

    .signup-option {
      justify-content: center;
      font-size: 0.9rem;
      width: 90%;
      margin-top: 1rem;

      .signup-link {
        font-size: 0.9rem;
      }
    }

    
  }

  @media (max-width: 400px) {

    .Login__title {
      font-size: 2rem;
    }
    .Login__form {
      width: 90%;

      .toggle-password {
        top: 34px;
      }
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
export { StyledLogin }