import styled from "styled-components";

const StyledSignup = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .signup-container {

    background-color: #FFFFFF;
    box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
    padding: 1rem 3rem;
    width: 90%;
    max-width: 30rem;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-field {
      width: 24rem;
    }

    button {
      width: 24rem;
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
      margin: 2rem 0 1rem 0;

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
 

  .Signup__title {
    width: 100%;
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.2rem;
    margin: 1rem 0 0.75rem 0;
  }

  .signup-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.6rem;
  } 

  .displayName-group {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
  }

  .displayName-field, .pass-field {
    margin-bottom: 0;
  }

  .displayName-field {
    margin-top: 1.5rem;
  }

  .displayName-msg {
    /* font-style: italic; */
    font-size: 0.8rem;
    color: #5A6572;
  }

  .login-option {
    margin-bottom: 1.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .login-msg {
      color: #5A6572;
      margin-right: 0.4rem;
    }

    .login-link {
      text-decoration: none;
      color: var(--primary-color);
      font-weight: bold;
      font-size: 1rem;

      &:hover {
        text-decoration: underline;
      }

      &:focus {
        outline: 2px solid #104362;
        outline-offset: 2px;
      }
    }
  }

  .error-container {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
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

  
  /* Landscape phones and down */
  @media (max-width: 550px) { 
    .Signup__title {
      text-align: center;
    }

    .signup-container {
      
      margin: 0;
      padding: 1rem 1.5rem;
      width: 90%;
  
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .displayName-group {
        justify-content: center;
      }

      .form-field {
        max-width: 24rem;
        width: 100%;
      }

      button {
        max-width: 24rem;
        width: 100%;
      }
    }

    .login-option {
      justify-content: center;
      font-size: 0.9rem;

      .login-link {
   
        font-size: 0.9rem;

      }
    }

  }
`
export { StyledSignup }