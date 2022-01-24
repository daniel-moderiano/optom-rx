import { StyledAlert } from "./Alert.styled";

const Alert = ({ id, type, message, subAlert }) => {
  return (
    <StyledAlert className={`${subAlert ? 'alert-container subalert-container' : 'alert-container'}`} id={id} role="alert">
      {(type === 'error') && 
        (<svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--error" viewBox="0 0 512 512" width="15px">
          <path d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z" fill="none" stroke="#B60000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
          <path d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z" fill="none" stroke="#B60000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
          <path fill="#B60000" d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"/>
        </svg>)
      }
      {(type === 'success') && 
        (<svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--success" viewBox="0 0 512 512" width="16px">
          <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#096600" strokeMiterlimit="10" strokeWidth="32"/>
          <path fill="none" stroke="#096600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352 176L217.6 336 160 272"/>
        </svg>)
      }
      {(type === 'neutral') && 
        (<svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--neutral" viewBox="0 0 512 512" width="16px">
          <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#014083" strokeMiterlimit="10" strokeWidth="32"/>
          <path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="none" stroke="#014083" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
          <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="#014083"/>
        </svg>)
      }
      <span className={`alert alert--${type}`}>{message}</span>
    </StyledAlert>
  );
};

Alert.defaultProps = {
  subAlert: false,
}


export default Alert;
