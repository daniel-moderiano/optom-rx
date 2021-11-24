import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 1rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  legend {
    float: left;    // Moves the legend within the fieldset
    padding: 0;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

`

export default StyledFieldset