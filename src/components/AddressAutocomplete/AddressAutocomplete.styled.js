import styled from "styled-components";

const StyledAddressAutocomplete = styled.fieldset`
  /* Show and hide classes control the sub-fields display (i.e. fields other than autocomplete) */
  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  .autocomplete-group {
    position: relative;
    /* display: flex;
    flex-direction: column; */
    /* This will affect address not listed button placement */
    height: 5.4rem;

    .street-address {
      margin-bottom: 0.5rem;
    }
  }

  button {
    position: absolute;
    right: 0;
    bottom: 0rem;
    background-color: #fff;
    border: none;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  }
`

export { StyledAddressAutocomplete }