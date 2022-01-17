import { StyledSettings } from "./Settings.styled"
import FormField from '../FormField/FormField'
import { useState } from "react"
import { useEffect } from "react";
import { updateProfile, deleteUser, reauthenticateWithCredential, EmailAuthProvider, updatePassword, sendEmailVerification } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useLogout } from '../../hooks/useLogout';
import Modal from "../utils/Modal/Modal";
import { Link } from "react-router-dom";

const Settings = ({ user, setToast, setPage }) => {
  const { logout } = useLogout();
  const [displayName, setDisplayName] = useState('Test');
  const [currentPassword, setCurrentPassword] = useState('');
  const [currentPasswordAlert, setCurrentPasswordAlert] = useState({});
  const [newPasswordAlert, setNewPasswordAlert] = useState({});
  const [newPassword, setNewPassword] = useState('');

  const [confirmPasswordAlert, setConfirmPasswordAlert] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showModal, setShowModal] = useState(false);

  const [namePending, setNamePending] = useState(false);
  const [nameError, setNameError] = useState(null);

  const [deletePending, setDeletePending] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailAlert, setEmailAlert] = useState({});
  const [passwordAlert, setPasswordAlert] = useState({});

  const { email } = user;

  useEffect(() => {
    setDisplayName(user.displayName);
  }, [user]);

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('settings');
  }, [setPage])

  // Clear any lingering data and alerts when modal is open/closed
  useEffect(() => {
    setEmailAlert({});
    setPasswordAlert({});
    setPassword('');
  }, [showModal])


  const updateName = async () => {
    setNamePending(true);
    setNameError(null);

    try {
      await updateProfile(user, {
        displayName: displayName,
      });

      setNamePending(false);
      setNameError(null);

      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'Display name updated'
      }));
    } catch (error) {
      setNamePending(false);
      setNameError(error);
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'An error occurred while changing name'
      }));
    }
  };

  const deleteAccount = async () => {
    setDeletePending(true);
    setDeleteError(null);
    
    // Gather a reference to all of the user's prescribers
    const presRef = collection(db, 'providers');
    const presQuery = query(presRef, where('uid', '==', user.uid));
    const docsSnap  = await getDocs(presQuery);

    try {
      // Delete all of the user's prescribers
      docsSnap.forEach((doc) => deleteDoc(doc.ref));
      // Delete the user's document in firestore
      await deleteDoc(doc(db, 'users', user.uid))     
      // Delete the user iteself from firebase auth
      await deleteUser(user);
      // Finally, logout
      logout();

      setDeletePending(false);
      setDeleteError(null);

      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'Account deleted'
      }));
    } catch (error) {
      setDeletePending(false);
      setDeleteError(error);
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'An error occurred while deleting account'
      }));
    }
  };

   // Inline form validation
   useEffect(() => {
    // Event propagation will capture all focusout events from login form
    const passwordFormValidation = () => {
      document.querySelector('.password-form').addEventListener('focusout', (event) => {
        const { name, value } = event.target;
        switch (true) {
          case name === 'currentPassword':
            // Check for non empty field
            if (value.trim().length !== 0) {
              event.target.classList.remove('error');
              setCurrentPasswordAlert({});
            }
            break;

          case name === 'newPassword':
            // Check for non empty field
            if (value.trim().length !== 0) {
              event.target.classList.remove('error');
              setNewPasswordAlert({});
            }
            break;

          case name === 'confirmPassword':
            // Check for non empty field
            if (value.trim().length !== 0) {
              event.target.classList.remove('error');
              setConfirmPasswordAlert({});
            }
            break;
          default:
            break;
        }
      });
    };

    if (user.emailVerified) {
      passwordFormValidation();
    }
    
  }, [user.emailVerified]);

  // Ensure form is validated before calling form submission function
  const isModalFormValid = () => {
    let valid = true;
    let inputFocused = false;

    const passwordInput = document.querySelector('input[name="password"]');

    // Check for blank field
    if (passwordInput.value.trim().length === 0) {
      if (!inputFocused) {
        passwordInput.focus();
        inputFocused = true;
      }
      setPasswordAlert({
          message: "Please enter a password.",
          type: 'error',
        }
      );
      passwordInput.classList.add('error');
      valid = false;
    } 
    return valid;
  };

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

  const errorHandling = (errorCode, alertSetFunc) => {
    switch (errorCode) {
      case 'auth/wrong-password':
        alertSetFunc({
          message: "That's an incorrect password. Try again.",
          type: 'error',
        });
        break;
      case 'auth/too-many-requests':
        alertSetFunc({
          message: 'Failed to authorise too many times. Please wait a few minutes before trying again.',
          type: 'error',
        });
        break;
      case 'auth/network-request-failed':
        alertSetFunc({
          message: "We couldn't connect to the network. Please check your internet connection and try again.",
          type: 'error',
        });
        break;
    
      default:
        alertSetFunc({
          message: 'An unknown server error occured. Please try again.',
          type: 'error',
        });
        break;
    }
  };

  const errorHandleNewPassword = (errorCode, alertSetFunc) => {
    switch (errorCode) {
      case 'auth/weak-password':
        alertSetFunc({
          message: "Please create a password at least six characters in length. ",
          type: 'error',
        });
        break;
      case 'auth/too-many-requests':
        alertSetFunc({
          message: 'Failed to authorise too many times. Please wait a few minutes before trying again.',
          type: 'error',
        });
        break;
      case 'auth/network-request-failed':
        alertSetFunc({
          message: "We couldn't connect to the network. Please check your internet connection and try again.",
          type: 'error',
        });
        break;
    
      default:
        alertSetFunc({
          message: 'An unknown server error occured. Please try again.',
          type: 'error',
        });
        break;
    }
  };


  // This function is/returns a Promise
  const refreshCredentialsForDelete = async () => {
    // Must be called once the user has entered their password, else it will just error
    const credential = EmailAuthProvider.credential(email, password);

    try {
      // Attempt re-authentication
      await reauthenticateWithCredential(user, credential);
      
      setShowModal(false);
      // Clear passwords
      setPassword('');
      return true;
      
    } catch (error) {
      errorHandling(error.code, setPasswordAlert)
      return false;
    }
  };

  // Combine the credentials and actual deleting of account using async flow
  const performDeleteFunctions = async () => {
    // Check that the credential confirmation was successful
    const confirmed = await refreshCredentialsForDelete();
    // Act based on the result
    if (confirmed) {
      deleteAccount();
    } else {
      // Do nothing, refreshCredentials function hadnles errors and directs user to fix mistakes
    }
  }

  // This function is/returns a Promise
  const refreshCredentialsForPassword = async () => {
    // Must be called once the user has entered their password, else it will just error
    const credential = EmailAuthProvider.credential(email, currentPassword);

    try {
      // Attempt re-authentication
      await reauthenticateWithCredential(user, credential);
      return true;
      
    } catch (error) {
      errorHandling(error.code, setCurrentPasswordAlert)
      return false;
    }
  };

  // Combine the credentials and actual deleting of account using async flow
  const performPasswordUpdate = async () => {
    // Check that the credential confirmation was successful
    const confirmed = await refreshCredentialsForPassword();
    // Act based on the result
    if (confirmed) {
      try {
        await updatePassword(user, newPassword);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');

        setToast((prevData) => ({
          ...prevData,
          visible: true,
          type: 'success',
          message: 'Password changed successfully'
        }));
        
      } catch (error) {
        errorHandleNewPassword(error.code, setNewPasswordAlert)
      }
    } else {
      // Do nothing, refreshCredentials function hadnles errors and directs user to fix mistakes
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

  const resendEmailVerification = async () => {
    try {
      await sendEmailVerification(user);
      console.log('Email sent');
    } catch (error) {
      console.log(error.code);
    }
  }

  
   
  return (
    <StyledSettings className="Settings">
       {showModal && <Modal title="Delete provider" closeModal={() => setShowModal(false)}>
        <div className="error-container">
          <div className="error-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--neutral" viewBox="0 0 512 512" width="24px">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="#D12323" stroke="#D12323" strokeMiterlimit="10" strokeWidth="32"/>
              <path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="#D12323" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="#ffffff"/>
            </svg>
          </div>
          <div className="error-text">
            This action is permanent and cannot be undone.
          </div>
        </div>
        <div className="provider-display">
          <div className="provider-label">Please enter your password to continue</div>
          {/* <div className="provider-summary">{`${selectedProvider.fullName} (${selectedProvider.location})`}</div> */}
        </div>
        <form className='Login__form' noValidate onSubmit={(event) => {
          event.preventDefault();
          // Ensure form validation passes
          if (isModalFormValid()) {
            // Refresh credentials
            performDeleteFunctions();
              
          }
          
        }}>

          <FormField 
            id="current-password"
            fieldType="password" 
            name="password"
            label="Password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
            className="auth-field form-field"
            alert={passwordAlert}
            required
            describedBy={Object.keys(passwordAlert).length === 0 ? null : 'password-alert'}
            autocomplete="current-password"
          />


        <div className="Modal__buttons">
          <button className="cancel-btn Modal__btn" onClick={() => setShowModal(false)}>Cancel</button>
          <button className="delete-btn Modal__btn">Delete</button>
        </div>
        </form>
      </Modal>}

      <h2 className="Home__title">Settings</h2>
      <div className="Home__welcome">Select an option to get started</div>


      <div className="Settings-container">
        {user.emailVerified ? (<>
          <form>
            <FormField 
              fieldType="text" 
              name="displayName"
              label="Display name" 
              value={displayName} 
              onChange={(event) => setDisplayName(event.target.value)} 
              // alert={alerts ? alerts.fullName : providerAlerts.fullName}
              // required
              // describedBy={Object.keys(alerts ? alerts.fullName : providerAlerts.fullName).length === 0 ? null : 'fullName-alert'}
            />  
            <input type="text" className="hidden" />
            <button type="button" onClick={updateName}>Update display name</button>
          </form>
          
          
          <form className='password-form' noValidate onSubmit={(event) => {
            event.preventDefault();
            // Ensure form validation passes
            if (isPasswordFormValid() && comparePasswords()) {
              performPasswordUpdate();
            }
          }}>

            <FormField 
              fieldType="password" 
              name="currentPassword"
              label="Current password" 
              value={currentPassword} 
              onChange={(event) => setCurrentPassword(event.target.value)} 
              alert={currentPasswordAlert}
              required
              describedBy='currentPassword-alert'
            />  

            <FormField 
              fieldType="password" 
              name="newPassword"
              label="New password" 
              value={newPassword} 
              onChange={(event) => setNewPassword(event.target.value)} 
              alert={newPasswordAlert}
              required
              describedBy='newPassword-alert'
            />  

            <FormField 
              fieldType="password" 
              name="confirmPassword"
              label="Confirm password" 
              value={confirmPassword} 
              onChange={(event) => setConfirmPassword(event.target.value)} 
              alert={confirmPasswordAlert}
              required
              describedBy='confirmPassword-alert'
            />  
            <button>Update password</button>
            <Link to="/reset-password" className="reset-password" onClick={logout}>Forgot password?</Link>
          </form>
            
        <div className="delete-account">
          <button className="delete-btn" type="button" onClick={() => setShowModal(true)}>Delete account</button>
        </div>
        
        </>) : (
          <div className="no-email">
            <p>Email address must be verified to access account settings</p>
            <p className="spam-msg">Make sure to check your spam/junk folder</p>
            <button className="resend" onClick={resendEmailVerification}>Resend verification email</button>
          </div>
        )}
         <div className="delete-account">
          <button className="delete-btn" type="button" onClick={() => setShowModal(true)}>Delete account</button>
        </div>
      </div>
    </StyledSettings>
  )
}

export default Settings
