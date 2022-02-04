import { useNavigate, useParams, useLocation } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import PrescriberForm from "../PrescriberForm/PrescriberForm";
import { StyledEditPrescriber } from "./EditPrescriber.styled";
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PageHeader from '../utils/PageHeader/PageHeader';
import { useImmediateToast } from '../../hooks/useImmediateToast';
import { Helmet } from "react-helmet-async";

const EditPrescriber = ({ googleLoaded, setToast, setPage }) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { showSuccessToast, showErrorToast } = useImmediateToast();

  // Extract the selected prescriber data passed via React Router state
  const { state: existingData } = useLocation();

  const [localPending, setLocalPending] = useState(false);
  const [prescriberData, setPrescriberData] = useState({
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

  // Set local prescriber data state to data passed along via React Router state
  useEffect(() => {
    setPrescriberData((prevData) => ({
      ...prevData,
      ...existingData,
    }));
  }, [existingData]);


  // Used when the user submits the form - save/edit details to backend
  const handleSubmit = async () => {
    setLocalPending(true);

    try {
      // Update data on backend
      await updateDoc(doc(db, 'prescribers', id), {
        ...prescriberData,
      });
      setLocalPending(false);
      // Inform the user the changes have been successfully applied, then return to the previous page
      showSuccessToast(setToast, 'Prescriber details updated')
      navigate('/prescribers');
    } catch (error) {
      setLocalPending(false);
      // Only an error toast is necessary. Specific error handling is not useful or necessary
      showErrorToast(setToast, 'An error occurred while saving changes')
    }
    
  };

  const cancelEdit = () => {
    navigate('/prescribers');
  }

  return (<>
    <Helmet>
      <title>Edit prescriber · OptomRx</title>
      <meta name="description" content="Edit prescriber details for the selected prescriber profile."/>
    </Helmet>
    <ContentContainer>
      <StyledEditPrescriber>
        <PageHeader title="Edit prescriber" description="Prescriber details will appear on your prescriptions"/>        
        <div className="form-container">
          <span className="form-title">Prescriber details</span>
          <PrescriberForm 
            googleLoaded={googleLoaded} 
            data={prescriberData}
            setData={setPrescriberData}
            handleSubmit={handleSubmit}
            handleCancel={cancelEdit}
            submitBtnLabel="Save changes"
            pending={localPending}
          />
        </div>
      </StyledEditPrescriber>
    </ContentContainer>
  </>)
}

export default EditPrescriber
