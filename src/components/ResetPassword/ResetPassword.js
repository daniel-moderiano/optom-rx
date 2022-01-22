import FormField from "../FormField/FormField";
import { useState, useEffect } from "react";
import Dots from '../utils/Dots/Dots';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth'
import { StyledResetPassword } from './ResetPassword.styled';
import { useNavigate } from "react-router-dom";
import Button from '../utils/Button/Button'

const ResetPassword = ({ setToast, setPage }) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailAlert, setEmailAlert] = useState({});
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setPage(null);
  }, [setPage])

  // Ensure form is validated before calling form submission function
  const isFormValid = () => {
    let valid = true;
    const emailInput = document.querySelector('input[name="email"]');
  
    // Check for blank field
    if (emailInput.value.trim().length === 0) {
      emailInput.focus();
      setEmailAlert({
          message: "Please enter an email address.",
          type: 'error',
        }
      );
      emailInput.classList.add('error');
      valid = false;
    } 
    return valid;
  };

  const errorHandling = (errorCode) => {
    switch (errorCode) {
      case 'auth/missing-email':
        setEmailAlert({
          message: "Please enter an email address.",
          type: 'error',
        });
        break;
      case 'auth/invalid-email':
        setEmailAlert({
          message: "Please enter a valid email address.",
          type: 'error',
        });
        break;
      case 'auth/user-not-found':
        setEmailAlert({
          message: "We couldn't find an account with that email address. Check for typos and try again.",
          type: 'error',
        });
        break;
      case 'auth/too-many-requests':
        setEmailAlert({
          message: 'Failed too many times. Please wait a few minutes before trying again.',
          type: 'error',
        });
        break;
      case 'auth/network-request-failed':
        setEmailAlert({
          message: "We couldn't connect to the network. Please check your internet connection and try again.",
          type: 'error',
        });
        break;
    
      default:
        setEmailAlert({
          message: 'An unknown server error occured. Please try again.',
          type: 'error',
        });
        break;
    }
  };

  // Send verification email, and handle any errors that occur
  const resetPassword = async () => {
    setIsPending(true);
    const auth = getAuth();
    
    try {
      await sendPasswordResetEmail(auth, email);
      setIsPending(false);
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'Email reset link sent'
      }));
      setEmail('');
      navigate('/login');

    } catch (error) {
      setIsPending(false);
      errorHandling(error.code)
    }
  }

  return (
    <StyledResetPassword className="Login">
      <div className="Login__container">
        <h2 className="Login__title">Reset your password</h2>

        <form className='Login__form' noValidate onSubmit={(event) => {
          event.preventDefault();
          // Ensure form validation passes
          if (isFormValid()) {
            resetPassword();
          }
        }}>

          <FormField 
            fieldType="email" 
            name="email"
            label="Enter the email address associated with your account and we'll send you a password reset link." 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
            className="auth-field form-field"
            alert={emailAlert}
            autoFocus
            required
            describedBy={Object.keys(emailAlert).length === 0 ? null : 'email-alert'}
            autocomplete="username"
          />

          <Button classLabel="Login__btn" type="submit">
            {isPending ? (
                <Dots color="white" />
                ) : (
              'Send password reset email'
            )} 
          </Button>

        </form>
      </div>
    </StyledResetPassword>
  )
}

export default ResetPassword;