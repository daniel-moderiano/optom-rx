import styled from "styled-components";

const StyledHeader = styled.header`
  color: #FFFFFF;
  background-color: ${props => props.user ? 'var(--primary-color)' : 'var(--background)'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem 0 3rem;
  margin: 0;

  

  h1 {
    margin: ${props => props.user ? '0.65rem 0 0 0' : '0.85rem 0 0 0'};
    width: 7rem;

    &:hover {
      cursor: pointer;
    }

    .cls-1 {
      fill: ${props => props.user ? '#fff' : 'var(--primary-color)'};
    }
  }

  @media print {
    display: none;
  }

  /* Can also include nav styling here */
`

export { StyledHeader }