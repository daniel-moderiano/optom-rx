import styled from "styled-components";

const StyledHamburger = styled.button`
  display: none;
  border-radius: 2px;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;

  .bar {
    display: block;
    width: 25px;
    height: 2px;
    margin: 6px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: ${props => props.loggedIn ? '#FFFFFF' : 'var(--primary-color)'}
  }

  &:focus {
    outline: 2px solid #FFFFFF;
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none
  }

  &:focus-visible {
    outline: 2px solid #FFFFFF;
    outline-offset: 2px;
  }


  @media (max-width: 768px) {
    display: block;
    cursor: pointer;

    &.expanded .bar:nth-child(2) {
      opacity: 0;
    }

    &.expanded .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    &.expanded .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`

export { StyledHamburger }