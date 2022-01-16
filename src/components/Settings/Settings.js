import { StyledSettings } from "./Settings.styled"
import FormField from '../FormField/FormField'
import { useState } from "react"
import { useEffect } from "react";

const Settings = ({ user, setToast }) => {

  const [displayName, setDisplayName] = useState('Test');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    setDisplayName(user.displayName);
  }, [user]);


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
          <button>Update display name</button>
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
          <button>Update password</button>
        </form>
          
      <div className="delete-account">
      <button className="delete-btn" type="button">Delete account</button>
      </div>
        
      </div>
    </StyledSettings>
  )
}

export default Settings
