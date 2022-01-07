import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase/config";
import ProviderForm from "../ProviderForm/ProviderForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { StyledAddProvider } from "./AddProvider.styled";
import Fieldset from "../utils/Fieldset/Fieldset";
import Spinner from "../utils/Spinner/Spinner";

const AddProvider = ({ googleLoaded, setToast }) => {
  const { user } = useAuthContext();

  let navigate = useNavigate();

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);


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

  

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setIsPending(true);

    try {
      // Update data on backend
      await addDoc(collection(db, 'providers'), {
        ...providerData,
        uid: user.uid,
      });

      setIsPending(false);

      // Either a toast message here, or navigate back to Providers page and use an app-wide Toast alert system to show a toast on navigation back
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'New provider added'
      }));

      // Reset form both via state update and removal of UI classes (success classes)
      setProviderData({
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
      });

      navigate('/providers');
    } catch (error) {
      setIsPending(false);
      setError(error);
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

  

  return (
    <StyledAddProvider>
      <h2 className="AddProvider__title">Add provider</h2>
      <p className="AddProvider__description">Enter details to add a new provider</p>
      {isPending && <div className="overlay">
        <Spinner />
      </div>}
      <Fieldset className="add-provider-form" legend="Provider Details">
        <ProviderForm 
          googleLoaded={googleLoaded} 
          standalone={true} 
          data={providerData}
          setData={setProviderData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleCancel={cancelEdit}
          toggleBooleanState={() => toggleBooleanState(setProviderData, providerData, 'prefix')}
          submitBtn="Add provider"
          cancelBtn="Cancel"
          pending={isPending}
        />
      </Fieldset>   
      
    </StyledAddProvider>
  )
}

export default AddProvider
