import styled from "styled-components";

const StyledProviderForm = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .fields {
    position: relative;
  }

  .checkbox {
    margin: 0.75rem 0;
  }

  .ProviderForm__btns {
    place-self: flex-start;
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
`

export { StyledProviderForm }