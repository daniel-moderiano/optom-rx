import styled from "styled-components";

const StyledAddressAutocomplete = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
  width: 24rem;
  position: relative;

  /* Show and hide classes control the sub-fields display (i.e. fields other than autocomplete) */
  .show {
    display: flex;
  }

  .hide {
    display: none;
  }

  .address-collapse {
    flex-direction: column;
  }

  .postcode-field {
    
      max-width: 6rem;
    
    
  }

  .street-address {
    margin-bottom: 1.5rem;
  }

  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  button {
    position: absolute;
    right: 0.3rem;
    top: 5.6rem;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    font-family: var(--font-stack-segoe);
    line-height: 0.8rem;
    color: #48515B;
    border-radius: 2px;

    &:hover {
      cursor: pointer;
      color: #1B1E22;
    }    

    &:focus {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }

    &:focus:not(:focus-visible) {
      outline: none
    }

    &:focus-visible {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }
  }

   /* Landscape phones and down */
   @media (max-width: 590px) { 
    width: 100%;
    max-width: 26rem;

    #autocomplete-provider-alert, #autocomplete-patient-alert {
      width: 50%;
    }

    #postcode-alert {
      /* The limiting factor on width responsiveness */
      width: 12rem;
    }
  }

  @media (max-width: 420px) {
    margin-bottom: 0.75rem;
  }
`

export { StyledAddressAutocomplete }