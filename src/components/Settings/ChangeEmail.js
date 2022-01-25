import Button from "../utils/Button/Button";
import Modal from '../utils/Modal/Modal';
import Dots from '../utils/Dots/Dots';
import { useState, useEffect } from "react";
import FormField from "../FormField/FormField";
import PasswordContainer from "../utils/PasswordContainer/PasswordContainer";
import { useErrorHandling } from '../../hooks/useErrorHandling';
import { sendEmailVerification, updateEmail } from "firebase/auth";
import { useImmediateToast } from '../../hooks/useImmediateToast';


const ChangeEmail = ({ user, setToast, refreshCredentials }) => {
  const { showSuccessToast } = useImmediateToast(); 
  const { handleErrorCode } = useErrorHandling();
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
      handleErrorCode(error.code, setEmailConfirmPasswordAlert)
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

  return (<>
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
