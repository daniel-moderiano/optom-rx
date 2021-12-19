import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase/config";
import ProviderForm from "../ProviderForm/ProviderForm";
import { useAuthContext } from "../../hooks/useAuthContext";

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

  const removeAllValidation = (element) => {
    element.classList.remove('success');

    // Remove the tick icon
    const tick = element.parentNode.querySelector('.tickCircle');
    tick.classList.remove('show');
    tick.classList.add("hide");
  }

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

    // document.querySelectorAll('input').forEach((input) => {
    //   removeAllValidation(input);
    // });

    
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
    <div>
      <Link to="/providers">Go back</Link>
      <ProviderForm 
        googleLoaded={googleLoaded} 
        standalone={true} 
        data={providerData}
        setData={setProviderData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCancel={cancelEdit}
        toggleBooleanState={() => toggleBooleanState(setProviderData, providerData, 'prefix')}
      />
    </div>
  )
}

export default AddProvider
