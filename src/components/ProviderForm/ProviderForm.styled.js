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

    .ProviderForm__btn {
      font-size: 1rem;
      font-family: var(--font-stack-segoe);
      box-sizing: border-box;
      cursor: pointer;
      padding: 8px 16px 10px 16px;
      border-radius: 2px;

      &:active {
        transform: scale(0.98);
      }

      &:focus {
        outline: 2px solid #104362;
        outline-offset: 2px;
      }
    }

    .submit-btn {
      min-width: 130px;
      background-color: var(--primary-color);
      color: rgb(255, 255, 255);
      border: none;
      margin-right: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.6rem;
       

    }
    
    .submit-btn:hover {
      background-color: var(--btn-primary-hover);
    }
          
    .cancel-btn {
      text-decoration: none;
      /* margin-right: 2rem; */
      min-width: 80px;
      background-color: var(--btn-secondary);
      color: var(--btn-secondary-text);
      border: none;
    }
    .cancel-btn:hover {
      background-color: var(--btn-secondary-hover);
      color: #21252A;
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

      .ProviderForm__btn {
        width: 90%;
        margin: 0;
        
      }

      .submit-btn {
        margin-bottom: 1.5rem;
        min-width: 0;
      }
    }
  }
`

export { StyledProviderForm }