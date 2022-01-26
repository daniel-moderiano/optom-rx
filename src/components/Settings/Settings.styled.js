import styled from "styled-components";

const StyledSettings = styled.div`
  .settings-container {
    display: flex;
    flex-direction: column;
  }

  .hidden {
    display: none;
  }

  .form-title {
    display: block;
    padding: 0;
    border-bottom: 1px solid #dfe1e1;
    padding-bottom: 0.5rem;
    margin-bottom: 0.75rem;
    font-size: 1.6rem;
    font-weight: 200;
    font-family: var(--font-stack-segoe);
    color: var(--title-color);
  }

  .displayName-form, .password-form, .delete-account, .email-form {
    padding: 1.75rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    
    .PasswordContainer {
      max-width: 26rem;
    }
  }

  .displayName-form {
    padding-top: 1.25rem;
  }

  .change-email {
    padding: 1.5rem 0 2rem 0;
    display: flex;
    flex-direction: column;

    .no-email-desc {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .current-email {
      font-weight: bolder;
      text-size-adjust: 100%;
      margin-right: 2rem;
      margin-bottom: 0.3rem;
      margin-top: 0.75rem;
      display: flex;
      align-items: center;

      .unverified, .verified {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--warning);
        font-size: 0.9rem;
        font-weight: normal;
        margin-left: 1rem;

        span {
          margin-left: 0.2rem;
          margin-bottom: 0.05rem;
        }
      }

      .verified {
        color: var(--success-text);
      }
    }

    .email-group {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;      

      .unverified, .verified {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--warning);
        font-size: 0.9rem;

        span {
          margin-left: 0.2rem;
          margin-bottom: 0.05rem;
        }
      }

      .verified {
        color: var(--success-text);
      }
    }

    .resend {
      text-align: center;
      background-color: transparent;
      border: none;
      color: #48515B;
      font-size: 0.9rem;
      font-family: var(--font-stack-segoe);
      padding: 0;
      margin: 0 0 0.05rem 1rem;

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
  }

  .changePassword-btns {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    .button {
      margin: -0.25rem 0.5rem 0 0;
    }
  }
        
  .form-title--delete {
    font-weight: 600;
    color: #cc3232;
  }

  .warning {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
  }

  .button {
    padding: 6px 14px 8px 14px;
    width: 196px;
    margin-top: 0.5rem;
  }

  .reset-password {
    background-color: transparent;
    border: none;
    color: #48515B;
    font-size: 1rem;
    font-family: var(--font-stack-segoe);
    padding: 0;
    margin: 0 0 0 1rem;
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

  .Modal {
    .neutral-container {
      margin-top: 1.25rem;
      background-color: #eaeef1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem;
      border-radius: 2px;

      .neutral-icon {
        line-height: 0;
        margin-right: 0.5rem;
      }

      .neutral-text {
        color: #00477A;
        font-size: 0.9rem;
        font-weight: bold;
      }
    }

    .provider-display {
      padding-top: 1.25rem;
      .provider-label {
        font-size: 0.85rem;
        color: #5A6572;
        margin-bottom: 0.4rem;
      }
    }

    .update-display {
      width: 100%;
      padding-top: 1.25rem;
      margin-bottom: 0.5rem;
      .update-label {
        font-size: 0.9rem;
        color: #5A6572;
        margin-bottom: 0.4rem;
      }
    }

    form {
      display: flex;
      flex-direction: column;

      .form-field {
        width: 100%;
      }
    }
    
    .Modal__buttons {
      padding-top: 0.5rem;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-end;
      
      .button {
        font-size: 0.9rem;
        min-width: 80px;
        width: 100px;
        height: 35px;
      }
   
      .cancel {
        margin-right: 1rem;
      }
    }
  }


  /* Landscape phones/portrait tables */
  @media (max-width: 768px) {
    .form-title {
      font-size: 1.5rem;
    }
  }

  /* Landscape phones/portrait tables - smaller screen where form width breaks */
  @media (max-width: 590px) { 
    .email-form {
      .email-group {
        width: 100%;
      }
    }
  }
        
  /* Portrait phones */
  @media(max-width: 450px) {
    .form-title {
      font-size: 1.35rem;
    }

    .settings-btn {
      margin-left: 0;
      margin-right: 0;
    }

    .changePassword-btns {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .reset-password {
        text-align: left;
        margin: 0;
        margin-top: 1rem;
      }

      .resend {
        text-align: left;
        margin: 0;
        margin-top: 1rem;
      }
    }
  }
`

export { StyledSettings }