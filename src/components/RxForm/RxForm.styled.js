import styled from "styled-components";

const StyledRxForm = styled.form`

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 880px;
  width: 90%;
  margin: 2rem 0;
  background-color: #fff;
  padding: 0 5.5rem;

  .provider-controls {
    margin-top: 0.65rem;

    label {
      font-size: 0.9rem;
    }

    .select-wrapper {
      position: relative;

      &::after {
        /* content: "▼";
        font-size: 0.8rem;
        position: absolute;
        right: 0.8rem;
        top: 0.6rem;
        color: grey;
        pointer-events: none; */
        content: " ";
        position: absolute;
        right: 1rem;
        top: 50%;

        margin-top: -3px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 8px 5px 0 5px;
        border-color: #aaa transparent transparent;
        pointer-events: none;
      }
    }

    .provider-select {
      width: 24rem;
      -webkit-appearance: none;
      appearance: none;
      padding: 0.5rem 40px 0.6rem 0.8rem;
      box-shadow: 0 1px 3px -2px #9098A9;
      border: 1px solid #dfe1e1;
      border-radius: 5px;
      background: #fff;
      cursor: pointer;
      font-family: var(--font-stack-segoe);
      font-size: 1rem;
      /* width: 100%; */
      margin: 0.5rem 0 0.7rem 0;

      &:focus {
        outline: 0.1rem solid #a360ac;
        outline-offset: 1px;
      }

      option:checked {
        background-color: red;
      }
    }

    .or {
      font-size: 0.9rem;
    }

    .provider-addBtn {
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
      margin-top: 0.85rem;
      
      &:hover {
        background-color: var(--btn-primary-hover);
        border: 1px solid var(--btn-primary-hover);
      }

      &:active {
        transform: scale(0.98);
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