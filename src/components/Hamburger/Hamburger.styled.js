import styled from "styled-components";

const StyledHamburger = styled.div`

  display: none;

  .bar {
    display: block;
    width: 25px;
    height: 2px;
    margin: 6px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: ${props => props.loggedIn ? '#FFFFFF' : 'var(--primary-color)'}
  }


  @media (max-width: 768px) {
   
    display: block;
    cursor: pointer;

    &.active .bar:nth-child(2) {
      opacity: 0;
    }

    &.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    &.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

`

export { StyledHamburger }