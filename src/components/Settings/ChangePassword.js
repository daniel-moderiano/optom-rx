import Button from "../utils/Button/Button";
import Modal from '../utils/Modal/Modal';
import Dots from '../utils/Dots/Dots';
import { useState, useEffect } from "react";
import FormField from "../FormField/FormField";
import PasswordContainer from "../utils/PasswordContainer/PasswordContainer";
import { useErrorHandling } from '../../hooks/useErrorHandling';
import { deleteUser } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useImmediateToast } from '../../hooks/useImmediateToast';
import { useLogout } from "../../hooks/useLogout";

const ChangePassword = ({ user, setToast, refreshCredentials }) => {
  const { handleErrorCode } = useErrorHandling();
  const { logout } = useLogout();
  const { showSuccessToast, showErrorToast } = useImmediateToast(); 
  const [showModal, setShowModal] = useState(false);
  const [deleteConfirmPasswordAlert, setdeleteConfirmPasswordAlert] = useState({});
  const [deletePending, setDeletePending] = useState(false);
  
  const [deleteConfirmPassword, setdeleteConfirmPassword] = useState('');
  const [showDeleteConfirmPassword, setShowDeleteConfirmPassword] = useState(false);

  // Clear any lingering data and alerts when modal is open/closed
  useEffect(() => {
    setdeleteConfirmPassword('');
    setdeleteConfirmPasswordAlert({});
    setShowDeleteConfirmPassword(false);
  }, [showModal]);

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

  // Deletes the user account, as well as associated data including user document, and any created prescribers
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
      showSuccessToast(setToast, 'Account deleted');
    } catch (error) {
      showErrorToast(setToast, 'An error occurred while deleting account');
    }
  };

  // Combine all actions into a single function that handles credentials and delete operations
  const performDeleteAccount = async () => {
    setDeletePending(true);
    let reauthenticated = false;

    try {
      await refreshCredentials(deleteConfirmPassword);
      reauthenticated = true;
    } catch (error) {
      handleErrorCode(error.code, setdeleteConfirmPasswordAlert);
      setDeletePending(false);
    }

    // Act based on the result
    if (reauthenticated) {
      deleteAccount();
      setDeletePending(false);
    }
  };

  return (<>
    <div className="delete-account">
      <div className="form-title form-title--delete">Delete account</div>
      <p className="warning">Once you delete your account, it is permanent. Please be sure.</p>
      <Button handleClick={() => setShowModal(true)} design="delete" >
        Delete account
      </Button>
    </div>

    {showModal && <Modal title="Delete account" closeModal={() => setShowModal(false)} type="delete" errorMessage="This action is permanent and cannot be undone.">
    <div className="provider-display">
      <div className="provider-label">Please enter your password to continue</div>
    </div>
    <form className='Login__form' noValidate onSubmit={(event) => {
      event.preventDefault();
      if (isModalFormValid()) {
        performDeleteAccount();
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
  </>);
};

export default ChangePassword;
