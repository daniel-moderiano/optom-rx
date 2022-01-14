import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 2rem 0;
  background-color: #fff;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #dfe1e1;
  margin: 0;

  legend {
    float: left;    // Moves the legend within the fieldset
    padding: 0;
    font-size: 1.7rem;
    font-family: var(--font-title);
    color: var(--title-color);
    width: 19rem;
    flex-shrink: 0;
    padding-left: 2rem;
    margin-right: 1rem;
  }

  .fieldset-container {
    position: relative;
    width: auto;
    display: flex;
    flex-direction: column;
    margin-top: -0.16rem;
  }

  
  
  /* Landscape phones and down */
  @media (max-width: 920px) { 
    flex-direction: column;
    align-items: center;
    justify-content: center;

    legend {
      margin: 0 0 1.5rem 0;
      padding: 0;
      width: 100%;
    }

    .fieldset-container {
      width: 100%;
    }

  }

`

export default StyledFieldset