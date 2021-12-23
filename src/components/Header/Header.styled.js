import styled from "styled-components";

const StyledHeader = styled.header`
  color: #FFFFFF;
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* height: 4rem; */

  h1 {
    margin: 0.5 rem 1rem 0 1rem;
    padding: 0 0 0rem 0;

    img {
      height: 30px;
    }
  }

  

  @media print {
    display: none;
  }

  /* Can also include nav styling here */
`

export { StyledHeader }