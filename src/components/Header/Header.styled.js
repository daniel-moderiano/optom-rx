import styled from "styled-components";

const StyledHeader = styled.header`
  color: #FFFFFF;
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    a {
      text-decoration: none;
      color: #FFFFFF;
    }
  }

  @media print {
    display: none;
  }

  /* Can also include nav styling here */
`

export { StyledHeader }