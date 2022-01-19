import styled from "styled-components";

const StyledAddProvider = styled.div`
  .form-container {
    border: none;
    padding: 2rem 0;
    background-color: #fff;
    display: flex;
    width: 100%;
    border-bottom: 1px solid #dfe1e1;
    border-top: 1px solid #dfe1e1;
    margin: 0;

    .form-title {
      display: block;
      padding: 0;
      font-size: 1.7rem;
      font-family: var(--font-title);
      color: var(--title-color);
      width: 19rem;
      flex-shrink: 0;
      padding-left: 2rem;
      margin-right: 1rem;
    }
  }


  @media (max-width: 920px) { 
    .form-container {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .form-title {
        margin: 0 0 1.5rem 0;
        padding: 0;
        width: 100%;
      }
    }
  }
`

export { StyledAddProvider }