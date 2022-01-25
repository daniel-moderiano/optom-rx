import { StyledSettings } from "./Settings.styled"
import FormField from '../FormField/FormField'
import { useState, useEffect } from "react"
import { reauthenticateWithCredential, EmailAuthProvider, updatePassword, sendEmailVerification } from "firebase/auth";
import { useLogout } from '../../hooks/useLogout';
import { Link } from "react-router-dom";
import Button from "../utils/Button/Button";
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PasswordContainer from '../utils/PasswordContainer/PasswordContainer';
import PageHeader from '../utils/PageHeader/PageHeader';
import Dots from '../utils/Dots/Dots';
import { useImmediateToast } from '../../hooks/useImmediateToast';
import ChangeDisplayName from "./ChangeDisplayName";
import { useErrorHandling } from '../../hooks/useErrorHandling';
import DeleteAccount from "./DeleteAccount";
import ChangeEmail from "./ChangeEmail";

const Settings = ({ user, setToast, setPage }) => {
  const { logout } = useLogout();
  const { showSuccessToast, showErrorToast } = useImmediateToast(); 

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

  
  const { handleErrorCode } = useErrorHandling();

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('settings');
  }, [setPage])



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



  // Used to reauthenticate a user. This avoids an error when performing sensitive account functions like delete or email update
  const refreshCredentials = async (password) => {
    // Must be called once the user has entered their password, else it will just error
    const credential = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user, credential);
  }




  const performPasswordUpdate = async () => {
    setChangePasswordPending(true);
    let reauthenticated = false;

    try {
      await refreshCredentials(currentPassword);
      reauthenticated = true;
    } catch (error) {
      handleErrorCode(error.code, setCurrentPasswordAlert);
      setChangePasswordPending(false);
    }

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
        handleErrorCode(error.code, setNewPasswordAlert)
      }
    }
  };

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



  return (
    <ContentContainer>
      <StyledSettings className="Settings">


    


      <PageHeader title="Settings" description="Adjust basic profile and account settings"/>

      <div className="Settings-container">
        {user.emailVerified ? (<>
          <ChangeDisplayName user={user} setToast={setToast}/>

          <ChangeEmail user={user} setToast={setToast} refreshCredentials={refreshCredentials} verified={true}/>

          <form className='password-form' noValidate onSubmit={(event) => {
            event.preventDefault();
            setCurrentPasswordAlert({});
            setNewPasswordAlert({});
            setConfirmPasswordAlert({});
            // Ensure form validation passes
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
          </>
          ) : (
            <ChangeEmail user={user} setToast={setToast} refreshCredentials={refreshCredentials} verified={false}/>
          )}

          <DeleteAccount user={user} setToast={setToast} refreshCredentials={refreshCredentials}/>

        </div>
      </StyledSettings>
    </ContentContainer>
  )
}

export default Settings
