import styled from "styled-components";

const StyledRxForm = styled.form`

  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 880px;
  width: 90%;

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

  .form-field {
    width: 24rem;
  }

  .quantity-field, .repeats-field {
    width: 5rem;
  }

`

export { StyledRxForm }