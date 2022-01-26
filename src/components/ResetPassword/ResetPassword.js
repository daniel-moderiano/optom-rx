import FormField from "../FormField/FormField";
import { useState, useEffect } from "react";
import Dots from '../utils/Dots/Dots';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth'
import { StyledResetPassword } from './ResetPassword.styled';
import { useNavigate } from "react-router-dom";
import Button from '../utils/Button/Button';
import { useImmediateToast } from '../../hooks/useImmediateToast';
import { useErrorHandling } from "../../hooks/useErrorHandling";

const ResetPassword = ({ setToast, setPage }) => {
  let navigate = useNavigate();
  const { showSuccessToast } = useImmediateToast();
  const { handleSettingsError } = useErrorHandling();

  const [email, setEmail] = useState('');
  const [emailAlert, setEmailAlert] = useState({});
  const [isPending, setIsPending] = useState(false);

  // Adjust current page for styling and accessibility
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

  // Attempt to send password link to email provided, and handle any errors that occur
  const resetPassword = async () => {
    setIsPending(true);
    const auth = getAuth();
    
    try {
      await sendPasswordResetEmail(auth, email);
      setIsPending(false);
      showSuccessToast(setToast, 'Reset link has been sent');
      navigate('/login');
    } catch (error) {
      setIsPending(false);
      handleSettingsError(error.code, setEmailAlert);
    }
  }

  return (
    <StyledResetPassword className="Login">
      <div className="Login__container">
        <h2 className="Login__title">Reset your password</h2>

        <form className='Login__form' noValidate onSubmit={(event) => {
          event.preventDefault();
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