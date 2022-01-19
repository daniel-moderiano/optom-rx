import styled from "styled-components";

const StyledViewScript = styled.div`
  
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    /* border-bottom: 1px solid #dfe1e1; */
  }

  .header {

    .fav-btn {

      background-color: transparent;
      border: none;
      font-size: 0.95rem;
      font-weight: bold;
      color: var(--primary-color);
      font-family: var(--font-stack-segoe);
      /* margin-left: 1rem; */
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



  .ProviderForm__btns {
    /* place-self: flex-end; */
    margin: 2rem 0 2.5rem 0;
    display: flex;
    align-items: center;
    width: 100%;
    /* justify-content: space-between; */


    .ProviderForm__btn, .fav-btn {
      height: 40px;
      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      box-sizing: border-box;
      cursor: pointer;
      padding: 8px 16px 10px 16px;
      border-radius: 2px;

      &:active {
        transform: scale(0.98);
      }

      &:focus {
        outline: 2px solid #104362;
        outline-offset: 2px;
      }
    }

    .submit-btn, .fav-btn {
      min-width: 80px;
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      border: none;
      
      text-decoration: none;
    }
    
    .submit-btn:hover {
      background-color: var(--btn-primary-hover);
    }

    .submit-btn {
      display: flex;
      align-items: center;
      padding: 0;
      margin-right: 1.5rem;

      .icon {
        padding: 0;
        line-height: 0;
        margin-right: 0.2rem;
      
        margin-left: 13px;
        width: 24px;
      }

      span {
        padding: 8px 16px 10px 4px;
      }


    }
    
    .fav-btn {
      
      display: flex;
      align-items: center;
      padding: 0;

      .icon {
        padding: 0;
        line-height: 0;
        margin-right: 0.2rem;
        margin-top: -0.1rem;
        margin-left: 13px;
      }

      span {
        padding: 8px 16px 10px 4px;
      }

    }
  }

  .Script__info {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 0px 1px 0px;
    border-radius: 6px;
    /* margin-top: 2.5rem; */
    display: flex;
    flex-direction: column;
    
    .Script__title {
      background-color: #F9FAFB;
      /* padding: 0.75rem 0.5rem; */
      padding: 0.75rem 0.75rem;
      font-size: 1.3rem;
      font-family: var(--font-title);
      /* color: var(--title-color);
       */
      color: #48515B;
      border-top: none;

      /* background-color: #F9FAFB;
      color: #48515B;
      padding: 0.95rem 0.75rem;
      font-size: 0.85rem;
      line-height: 0.85rem;
      text-align: left;
      text-transform: uppercase;
      letter-spacing: 0.03rem;
      font-weight: 400;
      border-top: none; */
    }

    .Script__info--section {
      padding: 0.5rem 0.75rem;
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


  /* Landscape phone to portrait tablet */
  @media (max-width: 550px) { 
    .Modal {
      .Modal__content {
        width: 90%;
        text-align: left;
        max-width: 500px;
      }
    }
  }

  @media (max-width: 450px) { 
    .ProviderForm__btns {
      flex-direction: column;

      .ProviderForm__btn, .fav-btn {
        padding: 8px 16px 10px 16px;
        width: 90%;
        align-items: center;
        justify-content: center;
      }

      .submit-btn, .fav-btn {
        min-width: 80px;
      }

      .submit-btn {
        display: flex;
        align-items: center;
        padding: 0;
        /* margin-right: 1.5rem; */
        margin: 0 0 1.5rem 0;

        .icon {
          padding: 0;
          line-height: 0;
          margin-right: 0.2rem;
        
          margin-left: 13px;
          width: 24px;
        }

        span {
          padding: 8px 16px 10px 4px;
        }


      }
      
      .fav-btn {
        
        display: flex;
        align-items: center;
        padding: 0;

        .icon {
          padding: 0;
          line-height: 0;
          margin-right: 0.2rem;
          margin-top: -0.1rem;
          margin-left: 13px;
        }

        span {
          padding: 8px 16px 10px 4px;
        }

      }
    }

  }


`

export { StyledViewScript }