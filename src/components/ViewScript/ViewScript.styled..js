import styled from "styled-components";

const StyledViewScript = styled.div`
  position: relative;

  .ProviderForm__btns {
    margin: 2rem 0 0rem 0;
    display: flex;
    align-items: center;
    width: 100%;

    span {
      padding: 8px 16px 10px 4px;
    }

    .icon {
      margin-right: 0.2rem;
      margin-left: 13px;
      width: 24px;
    }

    .star-icon {
      margin-top: -0.1rem;
      margin-left: 13px;
    }
    
    .re-prescribe {
      padding: 0;
      margin-right: 1.5rem;
    }
    
    .fav-btn {
      padding: 0;
    }
  }

  .Script__info {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    
    .Script__title {
      background-color: #F9FAFB;
      padding: 0.75rem 0.75rem;
      font-size: 1.2rem;
      font-family: var(--font-stack-segoe);
      font-weight: 400;
      color: #48515B;
      border-top: none;
    }

    .Script__info--section {
      padding: 0.5rem 0.75rem;
      font-size: 0.9rem;
      color: #48515B;
    }

    .Script__medication, .Script__pbs {
      padding-bottom: 0.5rem;
    }
  }

  .Modal {
    .form-field {
      width: 100%;
      margin-bottom: 0.4rem;

      label {
        font-size: 1rem;
      }
    }

    .Modal__buttons {
      padding-top: 2rem;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-end;

      .button {
        font-size: 0.9rem;
        min-width: 80px;
        width: 100px;
        height: 35px;
      }
   
      .cancel {
        margin-right: 1rem;
      }
    }
  }

  @media (max-width: 470px) { 
    .ProviderForm__btns {
      flex-direction: column;

      .button {
        width: 90%;
        min-width: 80px;
      }

      .re-prescribe {
        width: 90%;
        margin: 0 0 1.5rem 0;
      }
    }
  }
`

export { StyledViewScript }