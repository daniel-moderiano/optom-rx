import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 2rem 0;
  background-color: #fff;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #dfe1e1;
  margin: 0;

  .legend-label {
    display: block;
    padding: 0;
    font-family: var(--font-stack-segoe);
    color: var(--title-color);
    width: 19rem;
    flex-shrink: 0;
    font-weight: 200;
    padding-left: 2rem;
    margin-right: 1rem;
    font-size: 1.65rem;
    line-height: 1.5rem;
  }

  .fieldset-container {
    position: relative;
    width: auto;
    display: flex;
    flex-direction: column;
    margin-top: -0.2rem;
  }

  .visually-hidden { 
    position: absolute !important;
    height: 1px; 
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
}

  
  
  /* Landscape phones and down */
  @media (max-width: 920px) { 
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .legend-label {
      margin: 0 0 1.5rem 0;
      padding: 0;
      width: 100%;
    }

    .fieldset-container {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .legend-label {
      font-size: 1.55rem;
    }
  }

  @media (max-width: 475px) {
    .legend-label {
      font-size: 1.4rem;
    }
  }
`

export default StyledFieldset