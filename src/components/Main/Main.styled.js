import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  width: 100%;
  

  @media print {

    display: block;
    background-color: #fff;
    width: 100%;
    height: auto;
  }
 
`

export { StyledMain }