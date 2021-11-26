import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 2.6rem 1rem 2.5rem 4rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  legend {
    float: left;    // Moves the legend within the fieldset
    padding: 0;
    font-size: 1.9rem;
    margin-bottom: 0.7rem;
    font-family: var(--font-title);
    color: #004165;
  }

`

export default StyledFieldset