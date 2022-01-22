import styled from "styled-components";

const StyledAddProvider = styled.div`
  .form-container {
    padding: 2rem 0;
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #dfe1e1;
    border-top: 1px solid #dfe1e1;

    .form-title {
      font-size: 1.65rem;
      font-weight: 200;
      font-family: var(--font-stack-segoe);
      color: var(--title-color);
      width: 19rem;
      flex-shrink: 0;
      padding-left: 2rem;
      margin-right: 1rem;
    }

    .PrescriberForm {
      margin-top: -0.2rem;
    }
  }


  @media (max-width: 920px) { 
    .form-container {
      flex-direction: column;
      justify-content: center;

      .form-title {
        margin: 0 0 1.5rem 0;
        padding: 0;
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    .form-container {
      .form-title {
        font-size: 1.55rem;
      }
    }
  }

  @media (max-width: 475px) {
    .form-container {
      .form-title {
        font-size: 1.4rem;
      }
    }
  }
`

export { StyledAddProvider }