import styled from "styled-components";

const StyledRxForm = styled.form`

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 880px;
  width: 90%;
  background-color: #fff;
  padding: 2rem 5.5rem;
  margin: 3rem 0;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);

  .RxForm__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    padding: 0;
    margin: 1rem 0 0.75rem 0;
    place-self: flex-start;
  }

  .RxForm__description {
    place-self: flex-start;
    margin: 0;
  }

  .provider-form  {
    border-top: 1px solid #dfe1e1;
    margin-top: 2.5rem;
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

  .add-new-provider {
    display: flex;
    align-items: center;
    margin-top: 2rem;

    span {
      /* display: block; */
      font-size: 0.9rem;
      padding-bottom: 0.1rem;
      /* text-align: center; */
    }
  }

  .provider-addBtn {
      /* width: 12rem; */
      display: inline-block;
      font-size: 0.9rem;
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
      margin-left: 1rem;
      
      &:hover {
        background-color: var(--btn-primary-hover);
        border: 1px solid var(--btn-primary-hover);
      }

      &:active {
        transform: scale(0.98);
      }
      /* position: absolute;
      left: 0.3rem;
      top: 5rem;
      background-color: #fff;
      border: none;
      margin: 0;
      padding: 0;
      font-size: 0.8rem;
      text-decoration: underline;
      font-family: var(--font-stack-segoe);
      line-height: 0.8rem;

      &:hover {
        cursor: pointer;
      } */
  
    }

    .cancel-btn {
      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      box-sizing: border-box;
      cursor: pointer;
      padding: 8px 16px 10px 16px;
      border-radius: 2px;
      text-decoration: none;
      min-width: 80px;
      background-color: var(--btn-secondary);
      color: var(--btn-secondary-text);
      /* border: 1px solid rgb(138, 136, 134);                 */
      margin-right: 0;
      border: none;

      &:active {
        transform: scale(0.98);
      }

      &:hover {
        background-color: var(--btn-secondary-hover);
        color: #21252A;
      }
    }

  .provider-addBtn--solo {
    margin: 0;
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
  }

  .pbsRx {
    margin: 1.25rem 0 1rem 0;
  }

  .authRequired {
    margin: 0 0 1.25rem 0;
  }

  .btn-generate {
    outline: 0;
    cursor: pointer;
    margin-bottom: 2rem;
    border-radius: 2px;
    width: 18rem;
    padding: 0.8rem 0 0.9rem 0;
    background-color: rgb(0, 120, 212);
    color: rgb(255, 255, 255);
    font-size: 1.3rem;
    font-weight: 400;
    box-sizing: border-box;
    border: 1px solid rgb(0, 120, 212);
    font-family: var(--font-stack-segoe);
  }
  
  .btn-generate:hover {
    background-color: rgb(16, 110, 190);
    border: 1px solid rgb(16, 110, 190);
  }

  .indications {
    margin-bottom: 1.5rem;
    width: 26rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;

  }

  /* Style the button that is used to open and close the collapsible content */
  .collapsible {
    /* background-color: #eee; */
    cursor: pointer;
    font-size: 0.9rem;
    background-color: #F9FAFB;
    padding: 0.6rem 0.75rem 0.75rem 1rem;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-family: var(--font-stack-segoe);
    border-top: none;
    color: #48515B;
  }

  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  .active, .collapsible:hover {
    background-color: #ccc;
    border-radius: 6px 6px 0 0;
  }

  /* Style the collapsible content. Note: hidden by default */
  .indications__content {
    
    overflow: hidden;
    padding: 1rem 1rem 1rem 1rem;
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
    /* place-self: flex-end; */
    padding: 2rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* border-bottom: 1px solid #dfe1e1; */

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
      margin-left: 1.5rem;
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
  }             
                
`

export { StyledRxForm }