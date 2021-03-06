import styled from "styled-components";

const StyledHeader = styled.header`
/* Using user prop to either show the logged in or logged out styling */
  color: #FFFFFF;
  background-color: ${props => props.user ? 'var(--primary-color)' : '#fff'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.user ? '0 1.5rem' : '1rem 2rem 1.5rem 2rem'};
  width: 100%;
  height: ${props => props.user ? '3.8rem' : '5.8rem'};
  flex-shrink: 0;

  &.auth-header {
    background-color: var(--background);
  }

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

  /* Avoid messing up the pirnted RxTemplate */
  @media print {
    display: none;
  }

  @media (min-width: 1600px) {
    padding: ${props => props.user ? '0 1.5rem' : '1rem 5rem 1.5rem 5rem'};
  }

  @media (max-width: 768px) {
    padding: ${props => props.user ? '0 1.5rem' : '1rem 1.5rem 1.5rem 1.5rem'};
  }
`

export { StyledHeader }