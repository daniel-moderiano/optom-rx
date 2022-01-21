import styled from "styled-components";

const StyledPageHeader = styled.div`

  .title {
    font-family: var(--font-stack-segoe);
    font-weight: 600;
    color: var(--title-color);
    font-size: 2.2rem;
    line-height: 2rem;
    margin: ${props => props.description ? '0 0 0.5rem 0' : '0 0 1.5rem 0'};
    padding: 0;
  }

  .description {
    color: #57606a;
    margin: 0 0 1.5rem 0;
    padding: 0;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2.0rem;
      line-height: 1.5rem;
    }

    .description {
      font-size: 1.15rem;
      line-height: 1.25rem;
    }
  }

  @media (max-width: 475px) {
    .title {
      font-size: 1.7rem;
      line-height: 1.5rem;
    }

    .description {
      font-size: 1.1rem;
      line-height: 1.25rem;
    }
  }

`

export { StyledPageHeader }