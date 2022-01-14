import styled from "styled-components";

const StyledHeader = styled.header`
  color: #FFFFFF;
  background-color: ${props => props.user ? 'var(--primary-color)' : 'var(--background)'};
  display: flex;
  justify-content: space-between;
  padding: ${props => props.user ? '0 1.5rem' : '1rem 3rem 1.5rem 3rem'};
  margin: 0;
  width: 100%;

  h1 {
    margin: ${props => props.user ? '0.6rem 0 0.1rem 0' : '0.85rem 0 0 0'};
    width: 7rem;

    &:hover {
      cursor: pointer;
    }

    .cls-1 {
      fill: ${props => props.user ? '#fff' : 'var(--primary-color)'};
    }

    svg {
      pointer-events: none;
    }
  }

  @media print {
    display: none;
  }

  /* Landscape phones and down */
  @media (max-width: 480px) { 
    
  }

  /* Landscape phone to portrait tablet */
  /* @media (max-width: 768px) { ... } */

  /* Portrait tablet to landscape and desktop */
  /* @media (min-width: 768px) and (max-width: 980px) { ... } */

  /* Large desktop */
  /* @media (min-width: 1200px) { ... } */
`

export { StyledHeader }