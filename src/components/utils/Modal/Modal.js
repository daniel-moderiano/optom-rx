import { useEffect } from "react";
import { StyledModal } from "./Modal.styled";


const Modal = ({ title, children, closeModal, type, errorMessage }) => {
  // Add user-expected actions when pressing the escape key or clicking outside the modal
  useEffect(() => {
    const outsideClick = (event) => {
      if (event.target === document.querySelector('.Modal')) {
        closeModal();
      }
    }

    const escClose = (event) => {
      // If Esc key is pressed
      if (event.keyCode === 27) {
        closeModal();
      }
    }

    window.addEventListener('click', outsideClick);
    window.addEventListener('keydown', escClose);

    return () => {
      window.removeEventListener('click', outsideClick)
      window.removeEventListener('keydown', escClose)
    }
  }, [closeModal])

  return (
    <StyledModal className="Modal">
      <div className="Modal__content">
        <header className="Modal__header">
          <h4 className="Modal__title">{title}</h4>
          <button type="button" className="Modal__close" aria-label="close current window" onClick={closeModal}>
            <svg className="Modal__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1B1E22"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </header>
        <div className="Modal__main">
          {type === "delete" && (
            <div className="error-container">
              <div className="error-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--neutral" viewBox="0 0 512 512" width="24px">
                  <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="#D12323" stroke="#D12323" strokeMiterlimit="10" strokeWidth="32"/>
                  <path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="#D12323" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                  <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="#ffffff"/>
                </svg>
              </div>
              <div className="error-text">
                {errorMessage}
              </div>
            </div>
          )}
          {children}
        </div>
      </div>
  </StyledModal>
  )
}

export default Modal
