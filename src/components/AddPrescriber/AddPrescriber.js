/*global google*/
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import PrescriberForm from "../PrescriberForm/PrescriberForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { StyledAddPrescriber } from "./AddPrescriber.styled";
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PageHeader from '../utils/PageHeader/PageHeader';
import { useImmediateToast } from '../../hooks/useImmediateToast';
import { Helmet } from "react-helmet-async";

const AddPrescriber = ({ googleLoaded, setToast, setPage }) => {
  const { user } = useAuthContext();
  let navigate = useNavigate();
  const { showSuccessToast, showErrorToast } = useImmediateToast();

  const [isPending, setIsPending] = useState(false);
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


  // Used when the user submits the form - saves a new prescriber referenced by their user ID
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsPending(true);

    try {
      // Update data on backend
      await addDoc(collection(db, 'prescribers'), {
        ...prescriberData,
        uid: user.uid,
      });

      // Must reset state here before naviagting back to the previous page (component will no longer be mounted otherwise)
      setIsPending(false);

      // Confirm save via toast message, and return to the previous page
      showSuccessToast(setToast, 'New prescriber added')
      navigate('/prescribers');
    } catch (error) {
      setIsPending(false);
      // Throw error toast on screen, no further rendering is required, nor any specific error handling
      showErrorToast(setToast, 'An error occurred while adding prescriber')
    }
  };

  const cancelEdit = () => {
    navigate('/prescribers');
  }

  return (<>
    <Helmet>
      <title>Add prescriber · OptomRx</title>
      <meta name="description" content="Add a new prescriber profile for use with your prescriptions." />
      <link rel="canonical" href="/add-prescriber" />
    </Helmet>
    <ContentContainer>
      <StyledAddPrescriber>
        <PageHeader title="Add prescriber" description="Prescriber details will appear on your prescriptions" />
        <div className="form-container">
          <span className="form-title">Prescriber details</span>
          <PrescriberForm
            googleLoaded={googleLoaded}
            data={prescriberData}
            setData={setPrescriberData}
            handleSubmit={handleSubmit}
            handleCancel={cancelEdit}
            submitBtnLabel="Add prescriber"
            pending={isPending}
          />
        </div>
      </StyledAddPrescriber>
    </ContentContainer>
  </>)
}

export default AddPrescriber;
