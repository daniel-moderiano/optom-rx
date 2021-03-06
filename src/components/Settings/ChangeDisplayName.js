
import Button from "../utils/Button/Button";
import FormField from "../FormField/FormField";
import { useState, useEffect } from "react";
import Dots from "../utils/Dots/Dots";
import { useImmediateToast } from "../../hooks/useImmediateToast";
import { updateProfile } from "firebase/auth";
import { useAuthContext } from "../../hooks/useAuthContext";

const ChangeDisplayName = ({ setToast }) => {
  const { user } = useAuthContext();
  const { showSuccessToast, showErrorToast } = useImmediateToast(); 

  const [displayName, setDisplayName] = useState('');
  const [namePending, setNamePending] = useState(false);

  // Ensure the current display name is made visible to user
  useEffect(() => {
    setDisplayName(user.displayName);
  }, [user]);

  // Can perform this update without refreshing credentials 
  const updateName = async () => {
    setNamePending(true);
    try {
      await updateProfile(user, {
        displayName: displayName,
      });

      setNamePending(false);
      showSuccessToast(setToast, 'Display name updated');
    } catch (error) {
      setNamePending(false);
      showErrorToast(setToast, 'An error occurred while changing name');
    }
  };

  return (
    <form className="displayName-form" onSubmit={(event) => {event.preventDefault(); updateName();}}>
      <div className="form-title">Change display name</div>
      <FormField 
        fieldType="text" 
        name="displayName"
        label="Display name" 
        value={displayName} 
        onChange={(event) => setDisplayName(event.target.value)} 
      />  
      <input type="text" className="hidden" />
      <Button type="submit" >
        {namePending ? (
          <Dots color="white"/>
        ) : (
          'Update display name'
        )}
      </Button>
    </form>
  );
};

export default ChangeDisplayName;
