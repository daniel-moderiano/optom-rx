import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  /* align-items: center; */
  /* justify-content: space-between; */

  /* Ensure the entire app styling does not interfere with RxTemplate printing */
  @media print {
    background-color: white;

    * {
      margin: 0;
      padding: 0;
    }
    
    @page {
      size: auto;
      margin: 0mm;
    }
  }
`

export { StyledApp }