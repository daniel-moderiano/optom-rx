import styled from "styled-components";

const StyledSignup = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .signup-container {
    margin-top: -4.7rem;
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
    }
  }

  .Dots {
    position: relative;
    width: 55px;
    height: 6px;

    /* Default (no color provided) styling */
    span {
      position: absolute;
      width: 8px;
      height: 8px;
      background: rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      background-color:  var(--primary-color);
      -webkit-animation: dots 1s infinite ease-in-out both;
              animation: dots 1s infinite ease-in-out both;
      margin-right: 5px;
    }

    .white {
      background-color:  #fff;
    }

    .blue {
      background-color: var(--neutral);
    }

    span:nth-child(1) {
      left: 0px;
      -webkit-animation-delay: 0.0s;
              animation-delay: 0.0s;
    }

    span:nth-child(2) {
      left: 15px;
      -webkit-animation-delay: 0.1s;
              animation-delay: 0.1s;
    }

    span:nth-child(3) {
      left: 30px;
      -webkit-animation-delay: 0.2s;
              animation-delay: 0.2s;
    }

    span:nth-child(4) {
      left: 45px;
      -webkit-animation-delay: 0.3s;
              animation-delay: 0.3s;
    }

    @keyframes dots {
      0%, 80%, 100% {
        -webkit-transform: scale(0);
                transform: scale(0);
        -webkit-transform: scale(0);
                transform: scale(0);
        opacity: 0;
      }
      40% {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-transform: scale(1);
                transform: scale(1);
        opacity: 1;
      }
    }
    @-webkit-keyframes dots {
      0%, 80%, 100% {
        -webkit-transform: scale(0);
                transform: scale(0);
        opacity: 0;
      }
      40% {
        -webkit-transform: scale(1);
                transform: scale(1);
        opacity: 1;
      }
    }
  }
  

  .Signup__title {
    place-self: flex-start;
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

  .displayName-field {
    margin-bottom: 0;
  }

  .displayName-msg {
    font-style: italic;
    font-size: 0.8rem;
    color: #5A6572;
  }

  .login-option {
    margin-bottom: 1.5rem;
    place-self: flex-end;

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
    }
  }
`
export { StyledSignup }