import Button from "../utils/Button/Button";
import Modal from '../utils/Modal/Modal';
import Dots from '../utils/Dots/Dots';
import { useState, useEffect } from "react";
import FormField from "../FormField/FormField";
import PasswordContainer from "../utils/PasswordContainer/PasswordContainer";
import { useErrorHandling } from '../../hooks/useErrorHandling';
import { sendEmailVerification, updateEmail } from "firebase/auth";
import { useImmediateToast } from '../../hooks/useImmediateToast';


const ChangeEmail = ({ user, setToast, refreshCredentials, verified }) => {
  const { showSuccessToast, showErrorToast } = useImmediateToast(); 
  const { handleSettingsError } = useErrorHandling();
  const [emailConfirmPassword, setEmailConfirmPassword] = useState('');  
  const [emailConfirmPasswordAlert, setEmailConfirmPasswordAlert] = useState({});
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [changeEmailPending, setChangeEmailPending] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newEmailAlert, setNewEmailAlert] = useState({});
  const [showEmailConfirmPassword, setShowEmailConfirmPassword] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  // Clear any lingering data and alerts when modal is open/closed
  useEffect(() => {
    setNewEmailAlert({});
    setEmailConfirmPasswordAlert({});
    setEmailConfirmPassword('');
    setNewEmail('');
    setShowEmailConfirmPassword(false);
  }, [showEmailModal]);

  // Ensure form is validated before calling form submission function
  const isEmailFormValid = () => {
    let valid = true;
    let inputFocused = false;

    const emailConfirmPasswordInput = document.querySelector('input[name="emailConfirmPassword"]');
    const newEmailInput = document.querySelector('input[name="newEmail"]');
    
     // Check for blank field
     if (newEmailInput.value.trim().length === 0) {
      if (!inputFocused) {
        newEmailInput.focus();
        inputFocused = true;
      }
      setNewEmailAlert({
          message: "Please enter an email.",
          type: 'error',
        }
      );
      newEmailInput.classList.add('error');
      valid = false;
    } 

    // Check for no change in email
    if (emailConfirmPasswordInput.value === user.email) {
      if (!inputFocused) {
        emailConfirmPasswordInput.focus();
        inputFocused = true;
      }
      setEmailConfirmPasswordAlert({
          message: "New email address must be different from the current email address",
          type: 'error',
        }
      );
      emailConfirmPasswordInput.classList.add('error');
      valid = false;
    } 

    return valid;
  };

  const performEmailUpdate = async () => {
    setChangeEmailPending(true);
    let reauthenticated = false;

    try {
      await refreshCredentials(emailConfirmPassword);
      reauthenticated = true;
    } catch (error) {
      handleSettingsError(error.code, setEmailConfirmPasswordAlert)
      setChangeEmailPending(false);
    }

    if (reauthenticated) {
      try {
        await updateEmail(user, newEmail);
        setShowEmailModal(false);
        setChangeEmailPending(false);
        showSuccessToast(setToast, 'Email updated successfully');
        
        sendEmailVerification(user);
        // Timeout is purely to not overwhelm the user with modals flying one after the other
        setTimeout(() => {
          setShowVerifyModal(true);
        }, 1000);
        
      } catch (error) {
        setChangeEmailPending(false);
        switch (error.code) {
          case 'auth/invalid-email':
            setNewEmailAlert({
              message: "Please enter a valid email address.",
              type: 'error',
            });
            break;
          case 'auth/email-already-in-use':
            setNewEmailAlert({
              message: "This email is already in use. Try another.",
              type: 'error',
            });
            break;
          case 'auth/too-many-requests':
            setEmailConfirmPasswordAlert({
              message: 'Failed to authorise too many times. Please wait a few minutes before trying again.',
              type: 'error',
            });
            break;
          case 'auth/network-request-failed':
            setEmailConfirmPasswordAlert({
              message: "We couldn't connect to the network. Please check your internet connection and try again.",
              type: 'error',
            });
            break;
          default:
            setEmailConfirmPasswordAlert({
              message: 'An unknown server error occured. Please try again.',
              type: 'error',
            });
            break;
        }
      }
    }
  };

  // Used for manual user-initiated resending of verification email
  const resendEmailVerification = async () => {
    try {
      await sendEmailVerification(user);
      showSuccessToast(setToast, 'A verification email has been sent to your email address');
    } catch (error) {
      showErrorToast(setToast, 'An error occurred while trying to send the email')
    }
  }

  return (<>
    {verified ? (
      <div className="change-email">
        <div className="form-title">Change email</div>
        <div className="current-email">{user.email}</div>
        <div className="email-group">
          <div className="verified">
            <svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--success" viewBox="0 0 512 512" width="17px">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#096600" strokeMiterlimit="10" strokeWidth="32"/>
              <path fill="none" stroke="#096600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352 176L217.6 336 160 272"/>
            </svg>
            <span>Verified</span>
          </div>
        </div>

        <Button handleClick={() => setShowEmailModal(true)} >Update email</Button>
      </div>
    ) : (
      <div className="no-email">
        <div className="change-email">
          <div className="form-title">Change email</div>
          <p className="no-email-desc">Please verify your email address to access all account settings, receive notifications, and reset your password</p>
          <div className="current-email">{user.email}</div>

          <div className="email-group">
            <div className="unverified">
              <svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--neutral" viewBox="0 0 512 512" width="17px">
                <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#9a6700" strokeMiterlimit="10" strokeWidth="32"/>
                <path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="none" stroke="#9a6700" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="#9a6700"/>
              </svg>
              <span>Unverified</span>
            </div>
            <button className="resend" onClick={resendEmailVerification}>Resend verification email</button>
          </div>

          <Button handleClick={() => setShowEmailModal(true)}>Change email</Button>
        </div>         
      </div>
    )}
    
    {showEmailModal && <Modal title="Change email" closeModal={() => setShowEmailModal(false)}>
        <div className="update-display">
          <div className="update-label">Current email address:</div>
          <div className="update-summary">{user.email}</div>
        </div>
        <form className='Login__form' noValidate onSubmit={(event) => {
          event.preventDefault();
          setNewEmailAlert({});
          setEmailConfirmPasswordAlert({})
          // Ensure form validation passes
          if (isEmailFormValid()) {
            // Refresh credentials
            performEmailUpdate();  
          } 
        }}>
          <FormField 
            fieldType="text" 
            name="newEmail"
            label="New email address" 
            value={newEmail} 
            onChange={(event) => setNewEmail(event.target.value)} 
            alert={newEmailAlert}
            required
          />  

          <PasswordContainer showPassword={showEmailConfirmPassword} handleClick={() => setShowEmailConfirmPassword((prevState) => (!prevState))}>
            <FormField 
              id="current-password"
              fieldType={`${showEmailConfirmPassword ? 'text' : 'password'}`}
              name="emailConfirmPassword"
              label="Password" 
              value={emailConfirmPassword} 
              onChange={(event) => setEmailConfirmPassword(event.target.value)} 
              className="auth-field form-field"
              alert={emailConfirmPasswordAlert}
              required
            />
          </PasswordContainer>          

        <div className="Modal__buttons">
          <Button design="secondary" classLabel="cancel" handleClick={() => setShowEmailModal(false)}>Cancel</Button>
          <Button type="submit">
            {changeEmailPending ? (
              <Dots color="white"/>
            ) : (
              'Change'
            )}
          </Button>
        </div>
        </form>
      </Modal>}

    {showVerifyModal && (<Modal title="Verify your email" closeModal={() => setShowVerifyModal(false)} type="emailVerify"/>)}
  </>);
};

export default ChangeEmail;
