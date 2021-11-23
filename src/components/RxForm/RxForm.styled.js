import styled from "styled-components";

const StyledRxForm = styled.form`

  display: flex;
  justify-content: center;
  flex-direction: column;

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  .form-field {
    width: 24rem;
  }

  .quantity-field, .repeats-field, .irn-field {
    width: 5rem;
  }

`

export { StyledRxForm }