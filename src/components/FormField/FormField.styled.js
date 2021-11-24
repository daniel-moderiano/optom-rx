import styled from "styled-components";

const StyledFormField = styled.div`
  margin: 1rem 0;
  position: relative;
  input {
    margin-top: 0.5rem;
    padding: 0.75rem 0.85rem 0.7rem 0.85rem;   
    border: 1px solid rgb(144, 147, 150);
    border-radius: 4px;
    font-size: 1rem;

    &.error {
      border: 2px solid var(--error);
    }

    &.success {
      border: 2px solid var(--success);
    }
  }

  input::placeholder {
    color: #808080;
  }

  input:focus {
    outline: 2px solid #183052;
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

  /* Unique styling for checkbox fields */
  &.checkbox {
    width: 24rem;
    
    label {
      display: grid;
      grid-template-areas: "checkbox label";
      grid-template-columns: 1.5rem auto;
      align-items: center;
      
      .label-text {
        grid-area: label;
      }

      input {
        grid-area: checkbox;
        margin: 0;
        padding: 0;
        height: 19px;
        width: 19px;
        appearance: none;
        -webkit-appearance: none;
	      -moz-appearance: none;
        border: 1px solid #eee;
        border-radius: 0;
        background-color: #eee;
      }

      .checked {
        background-color: #2196F3;
        border: none;
      }

      .checked:hover {
        cursor: pointer;
      }

      .unchecked:hover {
        cursor: pointer;
        background-color: #ccc;
      }

      .checkmark {
        position: absolute;
        width: 5px;
        height: 10px;
        top: 4px;
        left: 7px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      .show {
        display: block;
      }

      .hide {
        display: none;
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

    .alert {
      padding-top: 2px;
    }

    .alert--error {
      color: var(--error);
      font-size: 0.8rem;
    }

    .alert-icon {
      margin-right: 0.2rem;
    }

    
  }

  

`

export { StyledFormField }