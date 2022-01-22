import { StyledSettings } from "./Settings.styled"
import FormField from '../FormField/FormField'
import { useState } from "react"
import { useEffect } from "react";
import { updateProfile, deleteUser, reauthenticateWithCredential, EmailAuthProvider, updatePassword, sendEmailVerification, updateEmail } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useLogout } from '../../hooks/useLogout';
import Modal from "../utils/Modal/Modal";
import { Link } from "react-router-dom";
import Button from "../utils/Button/Button";
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PasswordContainer from '../utils/PasswordContainer/PasswordContainer';
import PageHeader from '../utils/PageHeader/PageHeader';
import Dots from '../utils/Dots/Dots';

const Settings = ({ user, setToast, setPage }) => {
  const { logout } = useLogout();
  const [displayName, setDisplayName] = useState('Test');

  const [currentPassword, setCurrentPassword] = useState('');
  const [currentPasswordAlert, setCurrentPasswordAlert] = useState({});

  const [newPasswordAlert, setNewPasswordAlert] = useState({});
  const [newPassword, setNewPassword] = useState('');

  const [deleteConfirmPasswordAlert, setdeleteConfirmPasswordAlert] = useState({});
  const [deleteConfirmPassword, setdeleteConfirmPassword] = useState('');

  const [confirmPasswordAlert, setConfirmPasswordAlert] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailConfirmPassword, setEmailConfirmPassword] = useState('');  
  const [emailConfirmPasswordAlert, setEmailConfirmPasswordAlert] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const [namePending, setNamePending] = useState(false);

  const [deletePending, setDeletePending] = useState(false);

  const [changePasswordPending, setChangePasswordPending] = useState(false);
  const [changeEmailPending, setChangeEmailPending] = useState(false);

  const [newEmail, setNewEmail] = useState('');
  const [newEmailAlert, setNewEmailAlert] = useState({});
  
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const [showDeleteConfirmPassword, setShowDeleteConfirmPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showEmailConfirmPassword, setShowEmailConfirmPassword] = useState(false);

  const { email } = user;

  useEffect(() => {
    setDisplayName(user.displayName);
    // setCurrentEmail(email);
  }, [user, email]);

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('settings');
  }, [setPage])

  // Clear any lingering data and alerts when modal is open/closed
  useEffect(() => {
    setNewEmailAlert({});
    setEmailConfirmPasswordAlert({});
    setEmailConfirmPassword('');
    setdeleteConfirmPassword('');
    setdeleteConfirmPasswordAlert('');
    setNewEmail('');
    setShowDeleteConfirmPassword(false);
    setShowEmailConfirmPassword(false);
  }, [showModal, showEmailModal])


  const updateName = async () => {
    setNamePending(true);

    try {
      await updateProfile(user, {
        displayName: displayName,
      });

      setNamePending(false);

      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'Display name updated'
      }));
    } catch (error) {
      setNamePending(false);

      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'An error occurred while changing name'
      }));
    }
  };

  const deleteAccount = async () => {
    
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

      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'Account deleted'
      }));
    } catch (error) {
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

    const deleteConfirmPasswordInput = document.querySelector('input[name="deleteConfirmPassword"]');

    // Check for blank field
    if (deleteConfirmPasswordInput.value.trim().length === 0) {
      if (!inputFocused) {
        deleteConfirmPasswordInput.focus();
        inputFocused = true;
      }
      setdeleteConfirmPasswordAlert({
          message: "Please enter a password.",
          type: 'error',
        }
      );
      deleteConfirmPasswordInput.classList.add('error');
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
    if (emailConfirmPasswordInput.value === email) {
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
    const credential = EmailAuthProvider.credential(email, deleteConfirmPassword);

    try {
      // Attempt re-authentication
      await reauthenticateWithCredential(user, credential);
      // Clear passwords
      setdeleteConfirmPassword('');
      return true;
      
    } catch (error) {
      console.log(error);
      errorHandling(error.code, setdeleteConfirmPasswordAlert);
      return false;
    }
  };

  // Combine the credentials and actual deleting of account using async flow
  const performDeleteFunctions = async () => {
    setDeletePending(true);
    // Check that the credential confirmation was successful
    const confirmed = await refreshCredentialsForDelete();
    // Act based on the result
    if (confirmed) {
      deleteAccount();
      setDeletePending(false);
    } else {
      // Do nothing, refreshCredentials function hadnles errors and directs user to fix mistakes
      setDeletePending(false);
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

  // This function is/returns a Promise
  const refreshCredentialsForEmail = async () => {
    // Must be called once the user has entered their password, else it will just error
    const credential = EmailAuthProvider.credential(email, emailConfirmPassword);

    try {
      // Attempt re-authentication
      await reauthenticateWithCredential(user, credential);
      return true;
      
    } catch (error) {
      // errorHandling(error.code, setEmailAlert)
      // TODO: Email error handling
      console.log(error);
      return false;
    }
  };

  // Combine the credentials and actual deleting of account using async flow
  const performEmailUpdate = async () => {
    setChangeEmailPending(true);
    // Check that the credential confirmation was successful
    const confirmed = await refreshCredentialsForEmail();
    // Act based on the result
    if (confirmed) {
      try {
        await updateEmail(user, newEmail);
        setShowEmailModal(false);
        setChangeEmailPending(false);

        setToast((prevData) => ({
          ...prevData,
          visible: true,
          type: 'success',
          message: 'Email updated successfully'
        }));
        
        try {
          await sendEmailVerification(user)
        } catch (error) {
          console.log(error);
        } finally {
          // Timeout is purely to not overwhelm the user with modals flying one after the other
          setTimeout(() => {
            setShowVerifyModal(true);
          }, 1000)
          
        }
        
  
      } catch (error) {
        console.log(error);
        setChangeEmailPending(false);
        // TODO: email update error handling
      }
    } else {
      setChangeEmailPending(false);
      // Do nothing, refreshCredentials function hadnles errors and directs user to fix mistakes
    }
  };

  // Combine the credentials and actual deleting of account using async flow
  const performPasswordUpdate = async () => {
    setChangePasswordPending(true);

    // Check that the credential confirmation was successful
    const confirmed = await refreshCredentialsForPassword();
    // Act based on the result
    if (confirmed) {
      try {
        await updatePassword(user, newPassword);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setShowCurrentPassword(false);
        setShowNewPassword(false);
        setShowConfirmPassword(false);

        setChangePasswordPending(false);

        setToast((prevData) => ({
          ...prevData,
          visible: true,
          type: 'success',
          message: 'Password changed successfully'
        }));
        
      } catch (error) {
        setChangePasswordPending(false);
        errorHandleNewPassword(error.code, setNewPasswordAlert)
      }
    } else {
      // Do nothing, refreshCredentials function hadnles errors and directs user to fix mistakes
      setChangePasswordPending(false);
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
    <ContentContainer>
      <StyledSettings className="Settings">
      {showVerifyModal && <Modal title="Verify your email" closeModal={() => setShowVerifyModal(false)}>
  
        <div className="verify-container">
          <p className="verify-message">An email verification link has been sent to your email address. Follow the link to verify your email and activate all features.</p>
          <div className="img-container">
            {/* <img className="email-icon" src={emailIcon} alt="Email icon" /> */}

      <svg className="email-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 64 64" aria-describedby='email-svg-title'>
          <title id='email-svg-title'>Email icon</title>
          <g id="Layer_1">
            <g>
              <circle className="st0" cx="32" cy="32" r="32"/>
            </g>
            <g>
              <g className="st1">
                <path className="st2" d="M52,44c0,2.2-1.8,4-4,4H16c-2.2,0-4-1.8-4-4V24c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4V44z"/>
              </g>
              <g>
                <path className="st3" d="M52,42c0,2.2-1.8,4-4,4H16c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4V42z"/>
              </g>
              <g className="st1">
                <g>
                  <path className="st2" d="M35.5,30.2c-1.9-2.1-5.1-2.1-7,0L13,43.2c-0.2,0.2-0.3,0.4-0.5,0.6c0.7,1.3,2,2.2,3.4,2.2h32
                    c1.5,0,2.7-0.9,3.4-2.2c-0.1-0.2-0.3-0.4-0.5-0.6L35.5,30.2z"/>
                </g>
              </g>
              <g>
                <g>
                  <path className="st3" d="M35.5,32c-1.9-1.9-5.1-1.9-7,0L13,43.5c-0.2,0.2-0.3,0.3-0.5,0.5c0.7,1.2,2,1.9,3.4,1.9h32
                    c1.5,0,2.7-0.8,3.4-1.9c-0.1-0.2-0.3-0.3-0.5-0.5L35.5,32z"/>
                </g>
              </g>
              <g className="st1">
                <g>
                  <path className="st2" d="M12.6,20.2c0.7-1.3,2-2.2,3.4-2.2h32c1.5,0,2.7,0.9,3.4,2.2c-0.1,0.2-0.3,0.4-0.5,0.6l-15.4,13
                    c-1.9,2.1-5.1,2.1-7,0L12.6,20.2z"/>
                </g>
              </g>
              <g>
                <g>
                  <path className="st4" d="M28.5,32c1.9,1.9,5.1,1.9,7,0L51,20.5c0.2-0.2,0.3-0.3,0.5-0.5c-0.7-1.2-2-1.9-3.4-1.9H16
                    c-1.5,0-2.7,0.8-3.4,1.9c0.1,0.2,0.3,0.3,0.5,0.5L28.5,32z"/>
                </g>
              </g>
            </g>
          </g>
          <g id="Layer_2">
          </g>
          </svg>

          </div>
        </div>

  

      <div className="modal-btns">
        <Button design="ghost" handleClick={() => setShowVerifyModal(false)}>Continue to app</Button>
      </div>
 

      </Modal>}

      {showModal && <Modal title="Delete account" closeModal={() => setShowModal(false)} type="delete" errorMessage="This action is permanent and cannot be undone.">
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

          <PasswordContainer showPassword={showDeleteConfirmPassword} handleClick={() => setShowDeleteConfirmPassword((prevState) => (!prevState))}>
            <FormField 
              id="current-password"
              fieldType={`${showDeleteConfirmPassword ? 'text' : 'password'}`}
              name="deleteConfirmPassword"
              label="Password" 
              value={deleteConfirmPassword} 
              onChange={(event) => setdeleteConfirmPassword(event.target.value)} 
              className="auth-field form-field"
              alert={deleteConfirmPasswordAlert}
              required
              describedBy={Object.keys(deleteConfirmPasswordAlert).length === 0 ? null : 'current-password-alert'}
              autocomplete="current-password"
            />
          </PasswordContainer>

          

        <div className="Modal__buttons">
          <Button design="secondary" classLabel="cancel" handleClick={() => setShowModal(false)}>Cancel</Button>
          <Button type="submit" design="delete">
            {deletePending ? (
              <Dots color="white"/>
            ) : (
              'Delete'
            )}
          </Button>
        </div>
        </form>
      </Modal>}

      {showEmailModal && <Modal title="Change email" closeModal={() => setShowEmailModal(false)}>
        {/* <div className="neutral-container">
          <div className="neutral-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--neutral" viewBox="0 0 512 512" width="24px">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="#00477A" stroke="#00477A" strokeMiterlimit="10" strokeWidth="32"/>
              <path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="#00477A" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="#ffffff"/>
            </svg>
          </div>
          <div className="neutral-text">
            Changes to email require you to re-enter your password
          </div>
        </div> */}
        <div className="update-display">
          <div className="update-label">Current email address:</div>
          <div className="update-summary">{email}</div>
        </div>
        <form className='Login__form' noValidate onSubmit={(event) => {
          event.preventDefault();
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
            describedBy={Object.keys(newEmailAlert).length === 0 ? null : 'newEmail-alert'}
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
              describedBy={Object.keys(emailConfirmPasswordAlert).length === 0 ? null : 'current-password-alert'}
              autocomplete="current-password"
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

      <PageHeader title="Settings" description="Adjust basic profile and account settings"/>

      <div className="Settings-container">
        {user.emailVerified ? (<>
          <form className="displayName-form" >
            <div className="form-title">Change display name</div>
            <FormField 
              fieldType="text" 
              name="displayName"
              label="Display name" 
              value={displayName} 
              onChange={(event) => setDisplayName(event.target.value)} 
            />  
            <input type="text" className="hidden" />
            <Button handleClick={updateName} >
              {namePending ? (
                <Dots color="white"/>
              ) : (
                'Update display name'
              )}
            </Button>
          </form>

          <div className="change-email">
                <div className="form-title">Change email</div>
          <div className="current-email">{email}</div>
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

                

          
          <form className='password-form' noValidate onSubmit={(event) => {
            event.preventDefault();
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
                describedBy='currentPassword-alert'
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
              describedBy='newPassword-alert'
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
              describedBy='confirmPassword-alert'
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
            
        
        
        </>) : (
          <div className="no-email">
            {/* <p className="no-email-desc">Please verify an email address to access all account settings, receive notifications, and reset your password</p> */}
            {/* <p className="spam-msg">Make sure to check your spam/junk folder</p> */}
            

              <div className="change-email">
                <div className="form-title">Change email</div>
                <p className="no-email-desc">Please verify your email address to access all account settings, receive notifications, and reset your password</p>
           
                  <div className="current-email">{email}</div>
            
                    
              

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
                
                  <input type="text" className="hidden" />

                  <Button handleClick={() => setShowEmailModal(true)}>Change email</Button>

              </div>         
          </div>

        )}
        <div className="delete-account">
          <div className="form-title form-title--delete">Delete account</div>
          <p className="warning">Once you delete your account, it is permanent. Please be sure.</p>
          <Button handleClick={() => setShowModal(true)} design="delete" >
            Delete account
          </Button>
        </div>
      </div>
    </StyledSettings>
    </ContentContainer>
    
  )
}

export default Settings
