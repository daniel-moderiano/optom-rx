import styled from "styled-components";

const StyledModal = styled.div`
  display: flex;
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	overflow: auto;
	background-color: rgba(25, 33, 43, 0.4);
  /* opacity: 0.4; */
	justify-content: center;
	align-items: center;

  .Modal__content {
    background-color: #fff;
    width: 20rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 6px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 2px 3px 0px, rgba(60, 64, 67, 0.15) 0px 6px 10px 4px;
  }

  .Modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .Modal__title {
      font-size: 1rem;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }
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
`

export { StyledModal }