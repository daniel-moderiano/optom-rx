import styled from "styled-components";

const StyledRxForm = styled.form`
  .scriptNo {
    width: 100%;
    text-align: right;
    padding: 0 0.5rem 0.5rem 0;
    font-size: 0.9rem;
    color: #48515B;
  }

  .add-new-btn {
    margin-top: 0.65rem;
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