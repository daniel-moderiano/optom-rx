import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import ProviderForm from "../ProviderForm/ProviderForm";
import { StyledEditProvider } from "./EditProvider.styled";
import Fieldset from "../utils/Fieldset/Fieldset";
import { useProvider } from "../../hooks/useProvider";
import Spinner from "../utils/Spinner/Spinner";

const EditProvider = ({ googleLoaded, setToast }) => {
  const { id } = useParams();

  let navigate = useNavigate();

  const { provider, isPending, error } = useProvider(id);

  const [localPending, setLocalPending] = useState(false);
  const [localError, setLocalError] = useState(null);

  const [providerData, setProviderData] = useState({
    prefix: false,
    fullName: '',
    qualifications: '',
    practiceName: '',
    streetAddress: '',
    subpremise: '',
    suburb: '',
    postcode: '',
    state: '',
    phoneNumber: '',
    prescriberNumber: '',
    default: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProviderData((prevData) => ({
      ...prevData, 
      [name]: value 
    }));
  };

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

  const handleSubmit = async () => {
    setLocalPending(true);

    try {
      // Update data on backend
      await updateDoc(doc(db, 'providers', id), {
        ...providerData,
      });

      setLocalPending(false);

      // Either a toast message here, or navigate back to Providers page and use an app-wide Toast alert system to show a toast on navigation back
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'Provider details updated'
      }));

      navigate('/providers');
    } catch (error) {
      setLocalPending(false);
      setLocalError(error);
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'Failed to complete request'
      }));
    }
    
  };

  const cancelEdit = () => {
    navigate('/providers');
  }

  // Update the local state data once the provider data is fetched from the server
  useEffect(() => {
    setProviderData((prevData) => ({
      ...prevData,
      ...provider,
    }));
  }, [provider]);

  return (
    <StyledEditProvider>
      <h2 className="EditProvider__title">Edit provider</h2>
      <p className="EditProvider__description">Change any details and then save changes</p>
      <div className="main-container">
      {isPending && <div className="overlay">
        <Spinner />
      </div>}

      {localPending && <div className="overlay">
        <Spinner />
      </div>}
      <Fieldset className="edit-provider-form" legend="Provider Details">
     
      
      <ProviderForm 
        googleLoaded={googleLoaded} 
        standalone={true} 
        data={providerData}
        setData={setProviderData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={cancelEdit}
        toggleBooleanState={() => toggleBooleanState(setProviderData, providerData, 'prefix')}
        submitBtn="Save changes"
        cancelBtn="Cancel"
        pending={isPending}
      />
      </Fieldset>
      </div>
      
    </StyledEditProvider>
  )
}

export default EditProvider
