import styled from "styled-components";

const StyledAddProvider = styled.div`
  margin-top: 3rem;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 5.5rem;
  width: 90%;
  max-width: 880px;

  .AddProvider__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    padding: 0;
    margin: 1rem 0 0.75rem 0;
  }

  .AddProvider__description {
    margin: 0;
  }

  .add-provider-form {
    border-top: 1px solid #dfe1e1;
    margin-top: 2.5rem;
  }

`

export { StyledAddProvider }