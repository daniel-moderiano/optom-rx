import Button from "../utils/Button/Button";
import Dots from '../utils/Dots/Dots';
import { useState } from "react";
import FormField from "../FormField/FormField";
import PasswordContainer from "../utils/PasswordContainer/PasswordContainer";
import { useErrorHandling } from '../../hooks/useErrorHandling';
import { updatePassword } from "firebase/auth";
import { useImmediateToast } from '../../hooks/useImmediateToast';
import { useLogout } from "../../hooks/useLogout";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const ChangePassword = ({ setToast, refreshCredentials }) => {
  const { user } = useAuthContext();
  const { handleSettingsError } = useErrorHandling();
  const { showSuccessToast } = useImmediateToast(); 
  const { logout } = useLogout();

  const [currentPassword, setCurrentPassword] = useState('');
  const [currentPasswordAlert, setCurrentPasswordAlert] = useState({});

  const [newPasswordAlert, setNewPasswordAlert] = useState({});
  const [newPassword, setNewPassword] = useState('');

  const [confirmPasswordAlert, setConfirmPasswordAlert] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');

  const [changePasswordPending, setChangePasswordPending] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  
  // Ensure form is validated before calling form submission function
  const isPasswordFormValid = () => {
    let valid = true;
    let inputFocused = false;

    const currentPasswordInput = document.querySelector('input[name="currentPassword"]');
    const newPasswordInput = document.querySelector('input[name="newPassword"]');
    const confirmPasswordInput = document.querySelector('input[name="confirmPassword"]');

    // Check for blank field
    if (currentPasswordInput.value.trim().length === 0) {
      if (!inputFocused) {
        currentPasswordInput.focus();
        inputFocused = true;
      }
      setCurrentPasswordAlert({
          message: "Please enter a password.",
          type: 'error',
        }
      );
      currentPasswordInput.classList.add('error');
      valid = false;
    } 

     // Check for blank field
     if (newPasswordInput.value.trim().length === 0) {
      if (!inputFocused) {
        newPasswordInput.focus();
        inputFocused = true;
      }
      setNewPasswordAlert({
          message: "Please enter a password.",
          type: 'error',
        }
      );
      newPasswordInput.classList.add('error');
      valid = false;
    } 

     // Check for blank field
     if (confirmPasswordInput.value.trim().length === 0) {
      if (!inputFocused) {
        confirmPasswordInput.focus();
        inputFocused = true;
      }
      setConfirmPasswordAlert({
          message: "Please enter a password.",
          type: 'error',
        }
      );
      confirmPasswordInput.classList.add('error');
      valid = false;
    } 

    return valid;
  };

  // Combine credential refresh with actual update password operation
  const performPasswordUpdate = async () => {
    setChangePasswordPending(true);
    let reauthenticated = false;

    // Refresh the user's credentials regardless of recent sign in or not
    try {
      await refreshCredentials(currentPassword);
      reauthenticated = true;
    } catch (error) {
      handleSettingsError(error.code, setCurrentPasswordAlert);
      setChangePasswordPending(false);
    }
    // Proceed with operations once user reauthenticates
    if (reauthenticated) {
      try {
        await updatePassword(user, newPassword);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setShowCurrentPassword(false);
        setShowNewPassword(false);
        setShowConfirmPassword(false);
        setChangePasswordPending(false);
        showSuccessToast(setToast, 'Password changed successfully');
        
      } catch (error) {
        setChangePasswordPending(false);
        handleSettingsError(error.code, setNewPasswordAlert)
      }
    }
  };

  // Used for two password alerts to ensure the user entered identical passwords
  const comparePasswords = () => {
    if (newPassword === confirmPassword) {
      return true;
    } else {
      setConfirmPasswordAlert({
        message: "Passwords do not match",
        type: 'error',
      });
      return false;
    }
  };

  // Used to remove errors on resubmission of the form to avoid over-punishment or confusion
  const refreshAllValidation = () => {
    setCurrentPasswordAlert({});
    setNewPasswordAlert({});
    setConfirmPasswordAlert({});
    document.querySelector('.password-form').querySelectorAll('input').forEach((input) => {
      input.classList.remove('error');
    })
  }

  return (
    <form className='password-form' noValidate onSubmit={(event) => {
      event.preventDefault();
      refreshAllValidation();
      if (isPasswordFormValid() && comparePasswords()) {
        performPasswordUpdate();
      }
    }}>
      <div className="form-title">Change password</div>

      <PasswordContainer showPassword={showCurrentPassword} handleClick={() => setShowCurrentPassword((prevState) => (!prevState))}>
          <FormField 
            fieldType={`${showCurrentPassword ? 'text' : 'password'}`}
            name="currentPassword"
            label="Current password" 
            value={currentPassword} 
            onChange={(event) => setCurrentPassword(event.target.value)} 
            alert={currentPasswordAlert}
            required
          />  
      </PasswordContainer>   

      <PasswordContainer showPassword={showNewPassword} handleClick={() => setShowNewPassword((prevState) => (!prevState))}>
        <FormField 
          fieldType={`${showNewPassword ? 'text' : 'password'}`}
          name="newPassword"
          label="New password" 
          value={newPassword} 
          onChange={(event) => setNewPassword(event.target.value)} 
          alert={newPasswordAlert}
          required
        />  
      </PasswordContainer>   

      <PasswordContainer showPassword={showConfirmPassword} handleClick={() => setShowConfirmPassword((prevState) => (!prevState))}>
        <FormField 
          fieldType={`${showConfirmPassword ? 'text' : 'password'}`}
          name="confirmPassword"
          label="Confirm password" 
          value={confirmPassword} 
          onChange={(event) => setConfirmPassword(event.target.value)} 
          alert={confirmPasswordAlert}
          required
        />  
      </PasswordContainer>   
      
      <div className="changePassword-btns">
        <Button type="submit">
          {changePasswordPending ? (
            <Dots color="white"/>
          ) : (
            'Update password'
          )}
        </Button>
        <Link to="/reset-password" className="reset-password" onClick={logout}>Forgot password?</Link>
      </div>
    </form>
  );
};

export default ChangePassword;
