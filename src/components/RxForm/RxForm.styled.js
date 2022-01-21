import styled from "styled-components";

const StyledRxForm = styled.form`
  .scriptNo {
    width: 100%;
    text-align: right;
    padding: 0 0.5rem 0.5rem 0;
    font-size: 0.9rem;
    color: #48515B;
  }

  .provider-form  {
    border-top: 1px solid #dfe1e1;
    /* margin-top: 2.5rem; */
    padding-bottom: 2.95rem;
  }
  
  .ProviderForm{
    margin-top: -0.55rem;

    .container {
      width: 24rem;
    }
  }

  .provider-controls {
    margin-top: 0.65rem;
    position: relative;

    label {
      font-size: 0.9rem;
    }
  }

  .provider-addBtn {
      /* width: 12rem; */
      display: inline-block;
      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      box-sizing: border-box;
      cursor: pointer;
      padding: 6px 16px 8px 16px;
      border-radius: 2px;
      min-width: 80px;
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      border: 1px solid var(--primary-color); 
      text-decoration: none;
      
      &:hover {
        background-color: var(--btn-primary-hover);
        border: 1px solid var(--btn-primary-hover);
      }
      &:active {
        transform: scale(0.98);
      }
     
  
    }

  .misc-form {

    .authRequired {
      margin: 0.9rem 0 0.5rem 0;
    }

    .authRxNo {
      margin: 0.75rem 0 0.75rem 0;
      padding: 0;
      font-size: 0.9rem;
    }

    .solo-alert-container {
      display: flex;
      align-items: center;
      margin: -0.2rem 0 0.75rem 0rem;
      width: 24rem;

      .alert--neutral {
        color: var(--neutral);
        font-size: 0.8rem;
        /* margin-bottom: 0.1rem; */
      }

      .alert-icon {
        margin-right: 0.2rem;
        flex-shrink: 0;
      }
    }

    .retention {
      display: flex;
      flex-direction: column;
      .age-field {
        margin: 0.85rem 0;

        input {
          width: 5rem;
        }
       
      }

      .prevAuth {
        position: relative;
        margin: 1rem 0;
      }

      .justification-field {
        margin: 0.85rem 0;
        position: relative;
        width: 26rem;

        label {
          font-size: 0.9rem;
          display: flex;
          flex-direction: column;
        }

        textarea {
          width: 100%;
          margin-top: 0.5rem;
          padding: 0.5rem 0.75rem 0.5rem 0.75rem;   
          border: 1px solid rgb(144, 147, 150);
          border-radius: 4px;
          font-size: 0.9rem;
          font-family: var(--font-stack-segoe);

          &:focus {
            outline: 2px solid #104362;
            outline-offset: 2px;
          }
        }
      }
    }
    
    
    
  }


  .medicareFields {
    display: flex;
    position: relative;

    .medicareNumber-field {
      width: 9rem;
      margin-right: 1rem;
    }

    .irn-field {
      width: 4rem;
    }
  }

  .prefix-field {
    margin: 0 0 1.25rem 0;
  }

  .prescriberNo-field, .phoneNo-field {
    width: 10rem;
  }

  .quantity-field, .repeats-field {
    width: 5rem;
    .alert-container {
        width: 20rem;
      }
  }

  .pbsRx {
    margin: 1.25rem 0 1.5rem 0;
  }


  .indications {
    margin-bottom: 1.5rem;
    width: 26rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 0px 1px 0px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    transform-origin: top;
  }

  /* Style the button that is used to open and close the collapsible content */
  .collapsible {
    /* background-color: #eee; */
    /* cursor: pointer; */
    font-size: 0.9rem;
    background-color: #F4F5F6;
    padding: 0.6rem 0.75rem 0.75rem 1rem;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-family: var(--font-stack-segoe);
    border-top: none;
    color: #48515B;
    border-radius: 6px 6px 0 0;
    cursor: pointer;
    

    &:focus {
      outline: 2px solid #a360ac;
      /* For a soft box shadow */
      /* box-shadow: 0 0 3pt 2pt cornflowerblue; */
      outline-offset: 1px;
      
    }

    button {
      cursor: pointer;
      font-size: 0.9rem;
      background-color: #F4F5F6;
      color: #48515B;
      font-family: var(--font-stack-segoe);
      border: none;
      margin: 0;
      padding: 0;
      background-color: transparent;
      border-radius: 2px;

      &:focus {
        outline: 2px solid #104362;
        outline-offset: 1px;
      }

      &:focus:not(:focus-visible) {
        outline: none
      }

      &:focus-visible {
        outline: 2px solid #104362;
        outline-offset: 2px;
      }
    }
  }

  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  .active, .collapsible:hover {
    background-color: #E8EAED;
  }

  /* Style the collapsible content. Note: hidden by default */
  .indications__content {
    
    overflow: hidden;
    padding: 1rem 1rem 1.25rem 1rem;
    font-size: 0.9rem;
    color: #48515B;

    
    
    .indication__extra {

      padding: 0.5rem 0 0 0;

      ul {
        list-style-type: square;
        padding-left: 1.5rem;
        margin: 0;

        li {
          padding: 0.75rem 0 0 0.2rem;
        }
      }

      .indication__clinical, .indication__and {
        font-weight: bold;
        padding: 0.75rem 0.5rem 0.25rem 0rem;

      }
    }
    

    &.expand {
      display: block;
    }

    &.collapse {
      display: none;
    }
  }

  .ProviderForm__btns {
    padding: 2.75rem 0 0 20rem;
    width: 100%;
    display: flex;
    align-items: center;

    .cancel-btn {
      margin-left: 1.5rem;
    }
  }     

  
  
  /* Landscape phones and down */
  @media (max-width: 920px) { 
    .ProviderForm__btns {
      padding: 2.75rem 0 0 0rem;
    }

    .scriptNo {
      text-align: left;
    }
  }



  
  /* Landscape phones and down */
  @media (max-width: 590px) { 
    

    .misc-form {
      .solo-alert-container {
        max-width: 24rem;
        width: 100%;
      }
    }

    .medicareFields {
      .alert-container {
        width: 20rem;
      }
    }

    .quantity-field, .repeats-field {
      .alert-container {
        width: 20rem;
      }
    }   

    .indications {
      max-width: 26rem;
      width: 100%;
    }

    .misc-form .retention .justification-field {
      max-width: 26rem;
      width: 100%;
    }
  }
            
            
  @media(max-width: 450px) {
    .ProviderForm__btns {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .button {
        width: 90%;
        margin: 0;
        text-align: center;
      }

      .submit-btn {
        margin-bottom: 1.5rem;
        min-width: 0;
      }
    }


    .medicareFields {
      .medicareNumber-field {
        width: 8.5rem;
        margin-right: 1rem;
      }

      .irn-field {
        width: 2.5rem;
      }

      .alert-container {
        width: 11rem;
      }
    }
  }

  @media (max-width: 380px) {
    .quantity-field, .repeats-field {
      .alert-container {
        width: 11rem;
      }
    }   
  }

`

export { StyledRxForm }