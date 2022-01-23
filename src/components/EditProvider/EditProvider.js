import { useNavigate, useParams, useLocation } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import PrescriberForm from "../PrescriberForm/PrescriberForm";
import { StyledEditProvider } from "./EditProvider.styled";
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PageHeader from '../utils/PageHeader/PageHeader';

const EditProvider = ({ googleLoaded, setToast, setPage }) => {
  const { id } = useParams();
  let navigate = useNavigate();

  // Extract the selected provider data passed via React Router state
  const { state: existingData } = useLocation();

  const [localPending, setLocalPending] = useState(false);
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

  // Set local provider data state to data passed along via React Router state
  useEffect(() => {
    setProviderData((prevData) => ({
      ...prevData,
      ...existingData,
    }));
  }, [existingData]);


  const handleSubmit = async () => {
    setLocalPending(true);

    try {
      // Update data on backend
      await updateDoc(doc(db, 'providers', id), {
        ...providerData,
      });

      setLocalPending(false);

      // Inform the user the changes have been successfully applied, then return to the previous page
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'Provider details updated'
      }));

      navigate('/providers');
    } catch (error) {
      setLocalPending(false);

      // Only an error toast is necessary. Specific error handling is not useful or necessary
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
      <StyledEditProvider>
        <PageHeader title="Edit prescriber" description="Prescriber details will appear on your prescriptions"/>        
        <div className="form-container">
          <span className="form-title">Prescriber details</span>
          <PrescriberForm 
            googleLoaded={googleLoaded} 
            data={providerData}
            setData={setProviderData}
            handleSubmit={handleSubmit}
            handleCancel={cancelEdit}
            submitBtnLabel="Save changes"
            pending={localPending}
          />
        </div>
      </StyledEditProvider>
    </ContentContainer>
  )
}

export default EditProvider
