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
    width: 6rem;
  }

  button {
    position: absolute;
    right: 0.3rem;
    top: 6rem;
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
    }
  }
`

export { StyledAddressAutocomplete }