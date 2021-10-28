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
    padding: 0.2rem;   
  }

  label {
    display: flex;
    flex-direction: column;
  }
`

export { StyledFormField }