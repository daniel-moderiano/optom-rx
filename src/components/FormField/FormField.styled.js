import styled from "styled-components";

const StyledFormField = styled.div`
  margin: 0.85rem 0;
  position: relative;
  width: 26rem;
  height: 80px;


  input {
    margin-top: 0.5rem;
    padding: 0.55rem 0.85rem 0.6rem 0.85rem;   
    border: 1px solid rgb(144, 147, 150);
    border-radius: 4px;
    font-size: 1rem;
    font-family: var(--font-stack-segoe);
    background-color: #fff;
    transition: border-color 150ms ease-in-out;

    &.error {
      border: 1px solid var(--error);
    }

    &.success {
      border: 1px solid var(--success);
    }
  }

  input::placeholder {
    color: #767676;
    font-family: var(--font-stack-segoe);
  }

  input:focus {
    /* outline: 2px solid #a360ac; */
    outline: 2px solid #104362;
    outline-offset: 2px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  label {
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
  }

  .label-text {
    display: block;
    position: relative;

    .asterisk {
      color: var(--error);
    }
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input[type=date] {
    width: 100%;
  }

  
  /* Unique styling for checkbox fields */
  &.checkbox {
    width: 24rem;
    height: auto;
    
    
    label {
      display: grid;
      grid-template-areas: "checkbox label";
      grid-template-columns: 1.7rem auto;
      align-items: flex-start;
      
      .label-text {
        grid-area: label;
        padding-bottom: 0.1rem;
      }

      input {
        grid-area: checkbox;
        margin: 0.1rem 0 0 0;
        padding: 0;
        height: 16px;
        width: 16px;
        appearance: none;
        -webkit-appearance: none;
	      -moz-appearance: none;
        border: 2px solid #5A6572;
        border-radius: 2px;
      }

      .checked {
        background-color: #363C45;
        border: none;
      }

      .checked:hover {
        cursor: pointer;
      }

      .unchecked:hover {
        cursor: pointer;
      }

      .checkmark {
        position: absolute;
        width: 5px;
        height: 10px;
        top: 0.2rem;
        left: 0.35rem;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }

    label:hover {
      cursor: pointer;
    }
  }

  .all-alerts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .alert-container {
    display: flex;
    align-items: flex-start;
    margin-top: 0.2rem;
    width: 26rem;
    /* height: 0; */
    font-size: 0.8rem;

    .alert--error {
      color: var(--error);
      
    }

    .alert--success {
      color: var(--success-text);
      /* font-size: 0.8rem; */
      margin-bottom: 0.05rem;
    }

    .alert--neutral {
      color: var(--neutral);
      /* font-size: 0.8rem; */
      /* margin-bottom: 0.1rem; */
    }

    .alert--helper {
      /* font-size: 0.8rem; */
      color: #5A6572;
      width: 100%;
    }

    .alert-icon {
      margin-right: 0.25rem;
      flex-shrink: 0;
      margin-top: 0.1rem;
    }

    .alert-icon--neutral {
      margin-left: -0.04rem;
      margin-right: 0.2rem;
      margin-top: 0.05rem;
    }
  }

  .subalert-container {
  
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  .tickCircle {
    position: absolute;
    width: 22px;
    top: 39px;
    right: 10px;
    background-color: #fff;
    padding-left: 0.3rem;
    animation-name: fadeIn;
    animation-timing-function: ease;
    animation-duration: 100ms;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }


   
  /* Landscape phones and down */
  @media (max-width: 768px) { 
    width: 100%;
    max-width: 26rem;


    input {
      width: 100%;
    }

    .alert-container, &.checkbox {
      width: 100%;
      max-width: 24rem;
    }

    .tickCircle {
      position: absolute;
      width: 17px;
      top: 19px;
      right: -7px;
      background-color: transparent;
      padding: 0;
    }
  }

`

export { StyledFormField }