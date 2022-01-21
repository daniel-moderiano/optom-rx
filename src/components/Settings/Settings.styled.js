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
      /* color: var(--focus); */
      font-size: 0.9rem;
      font-family: var(--font-stack-segoe);
      /* font-weight: bold; */
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
    width: 180px;
    margin-top: 0.5rem;
  }

 
  .reset-password {
    /* width: 100%; */
    /* text-align: right; */
    background-color: transparent;
    border: none;
    color: #48515B;
    font-size: 1rem;
    font-family: var(--font-stack-segoe);
    /* font-weight: bold; */
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
    .error-container {
      margin-top: 1.25rem;
      background-color: #FBE9E7;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem;
      border-radius: 2px;

      .error-icon {
        line-height: 0;
        margin-right: 0.5rem;
      }

      .error-text {
        color: #C02121;
        font-size: 0.9rem;
        font-weight: 600;
      }
    }

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

  .verify-container {
    margin-top: 1rem;

    .img-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 0 1.5rem 0;

      .email-svg {
        width: 75px;
        pointer-events: none;
        enable-background:new 0 0 64 64;

        .st0{fill: #77B3D4;}

        .st1{opacity:0.2;}

        .st2{fill:#231F20;}

        .st3{fill:#E0E0D1;}

        .st4{fill:#FFFFFF;}
    
      }
    }
  }

  .modal-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .button {
    width: 180px;
  }

  
  /* Landscape phones and down */
  @media (max-width: 590px) { 
 
    .email-form {
      .email-group {
        width: 100%;
      }
    }

    .Modal {
      .Modal__content {
        width: 90%;
        text-align: left;
        max-width: 500px;
      }
    }
    
    
  }
            
            
  @media(max-width: 450px) {
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

  @media (max-width: 768px) {

      .form-title {
        font-size: 1.5rem;
      }
  }

  @media (max-width: 475px) {

      .form-title {
        font-size: 1.35rem;
      }
  }


`

export { StyledSettings }