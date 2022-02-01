import styled from "styled-components";

const StyledHeader = styled.header`
/* Using user prop to either show the logged in or logged out styling */
  color: #FFFFFF;
  background-color: ${props => props.user ? 'var(--primary-color)' : 'var(--background)'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.user ? '0 1.5rem' : '1rem 3rem 1.5rem 3rem'};
  width: 100%;
  height: ${props => props.user ? '3.8rem' : '5.8rem'};
  flex-shrink: 0;

  &.home-header {
    background-color: #F3F4F7;
    /* background-image: linear-gradient(to top, #85c27f30 0%, #85c27f30 100%); */
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
`

export { StyledHeader }