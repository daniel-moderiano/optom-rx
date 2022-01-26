import { useEffect } from "react";
import { StyledModal } from "./Modal.styled";
import Button from "../Button/Button";
import FocusTrap from 'focus-trap-react';

const Modal = ({ title, children, closeModal, type, errorMessage }) => {
  // Add user-expected actions when pressing the escape key or clicking outside the modal (close the modal)
  useEffect(() => {
    const outsideClick = (event) => {
      if (event.target === document.querySelector('.Modal')) {
        closeModal();
      }
    }

    const escClose = (event) => {
      if (event.key === 'Escape') {
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
      <FocusTrap>
        <div className="Modal__content" aria-modal="true" role="dialog" aria-labelledby="Modal__title">
          <header className="Modal__header">
            <h4 id="Modal__title" className="Modal__title">{title}</h4>
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

            {type === 'emailVerify' && (<>
              <div className="verify-container">
                <p className="verify-message">An email verification link has been sent to your email address. Follow the link to verify your email and activate all features.</p>
                <div className="img-container">   
                  <svg className="email-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 64 64" aria-describedby='email-svg-title'>
                    <title id='email-svg-title'>Email icon</title>
                    <g id="Layer_1">
                      <g>
                        <circle className="st0" cx="32" cy="32" r="32"/>
                      </g>
                      <g>
                        <g className="st1">
                          <path className="st2" d="M52,44c0,2.2-1.8,4-4,4H16c-2.2,0-4-1.8-4-4V24c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4V44z"/>
                        </g>
                        <g>
                          <path className="st3" d="M52,42c0,2.2-1.8,4-4,4H16c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4V42z"/>
                        </g>
                        <g className="st1">
                          <g>
                            <path className="st2" d="M35.5,30.2c-1.9-2.1-5.1-2.1-7,0L13,43.2c-0.2,0.2-0.3,0.4-0.5,0.6c0.7,1.3,2,2.2,3.4,2.2h32
                              c1.5,0,2.7-0.9,3.4-2.2c-0.1-0.2-0.3-0.4-0.5-0.6L35.5,30.2z"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path className="st3" d="M35.5,32c-1.9-1.9-5.1-1.9-7,0L13,43.5c-0.2,0.2-0.3,0.3-0.5,0.5c0.7,1.2,2,1.9,3.4,1.9h32
                              c1.5,0,2.7-0.8,3.4-1.9c-0.1-0.2-0.3-0.3-0.5-0.5L35.5,32z"/>
                          </g>
                        </g>
                        <g className="st1">
                          <g>
                            <path className="st2" d="M12.6,20.2c0.7-1.3,2-2.2,3.4-2.2h32c1.5,0,2.7,0.9,3.4,2.2c-0.1,0.2-0.3,0.4-0.5,0.6l-15.4,13
                              c-1.9,2.1-5.1,2.1-7,0L12.6,20.2z"/>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path className="st4" d="M28.5,32c1.9,1.9,5.1,1.9,7,0L51,20.5c0.2-0.2,0.3-0.3,0.5-0.5c-0.7-1.2-2-1.9-3.4-1.9H16
                              c-1.5,0-2.7,0.8-3.4,1.9c0.1,0.2,0.3,0.3,0.5,0.5L28.5,32z"/>
                          </g>
                        </g>
                      </g>
                    </g>
                    <g id="Layer_2">
                    </g>
                  </svg>
                </div>
              </div>
              <div className="verify-modal-btns">
                <Button design="ghost" handleClick={closeModal}>Continue to app</Button>
              </div>
            </>)}

            {children}
          </div>
        </div>
      </FocusTrap>
      
  </StyledModal>
  )
}

export default Modal
