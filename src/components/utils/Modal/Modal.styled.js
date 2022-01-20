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

  @media (max-width: 450px) {
    .Modal__content {
      padding: 1.5rem;
    }
  }
`

export { StyledModal }