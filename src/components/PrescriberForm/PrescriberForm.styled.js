import styled from "styled-components";

const StyledPrescriberForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  .fields {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .checkbox {
    margin: 0.75rem 0 1.25rem 0;
  }

  .PrescriberForm__btns {
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    display: flex;

    .submit {
      margin-right: 1.5rem;
    }
  }

  
  @media (max-width: 590px) { 
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media(max-width: 450px) {
    .PrescriberForm__btns {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .button {
        width: 90%;
        margin: 0;
      }

      .submit {
        margin-bottom: 1.5rem;
      }
    }
  }
`

export { StyledPrescriberForm }