import styled from "styled-components";

const StyledDots = styled.div`
  
  position: relative;
  width: 55px;
  height: 6px;

  .Circle {
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    background-color:  var(--primary-color);
    margin-right: 5px;

    animation-name: throb;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;

    -webkit-animation-name: throb;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: both;
    

    &:nth-child(1) {
      left: 0;
    }

    &:nth-child(2) {
      left: 15px;
      animation-delay: 0.1s;
      -webkit-animation-delay: 0.1s;
    }

    &:nth-child(3) {
      left: 30px;
      animation-delay: 0.2s;
      -webkit-animation-delay: 0.2s;
    }

    &:nth-child(4) {
      left: 45px;
      animation-delay: 0.3s;
      -webkit-animation-delay: 0.3s;
    }
  }

  .white {
    background-color:  #fff;
  }

  .blue {
    background-color: var(--neutral);
  }

  @keyframes throb {
    0% {
      transform: scale(0);
      -webkit-transform: scale(0);
      opacity: 0;
    }

    40% {
      transform: scale(1);
      -webkit-transform: scale(1);
      opacity: 1;
    }

    80% {
      transform: scale(0);
      -webkit-transform: scale(0);
      opacity: 0;
    }

    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
      opacity: 0;
    }
  }
  


`

export { StyledDots }