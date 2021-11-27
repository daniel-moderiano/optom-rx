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

  .prefix-field {
    margin: 0 0 1.5rem 0;
  }

  .prescriberNo-field, .phoneNo-field {
    width: 10rem;
  }

  .quantity-field, .repeats-field {
    width: 5rem;
  }

`

export { StyledRxForm }