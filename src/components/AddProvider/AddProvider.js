import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import PrescriberForm from "../PrescriberForm/PrescriberForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { StyledAddProvider } from "./AddProvider.styled";
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PageHeader from '../utils/PageHeader/PageHeader';
import { useInputChanges } from "../../hooks/useInputChanges";

const AddProvider = ({ googleLoaded, setToast, setPage }) => {
  const { user } = useAuthContext();
  let navigate = useNavigate();
  const { handleChange } = useInputChanges();

  const [isPending, setIsPending] = useState(false);
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

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage(null);
  }, [setPage])

  
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setProviderData((prevData) => ({
  //     ...prevData, 
  //     [name]: value 
  //   }));
  // };

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

      // Must reset state here before naviagting back to the previous page (component will no longer be mounted otherwise)
      setIsPending(false);

      // Confirm save via toast message, and return to the previous page
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'New provider added'
      }));

      navigate('/providers');
    } catch (error) {
      setIsPending(false);

      // Throw error toast on screen, no further rendering is required, nor any specific error handling
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
    <ContentContainer>
      <StyledAddProvider>
        <PageHeader title="Add prescriber" description="Prescriber details will appear on your prescriptions"/>
        <div className="form-container">
          <span className="form-title">Prescriber details</span>
          <PrescriberForm 
            googleLoaded={googleLoaded} 
            data={providerData}
            setData={setProviderData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleCancel={cancelEdit}
            toggleBooleanState={() => toggleBooleanState(setProviderData, providerData, 'prefix')}
            submitBtnLabel="Add prescriber"
            pending={isPending}
          />
        </div>
      </StyledAddProvider>
    </ContentContainer>
  )
}

export default AddProvider
