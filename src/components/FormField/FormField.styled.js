import styled from "styled-components";

const StyledFormField = styled.div`
  margin-bottom: 1rem;

  input {
    margin-top: 0.5rem;
    padding: 0.375rem 0.75rem;   
    border: 1px solid rgb(144, 147, 150);
    border-radius: 4px;
    font-size: 1rem;
    line-height: 1.5;

    &.error {
      border: 2px solid var(--error);
    }
  }

  input::placeholder {
    color: #808080;
  }

  input:focus {
    outline: 2px solid #183052;
    outline-offset: 2px;
  }

  label {
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
  }

  .alert--error {
    color: var(--error);
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
  }
`

export { StyledFormField }