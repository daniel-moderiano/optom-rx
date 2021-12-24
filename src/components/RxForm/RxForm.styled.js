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
  }

  /* Style the button that is used to open and close the collapsible content */
  .collapsible {
    /* background-color: #eee; */
    cursor: pointer;
    font-size: 1rem;
    padding: 0.4rem 0 0.5rem 1rem;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-family: var(--font-stack-segoe);
    font-weight: bold;
  }

  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  .active, .collapsible:hover {
    background-color: #ccc;
  }

  /* Style the collapsible content. Note: hidden by default */
  .indications__content {
    padding: 0 1rem;
    overflow: hidden;
    background-color: #f0f0f0;
    
    font-size: 0.9rem;

    .indication__main {
      margin: 1rem 0;
    }
    
    ul {
      list-style-type: square;
      padding-left: 2rem;
      /* margin: 0; */

      li {
        margin: 1rem 0;
      }
    }

    .indication__clinical, .indication__and {
      font-weight: bold;
    }

    &.expand {
      display: block;
    }

    &.collapse {
      display: none;
    }
  }
                   
                
`

export { StyledRxForm }