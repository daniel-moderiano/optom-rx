import { StyledSettings } from "./Settings.styled"
import FormField from '../FormField/FormField'
import { useState } from "react"
import { useEffect } from "react";
import { updateProfile, deleteUser } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useLogout } from '../../hooks/useLogout';
import Modal from "../utils/Modal/Modal";

const Settings = ({ user, setToast, setPage }) => {
  const { logout } = useLogout();
  const [displayName, setDisplayName] = useState('Test');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [showModal, setShowModal] = useState(false);

  const [namePending, setNamePending] = useState(false);
  const [nameError, setNameError] = useState(null);

  const [deletePending, setDeletePending] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailAlert, setEmailAlert] = useState({});
  const [passwordAlert, setPasswordAlert] = useState({});

  useEffect(() => {
    setDisplayName(user.displayName);
  }, [user]);

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('settings');
  }, [setPage])

  // Clear any lingering alerts when modal is open/closed
  useEffect(() => {
    setEmailAlert({});
    setPasswordAlert({});
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
      console.log(error);
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

  // Ensure form is validated before calling form submission function
  const isFormValid = () => {
    let valid = true;
    let inputFocused = false;

    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    // Check for blank field
    if (emailInput.value.trim().length === 0) {
      if (!inputFocused) {
        emailInput.focus();
        inputFocused = true;
      }
      setEmailAlert({
          message: "Please enter an email address.",
          type: 'error',
        }
      );
      emailInput.classList.add('error');
      valid = false;
    } 

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

  // // Inline form validation
  // useEffect(() => {
  //   // Event propagation will capture all focusout events from login form
  //   const loginValidation = () => {
  //     document.querySelector('.Login__form').addEventListener('focusout', (event) => {
  //       const { name, value } = event.target;
  //       switch (true) {
  //         case name === 'email':
  //           // Check for blank field
  //           if (value.trim().length === 0) {
  //             setEmailAlert({
  //                 message: "Please enter an email address.",
  //                 type: 'error',
  //               }
  //             );
  //             event.target.classList.add('error');
  //           } else {
  //             event.target.classList.remove('error');
  //             setEmailAlert({});
  //           }
  //           break;

  //         case name === 'password':
  //           // Check for blank field
  //           if (value.trim().length === 0) {
  //             setPasswordAlert({
  //                 message: "Please enter a password.",
  //                 type: 'error',
  //               }
  //             );
  //             event.target.classList.add('error');
  //           } else {
  //             event.target.classList.remove('error');
  //             setPasswordAlert({});
  //           }
  //           break;

  //         default:
  //           break;
  //       }
  //     });
  //   };

  //   loginValidation();
  // }, []);



   
  return (
    <StyledSettings className="Settings">
      {showModal && <Modal title="Add to favourites" closeModal={() => setShowModal(false)}>
        <form className='Login__form' noValidate onSubmit={(event) => {
          event.preventDefault();
          // Ensure form validation passes
          if (isFormValid()) {
            // Refresh credentials
            console.log('Form submitted successfully');
          }
          
        }}>

        <div className="provider-display">
          <div className="provider-label">This script will be displayed in your favourites list using the name above</div>
        </div>

          <FormField 
            fieldType="email" 
            name="email"
            label="Email" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
            className="auth-field form-field"
            alert={emailAlert}
            autoFocus
            required
            describedBy={Object.keys(emailAlert).length === 0 ? null : 'email-alert'}
            autocomplete="username"
          />

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
          <button type="button" className="cancel-btn Modal__btn" onClick={() => setShowModal(false)}>Cancel</button>
          <button type="submit" className="delete-btn Modal__btn" >Submit</button>
        </div>

        </form>
      </Modal>}

      <h2 className="Home__title">Settings</h2>
      <div className="Home__welcome">Select an option to get started</div>
      <div className="Settings-container">
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
        
        
        <form>
          <FormField 
            fieldType="text" 
            name="currentPassword"
            label="Current password" 
            value={currentPassword} 
            onChange={(event) => setCurrentPassword(event.target.value)} 
            // alert={alerts ? alerts.fullName : providerAlerts.fullName}
            // required
            // describedBy={Object.keys(alerts ? alerts.fullName : providerAlerts.fullName).length === 0 ? null : 'fullName-alert'}
          />  

          <FormField 
            fieldType="text" 
            name="newPassword"
            label="New password" 
            value={newPassword} 
            onChange={(event) => setNewPassword(event.target.value)} 
            // alert={alerts ? alerts.fullName : providerAlerts.fullName}
            // required
            // describedBy={Object.keys(alerts ? alerts.fullName : providerAlerts.fullName).length === 0 ? null : 'fullName-alert'}
          />  
          <button type="button" onClick={() => setShowModal(true)}>Update password</button>
        </form>
          
      <div className="delete-account">
        <button className="delete-btn" type="button" onClick={deleteAccount}>Delete account</button>
      </div>
        
      </div>
    </StyledSettings>
  )
}

export default Settings
