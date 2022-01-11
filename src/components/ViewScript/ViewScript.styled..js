import styled from "styled-components";

const StyledViewScript = styled.div`
  margin-top: 3rem;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 5.5rem;
  width: 90%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    /* border-bottom: 1px solid #dfe1e1; */
  }

  .header {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;

    .fav-btn {
      padding-top: 1.4rem;
      background-color: transparent;
      border: none;
      font-size: 1rem;
      font-weight: bold;
      color: var(--primary-color);
      font-family: var(--font-stack-segoe);
      margin-left: 1rem;
      display: flex;
      align-items: center;

      .fav-icon {
        width: 20px;
        margin-right: 0.5rem;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  .script__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .EditProvider__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    padding: 0;
    margin: 1rem 0 0.75rem 0;
  }

  .EditProvider__description {
    margin: 0;
    padding: 0;
    width: 100%;
    padding: 0.5rem 0.5rem;
    font-size: 0.8rem;
    color: #5A6572;
    text-align: center;
  }

  .ProviderForm__btns {
    /* place-self: flex-end; */
    margin: 2rem 0 2.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;


    .ProviderForm__btn {
      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      box-sizing: border-box;
      cursor: pointer;
      padding: 8px 16px 10px 16px;
      border-radius: 2px;

      &:active {
        transform: scale(0.98);
      }
    }

    .submit-btn {
      min-width: 80px;
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      border: none;
      margin-right: 1.5rem;
      text-decoration: none;
    }
    
    .submit-btn:hover {
      background-color: var(--btn-primary-hover);
    }
          
    .cancel-btn {
      text-decoration: none;
      /* margin-right: 2rem; */
      min-width: 80px;
      background-color: var(--btn-secondary);
      color: var(--btn-secondary-text);
      border: none;
    }
    .cancel-btn:hover {
      background-color: var(--btn-secondary-hover);
      color: #21252A;
    }

    .add-btn {
      right: 0;
      background-color: transparent;
      border: none;
      font-size: 0.9rem;
      font-weight: bold;
      color: var(--primary-color);
      font-family: var(--font-stack-segoe);
      margin-left: 1rem;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .Script__info {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 6px;
    /* margin-top: 2.5rem; */
    display: flex;
    flex-direction: column;
    
    

    .Script__title {
      background-color: #F9FAFB;
      padding: 0.75rem 0.5rem;
      /* margin-top: 0.5rem; */
      /* color: #48515B; */
      /* text-align: left;
      font-size: 0.75rem;
      line-height: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-family: var(--font-stack-segoe-semibold); */
      font-size: 1.3rem;
      font-family: var(--font-title);
      color: var(--title-color);
      border-top: none;
      /* border-bottom: 1px solid #D1D6DB; */
    }

    .Script__info--section {
      padding: 0.5rem 0.5rem;
      font-size: 0.9rem;
      color: #48515B;
    }

    .Script__medication {
      padding-bottom: 0.5rem;
    }

    .Script__pbs {
      padding-bottom: 0.5rem;
    }


    .Script__other {
      padding-bottom: 0.5rem;
    }
  }

  .Modal {

    .provider-display {

      .provider-label {
        font-size: 0.85rem;
        color: #5A6572;
        margin-bottom: 0.4rem;
        margin-left: 0.1rem;
        /* font-style: italic; */
      }
    }

    .form-field {
      width: 100%;
      margin-bottom: 0.4rem;

      label {
        font-size: 1rem;
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
        min-width: 85px;
        height: 2rem;

        &:active {
          transform: scale(0.98);
        }
      }

      .delete-btn {
        
        background-color: var(--btn-primary);
        color: rgb(255, 255, 255);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;      

      }
      
      .delete-btn:hover {
        background-color: var(--btn-primary-hover);
      }
            
      .cancel-btn {
        text-decoration: none;
        margin-right: 1rem;
        min-width: 85px;
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

export { StyledViewScript }