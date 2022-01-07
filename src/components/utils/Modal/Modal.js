import { StyledModal } from "./Modal.styled"

const Modal = ({ title, children }) => {
  return (
    <StyledModal className="Modal">
      <div className="Modal__content">
        <header className="Modal__header">
          <h4 className="Modal__title">{title}</h4>
          <button className="Modal__close" aria-label="close current window">
            <svg class="Modal__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1B1E22"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </header>
        <div className="Modal__main">
          {children}
        </div>
      </div>
  </StyledModal>
  )
}

export default Modal