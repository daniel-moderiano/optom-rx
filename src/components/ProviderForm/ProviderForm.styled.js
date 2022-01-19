import styled from "styled-components";

const StyledProviderForm = styled.form`
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
    margin: 0.75rem 0;
  }

  .ProviderForm__btns {
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    display: flex;

    .submit {
      min-width: 130px;
      margin-right: 1.5rem;
    }
              
    .cancel-btn {
      min-width: 80px;
    }
  }

  
  
  /* Landscape phones and down */
  @media (max-width: 590px) { 


    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  @media(max-width: 450px) {
    .ProviderForm__btns {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .button {
        width: 90%;
        margin: 0;
        
      }

      .submit {
        margin-bottom: 1.5rem;
        min-width: none;
      }
    }
  }
`

export { StyledProviderForm }