import { StyledSettings } from "./Settings.styled"
import { reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PageHeader from '../utils/PageHeader/PageHeader';
import ChangeDisplayName from "./ChangeDisplayName";
import DeleteAccount from "./DeleteAccount";
import ChangeEmail from "./ChangeEmail";
import { useEffect } from "react";
import ChangePassword from "./ChangePassword";
import { useAuthContext } from "../../hooks/useAuthContext";

const Settings = ({ setToast, setPage }) => {
  const { user } = useAuthContext();

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('settings');
  }, [setPage]);

  // Used to reauthenticate a user. This avoids an error when performing sensitive account functions like delete or email update
  const refreshCredentials = async (password) => {
    // Must be called once the user has entered their password, else it will just error
    const credential = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user, credential);
  }

  return (
    <ContentContainer>
      <StyledSettings className="Settings">
      <PageHeader title="Settings" description="Adjust basic profile and account settings"/>
      <div className="Settings-container">
        {user.emailVerified ? (<>
          <ChangeDisplayName setToast={setToast}/>
          <ChangeEmail setToast={setToast} refreshCredentials={refreshCredentials} verified={true}/>
          <ChangePassword setToast={setToast} refreshCredentials={refreshCredentials} verified={true}/>
          </>
          ) : (
            <ChangeEmail setToast={setToast} refreshCredentials={refreshCredentials} verified={false}/>
          )}
          <DeleteAccount setToast={setToast} refreshCredentials={refreshCredentials}/>
        </div>
      </StyledSettings>
    </ContentContainer>
  )
}

export default Settings;
