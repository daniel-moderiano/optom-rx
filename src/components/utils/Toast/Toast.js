import { StyledToast } from "./Toast.styled";


const Toast = ({ params }) => {
  // params.type should be a conditional for switching out success icons for error or info icons
  // params.visible = true;
  // params.type = 'success';
  // params.message = "An error occurred while loading favourites"
  return (
    <StyledToast className="toast" visible={params.visible} role="status">
      <div className="toast-container">

        {(params.type === 'success') && ( <div className="toast-type">
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
        </div>)}

        {(params.type === 'error') && ( <div className="toast-type">
          <svg className="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 48.69">
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <line fill="none" stroke="#D12323" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4px" x1="2.5" y1="2.5" x2="2.5" y2="46.19"/>
              </g>
            </g>
          </svg>
          <div className="toast-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--neutral" viewBox="0 0 512 512" width="28px">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="#D12323" stroke="#D12323" strokeMiterlimit="10" strokeWidth="32"/>
              <path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="#D12323" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="#ffffff"/>
            </svg>
          </div>
        </div>)}
        
        <div className="toast-text">
          <p className="toast-description">{params.message}</p>
        </div>

      </div>
    </StyledToast>
  )
}

export default Toast;
