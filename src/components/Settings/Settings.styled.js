import styled from "styled-components";

const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 3rem 0;
  background-color: #FFFFFF;
  /* box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%); */
  padding: 3rem 5.5rem;
  max-width: 1140px;
  width: 100%;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  box-shadow: var(--small-shadow);

  .settings-container {
    display: flex;
    flex-direction: column;

  }

  .Home__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    margin: 0 0 0.5rem 0;
    padding: 0;
  }

  .hidden {
    display: none;
  }

  .form-title {
    display: block;
    padding: 0;
    font-size: 1.6rem;
    font-family: var(--font-title);
    color: var(--title-color);
    border-bottom: 1px solid #dfe1e1;
    padding-bottom: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .displayName-form, .password-form, .delete-account {
    padding: 1.5rem 0 2rem 0;
    display: flex;
    flex-direction: column;
  }

  .form-title--delete {
    font-weight: bold;
    color: #cc3232;
  }

  .warning {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  .settings-btn {
    font-size: 1rem;
    font-family: var(--font-stack-segoe);
    box-sizing: border-box;
    cursor: pointer;
    padding: 6px 14px 8px 14px;
    border-radius: 2px;
    min-width: 80px;
    max-width: 180px;
   
    

    &:active {
      transform: scale(0.98);
    }

    &:focus {
      outline: 2px solid #104362;
      outline-offset: 2px;
    }
  }

  .settings-btn--update {
    margin-top: 0.5rem;
    background-color: var(--primary-color);
    color: rgb(255, 255, 255);
    border: 1px solid var(--primary-color); 
    text-decoration: none;
    
    &:hover {
      background-color: var(--btn-primary-hover);
      border: 1px solid var(--btn-primary-hover);
    }
  }

  .settings-btn--delete {
    
    /* min-width: 130px; */
    background-color: #cc3232;
    color: rgb(255, 255, 255);
    border: none;
    max-width: 150px;

  }
  
  .settings-btn--delete:hover {
    background-color: var(--btn-negative-hover-text);
  }

  .reset-password {
    width: 100%;
    text-align: right;
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

    .Modal__buttons {
      padding-top: 2rem;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-end;

      .Modal__btn {
        font-size: 0.9rem;
        font-family: var(--font-stack-segoe);
        box-sizing: border-box;
        cursor: pointer;
        padding: 6px 14px 8px 14px;
        border-radius: 2px;
        min-width: 80px;

        &:active {
          transform: scale(0.98);
        }

        &:focus {
          outline: 2px solid #104362;
          outline-offset: 2px;
        }
      }

      .delete-btn {
        /* min-width: 130px; */
        background-color: #cc3232;
        color: rgb(255, 255, 255);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;      

      }
      
      .delete-btn:hover {
        background-color: var(--btn-negative-hover-text);
      }
            
      .cancel-btn {
        text-decoration: none;
        margin-right: 1rem;
        /* min-width: 80px; */
        background-color: var(--btn-secondary);
        color: var(--btn-secondary-text);
        border: none;
      }
      .cancel-btn:hover {
        background-color: var(--btn-secondary-hover);
        color: #21252A;
      }
    }
  }

  

`

export { StyledSettings }