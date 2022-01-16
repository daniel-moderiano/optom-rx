import { StyledSettings } from "./Settings.styled"
import FormField from '../FormField/FormField'
import { useState } from "react"
import { useEffect } from "react";
import { updateProfile, deleteUser } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const Settings = ({ user, setToast, setPage }) => {

  const [displayName, setDisplayName] = useState('Test');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [namePending, setNamePending] = useState(false);
  const [nameError, setNameError] = useState(null);

  const [deletePending, setDeletePending] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  useEffect(() => {
    setDisplayName(user.displayName);
  }, [user]);

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('settings');
  }, [setPage])


  const toggleBooleanState = (setData, data, boolToChange) => {
    let newState = true;
    if (data[boolToChange]) {
      newState = false;
    }
    setData((prevData) => ({
      ...prevData,
      [boolToChange]: newState,
    }));
  };

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

      await deleteUser(user);
      

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
  }

   
  return (
    <StyledSettings className="Settings">
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
          <button type="button">Update password</button>
        </form>
          
      <div className="delete-account">
        <button className="delete-btn" type="button" onClick={deleteAccount}>Delete account</button>
      </div>
        
      </div>
    </StyledSettings>
  )
}

export default Settings
