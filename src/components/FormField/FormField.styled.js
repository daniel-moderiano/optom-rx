import styled from "styled-components";

const StyledFormField = styled.div`
  margin-bottom: 0.5rem;
/* 
  &.show {
    display: block;
  }

  &.hide {
    display: none;
  } */

  input {
    margin-top: 0.2rem;
    margin-bottom: 0.8rem;
    padding: 0.375rem 0.75rem;   
    border: 1px solid #bdbdbd;
    border-radius: 4px;
    font-size: 1rem;
    line-height: 1.5;
  }

  input::placeholder {
    /* color: #adadad; */
  }

  label {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
  }
`

export { StyledFormField }