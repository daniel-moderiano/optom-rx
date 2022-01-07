import styled from "styled-components";

const StyledFormField = styled.div`
  margin: 0.85rem 0;
  position: relative;
  width: 26rem;

  input {
    margin-top: 0.5rem;
    padding: 0.55rem 0.85rem 0.6rem 0.85rem;   
    border: 1px solid rgb(144, 147, 150);
    border-radius: 4px;
    font-size: 1rem;
    font-family: var(--font-stack-segoe);
    background-color: #fff;

    &.error {
      border: 0.1rem solid var(--error);
    }

    &.success {
      border: 0.1rem solid var(--success);
    }
  }

  input::placeholder {
    color: #808080;
    font-family: var(--font-stack-segoe);
  }

  input:focus {
    outline: 2px solid #a360ac;
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

  input[type=number] {
    -moz-appearance: textfield;
  }

  input[type=date] {
    width: 100%;
  }

  
  /* Unique styling for checkbox fields */
  &.checkbox {
    width: 24rem;
    
    label {
      display: grid;
      grid-template-areas: "checkbox label";
      grid-template-columns: 1.7rem auto;
      align-items: center;
      
      .label-text {
        grid-area: label;
        padding-bottom: 0.1rem;
      }

      input {
        grid-area: checkbox;
        margin: 0;
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
        top: 0.1rem;
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

  .alert-container {
    display: flex;
    align-items: center;
    margin-top: 0.3rem;
    width: 24rem;

    .alert--error {
      color: var(--error);
      font-size: 0.8rem;
    }

    .alert--success {
      color: var(--success-text);
      font-size: 0.8rem;
      margin-bottom: 0.05rem;
    }

    .alert--neutral {
      color: var(--neutral);
      font-size: 0.8rem;
      margin-bottom: 0.1rem;
    }

    .alert-icon {
      margin-right: 0.2rem;
      flex-shrink: 0;
    }
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  .tickCircle {
    position: absolute;
    width: 15px;
    top: 21px;
    right: -0.35rem;
  }

  
`

export { StyledFormField }