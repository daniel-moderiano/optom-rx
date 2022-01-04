import { StyledToast } from "./Toast.styled";


const Toast = ({ params }) => {
  // params.type should be a conditional for switching out success icons for error or info icons
  // params.visible = true;
  return (
    <StyledToast className="toast" visible={params.visible}>
      <div className="toast-container">

        <div className="toast-type">
          <svg className="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 48.69">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <line fill="none" stroke="#00A65A" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4px" x1="2.5" y1="2.5" x2="2.5" y2="46.19"/>
              </g>
            </g>
          </svg>
          <div className="toast-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--success" viewBox="0 0 512 512" width="28px">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="#00A65A" stroke="#00A65A" strokeMiterlimit="10" strokeWidth="32"/>
              <path fill="#00A65A" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352 176L217.6 336 160 272"/>
            </svg>
          </div>
        </div>

        <div className="toast-text">
          <h5 className="toast-title">Success!</h5>
          <p className="toast-description">{params.message}</p>
        </div>

      </div>
      
    </StyledToast>
  )
}

export default Toast;
