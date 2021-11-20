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
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;


  .Modal__content {
    /* background-color: #fff; */
    /* width: 20rem;
    padding: 0.5rem 1.5rem 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 3px; */
    /* color: white; */
  }

  .Modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccbcb;
    font-weight: bold;
    font-size: 1.1rem;
    padding-bottom: 0.2rem;
    width: 100%;
  }

  .Modal__close {
    color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    border: none;
    background-color: rgba(255, 255, 255, 0);
  }

  .Modal__close:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .Modal__btn {
  
  }

  .Modal__btn:hover,
  .Modal__btn:focus {
    
  }

  .Modal-icon {
    opacity: 0.3;
    width: 22px;
    height: 22px;
    padding: 0.2rem 0 0.2rem 0;
  }

  .Modal-icon:hover {
    opacity: 1;
  }

  .hidden {
    display: none !important;
  }

  @media print {
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    /* width: 902px;
    height: 1275px; */
    /* height: 0;
    width: 0; */
    overflow: visible;

    .Modal__content {
      margin: 0;
      padding: 0;
      /* display: none; */
    }

    .Modal__header, .Modal__close, .Modal__btn, .Modal__icon {
      display: none;
    }

    @page {
      size: auto;
      margin: 0mm;
    }
  }
`

export default StyledModal;