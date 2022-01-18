import styled from "styled-components";

const StyledLogin = styled.div`
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

  .login-container {
    /* margin-top: -4.7rem; */
    background-color: #FFFFFF;
    box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
    padding: 1.5rem 3.5rem 0.85rem 3.5rem;
    width: 90%;
    max-width: 30rem;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    /* border: 1px solid #d0d7de; */
    /* border-radius: 6px; */
    /* box-shadow: var(--small-shadow); */
  }

  .Login__title {
    width: 100%;
    /* font-family: var(--font-stack-myriad); */
    font-family: var(--font-title);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.2rem;
    margin: 1rem 0 0.5rem 0;
    /* text-align: center; */
  }

  .login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.6rem;
    margin-top: 2rem;

  } 

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-field {
      width: 24rem;
      width: 100%;

      /* label {
        width: auto;
      } */
    }

    button {
      width: 24rem;
      width: 100%;
      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      box-sizing: border-box;
      cursor: pointer;
      padding: 8px 16px 10px 16px;
      border-radius: 2px;
      min-width: 80px;
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      border: none;
      margin: 1.7rem 0 0.5rem 0;

      &:active {
        transform: scale(0.98);
      }

      &:hover {
        background-color: var(--btn-primary-hover);
      }

      &:focus {
        outline: 2px solid #104362;
        outline-offset: 2px;
      }
    }
  }

 

  .signup-option {
    margin-bottom: 0.75rem;
    margin-top: 1.5rem;
    padding-top: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* border-top: 1px solid #D1D6DB; */

    .signup-msg {
      color: #5A6572;
      margin-right: 0.4rem;
    }

    .signup-link {
      text-decoration: none;
      color: var(--primary-color);
      font-weight: bold;
      font-size: 1rem;
      border-radius: 2px;

      &:hover {
        text-decoration: underline;
      }

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
  }

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

  .password-group {
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  /* Eye icon */
  .toggle-password {
    min-width: 20px;
    width: 20px;
    position: absolute;
    /* right: 0; */
    top: 3.2rem;
    right: 1rem;
    background-color: transparent;
    border: none;
    color: #48515B;
    font-size: 0.9rem;
    padding: 0;
    margin: 0;
    z-index: 2;

    &:hover {
      background-color: transparent;
      color: #1B1E22;
    }

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

    .overlay {
      width: 20px;
      height: 20px;
      position: absolute;
      background-color: #fff;
      opacity: 0.5;
      pointer-events: none;
    }
  }

  .reset-password {
 
    text-align: center;
    background-color: transparent;
    border: none;
    color: #48515B;
    font-size: 0.9rem;
    font-family: var(--font-stack-segoe);
    /* font-weight: bold; */
    padding: 0;
    margin: 0;
    text-decoration: none;

  

    &:hover {
      background-color: transparent;
      color: #1B1E22;
      cursor: pointer;
    }

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

  
  /* Landscape phones and down */
  @media (max-width: 550px) { 
    .Login__title {
      text-align: center;
    }

    .login-container {
      
      margin: 0;
      padding: 1rem 1.5rem;
      width: 100%;
  
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    form {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .form-field {
        max-width: 24rem;
        width: 100%;
      }

      button {
        max-width: 24rem;
        width: 100%;
      }
    }

    .signup-option {
      justify-content: center;
      font-size: 0.9rem;
      width: 90%;
      .signup-link {
   
        font-size: 0.9rem;

      }
    }

    .reset-password {
      width: 90%;
    }

  }


`
export { StyledLogin }