import styled from "styled-components";

const StyledFormField = styled.div`
  margin-bottom: 0.5rem;

  input {
    margin-top: 0.2rem;
    margin-bottom: 0.8rem;
    padding: 0.375rem 0.75rem;   
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    font-size: 1rem;
    line-height: 1.5;

    &.error {
      border: 2px solid var(--error);
    }
  }

  input::placeholder {
    color: #adadad;
  }

  input:focus {
    outline: 2px solid #183052;
    outline-offset: 2px;
  }

  label {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
  }

  .alert {
    display: none;
  }
`

export { StyledFormField }