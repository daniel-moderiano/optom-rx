import styled from "styled-components";

const StyledAddProvider = styled.div`
  margin-top: 1rem;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 3rem;
  width: 90%;
  max-width: 880px;

  .AddProvider__title {
    font-family: var(--font-title);
    font-weight: normal;
    color: var(--title-color);
    font-size: 2rem;
    padding: 0;
    margin: 0 0 0.75rem 0;
  }

  .AddProvider__description {
    margin: 0;
  }

  .ProviderForm {
    margin-top: 2rem;
  }

  .ProviderForm__btns {

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
      min-width: 80px;
      background-color: rgb(0, 120, 212);
      color: rgb(255, 255, 255);
      border: 1px solid rgb(0, 120, 212);         
    }
    
    .submit-btn:hover {
      background-color: rgb(16, 110, 190);
      border: 1px solid rgb(16, 110, 190);
    }
          
    .cancel-btn {
      text-decoration: none;
      margin-right: 2rem;
      min-width: 80px;
      background-color: rgb(255, 255, 255);
      color: rgb(50, 49, 48);
      border: 1px solid rgb(138, 136, 134);                
    }
    .cancel-btn:hover {
      background-color: rgb(243, 242, 241);
      color: rgb(32, 31, 30);
    }
  }

`

export { StyledAddProvider }