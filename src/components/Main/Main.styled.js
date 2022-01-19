import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
  background-color: #F6F8FA;
  background-color: #F6F7F9;
  background-color: #F3F4F7;
  width: 100%;
  padding: 0 0.5rem;
  
  @media (max-width: 800px) {
    /* background-color: #fff; */
  }

  @media print {

    display: block;
    background-color: #fff;
    width: 100%;
    height: auto;
  }
 
`

export { StyledMain }