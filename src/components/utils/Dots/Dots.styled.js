import styled from "styled-components";

const StyledDots = styled.div`
  position: relative;
  width: 55px;
  height: 6px;

  /* Default (no color provided) styling */
  span {
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    background-color:  var(--primary-color);
    -webkit-animation: dots4 1s infinite ease-in-out both;
            animation: dots4 1s infinite ease-in-out both;
    margin-right: 5px;
  }

  .white {
    background-color:  #fff;
  }

  .blue {
    background-color: var(--neutral);
  }

  span:nth-child(1) {
    left: 0px;
    -webkit-animation-delay: 0.0s;
            animation-delay: 0.0s;
  }

  span:nth-child(2) {
    left: 15px;
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
  }

  span:nth-child(3) {
    left: 30px;
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
  }

  span:nth-child(4) {
    left: 45px;
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
  }

  @keyframes Dots {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0);
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity: 0;
    }
    40% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
  }
  @-webkit-keyframes Dots {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0);
      opacity: 0;
    }
    40% {
      -webkit-transform: scale(1);
              transform: scale(1);
      opacity: 1;
    }
  }

`

export { StyledDots }


 
  