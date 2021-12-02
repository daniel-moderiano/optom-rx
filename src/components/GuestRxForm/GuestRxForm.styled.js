import styled from "styled-components";

const StyledGuestRxForm = styled.form`

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 880px;
  width: 90%;
  margin-top: 2rem;

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
    margin: 0 0 1.25rem 0;
  }

  .prescriberNo-field, .phoneNo-field {
    width: 10rem;
  }

  .quantity-field, .repeats-field {
    width: 5rem;
  }

  .pbsRx {
    margin: 1.25rem 0;
  }

  .btn-generate {
    outline: 0;
    cursor: pointer;
    margin-bottom: 2rem;
    border-radius: 2px;
    width: 18rem;
    padding: 0.8rem 0 0.9rem 0;
    background-color: rgb(0, 120, 212);
    color: rgb(255, 255, 255);
    font-size: 1.3rem;
    font-weight: 400;
    box-sizing: border-box;
    border: 1px solid rgb(0, 120, 212);
    font-family: var(--font-stack-segoe);
  }
  
  .btn-generate:hover {
    background-color: rgb(16, 110, 190);
    border: 1px solid rgb(16, 110, 190);
  }
                   
                
`

export { StyledGuestRxForm }