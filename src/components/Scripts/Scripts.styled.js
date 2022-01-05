import styled from "styled-components";

const StyledScripts = styled.div`
  margin: 3rem 0;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 5.5rem 4rem 5.5rem;
  max-width: 1140px;
  width: 100%;

  .Scripts__container {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Scripts__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    padding: 0;
    margin: 1rem 0 0.75rem 0;
    place-self: flex-start;
  }

  .Scripts__description {
    margin: 0;
  }

  .Spinner {
    margin-top: 1.5rem;
  }
`

export { StyledScripts }