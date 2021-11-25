import styled from "styled-components";

const StyledAddressAutocomplete = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
  width: 24rem;

  /* Show and hide classes control the sub-fields display (i.e. fields other than autocomplete) */
  .show {
    display: flex;
  }

  .hide {
    display: none;
  }

  .autocomplete-group {
    position: relative;
    /* This will affect 'Enter manually' button placement */
    height: 5.8rem;
  }

  .address-collapse {
    flex-direction: column;
  }

  .postcode-field {
    width: 6rem;
  }

  button {
    position: absolute;
    right: 0.3rem;
    bottom: 0rem;
    background-color: #fff;
    border: none;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    text-decoration: underline;
    font-family: var(--font-stack);

    &:hover {
      cursor: pointer;
    }
  }
`

export { StyledAddressAutocomplete }