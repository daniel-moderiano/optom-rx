import styled from "styled-components";

const StyledModal = styled.div`
  display: flex;
	position: fixed;
	z-index: 1000;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	overflow: auto;
	background-color: rgba(25, 33, 43, 0.4);
	justify-content: center;
	align-items: center;
  animation-name: fadeIn;
  animation-duration: 150ms;
  animation-timing-function: linear;

  .Modal__content {
    background-color: #fff;
    width: 520px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 6px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 2px 3px 0px, rgba(60, 64, 67, 0.15) 0px 6px 10px 4px;
    animation-name: grow;
    animation-duration: 150ms;
    animation-timing-function: ease-out;
  }

  .Modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 0.25rem;

    .Modal__title {
      font-family: var(--font-stack-segoe);
      font-size: 1.35rem;
      font-weight: 600;
      margin: 0;
      padding: 0;
    }
  }

  .Modal__main {
    width: 100%;
  }

  /* For delete modals only */
  .error-container {
    margin-top: 1.25rem;
    background-color: #FBE9E7;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    border-radius: 2px;

    .error-icon {
      line-height: 0;
      margin-right: 0.5rem;
    }

    .error-text {
      color: #C02121;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }

  /* For email verify modals only */
  .verify-container {
    margin-top: 1rem;

    .img-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 0 1.5rem 0;

      .email-svg {
        width: 75px;
        pointer-events: none;
        enable-background:new 0 0 64 64;

        .st0{fill: #77B3D4;}

        .st1{opacity:0.2;}

        .st2{fill:#231F20;}

        .st3{fill:#E0E0D1;}

        .st4{fill:#FFFFFF;}
    
      }
    }
  }

  .verify-modal-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .Modal__close {
    padding: 0;
    margin: 0;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border: none;
    background-color: rgba(255, 255, 255, 0);

    .Modal__icon {
      margin-bottom: -0.2rem;
    }

    &:hover {
      opacity: 1;
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }

  @keyframes grow {
    0% {
      transform: scale(0.75);
      opacity: 0.1;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }

  /* Portrait phones */
  @media (max-width: 450px) {
    .Modal__content {
      padding: 1.5rem;
      width: 90%;
      text-align: left;
      max-width: 500px;
    }
  }
`

export { StyledModal }