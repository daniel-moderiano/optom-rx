import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase/config";
import ProviderForm from "../ProviderForm/ProviderForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { StyledAddProvider } from "./AddProvider.styled";

const AddProvider = ({ googleLoaded, setToast }) => {
  const { user } = useAuthContext();

  let navigate = useNavigate();

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


  // Add provider to firestore database when submitting from standalone form
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    await addDoc(collection(db, 'providers'), {
      ...providerData,
      uid: user.uid,
    });

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
    
    setToast((prevData) => ({
      ...prevData,
      visible: true,
      type: 'success',
      message: 'Added successfully!'
    }));

    navigate('/providers');
    
  };

  const cancelEdit = () => {
    navigate('/providers');
  }

  return (
    <StyledAddProvider>
      <h2 className="AddProvider__title">Add provider</h2>
      <p className="AddProvider__description">Enter details to add a new provider</p>
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
      />
    </StyledAddProvider>
  )
}

export default AddProvider