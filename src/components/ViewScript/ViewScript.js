import { useParams, useLocation, Link } from "react-router-dom";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { StyledViewScript } from "./ViewScript.styled.";
import { useAuthContext } from "../../hooks/useAuthContext";
import Modal from "../utils/Modal/Modal";
import FormField from "../FormField/FormField";
import Dots from "../utils/Dots/Dots";
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PageHeader from '../utils/PageHeader/PageHeader';
import Button from '../utils/Button/Button'
import './ViewScript.css';
import { useFormatting } from '../../hooks/useFormatting';
import Spinner from "../utils/Spinner/Spinner";

const ViewScript = ({ setToast, resetData, setPage }) => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const { formatDrug, formatDate } = useFormatting();

  // Extract the selected provider data passed via React Router state
  const { state: existingData } = useLocation();

  const [scriptData, setScriptData] = useState(null);
  const [favPending, setFavPending] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [customName, setCustomName] = useState('');
  const [addStatus, setAddStatus] = useState(false);

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage(null);
  }, [setPage]);

  // Set local provider data state to data passed along via React Router state
  useEffect(() => {
    setScriptData((prevData) => ({
      ...prevData,
      ...existingData,
    }));
  }, [existingData]);

  // Takes current script and adds it to the user's favourites array
  const addToFavourites = async (scriptToAdd) => {
    // Ensure the scriptData is not null
    if (scriptToAdd) {
      setFavPending(true);
      try {
        // Add script data to the current user's favourite scripts. This operation can be called multiple times as arrayUnion will not add elements already present BUT the UI design should encourage multiple calls
        await updateDoc(doc(db, 'users', user.uid), {
          favourites: arrayUnion({
            ...scriptToAdd,
            customName: customName,
          })
        });

        setFavPending(false);
        setAddStatus(true);
        setShowModal(false);
        setToast((prevData) => ({
          ...prevData,
          visible: true,
          type: 'success',
          message: 'Prescription saved to favourites'
        }));

      } catch (error) {
        setFavPending(false);
        setShowModal(false);
        setToast((prevData) => ({
          ...prevData,
          visible: true,
          type: 'error',
          message: 'An error occurred while adding favourites'
        }));
      } 
    }
  }

  return (<>
    <ContentContainer>
      <StyledViewScript>
        <PageHeader title={`Script #${id}`} />

          {scriptData ? (<>
            <div className="Script__info">
              <div className="Script__medication">
                <div className="Script__title Script__title--medication">Medication details</div>
                <div className="Script__info--section Script__drug">{formatDrug(scriptData)}</div>
                {scriptData.compounded && <div className="Script__info--section Script__compounded">To be compounded</div>}
                <div className="Script__info--section Script__substitute">{`${scriptData.substitutePermitted ? 'Brand substitution allowed' : 'Brand substitution not permitted'}`}</div>
                <div className="Script__info--section Script__dosage">Dosage: {scriptData.dosage}</div>
                <div className="Script__info--section Script__quantity">Quantity: {scriptData.quantity}</div>
                <div className="Script__info--section Script__repeats">Repeats: {scriptData.repeats}</div>
              </div>

              <div className="Script__pbs">
                <div className="Script__title Script__title--pbs">PBS details</div>
                <div className="Script__info--section Script__pbs">{`${scriptData.pbsRx ? 'PBS prescription' : 'Non-PBS prescription'}`}</div>

                {scriptData.authRequired && <div className="Script__authority">
                  <div className="Script__info--section Script__authCode">Authority code: {scriptData.authCode}</div>
                  <div className="Script__info--section Script__authNum">Authority Rx No: {scriptData.authRxNumber}</div>
                  <div className="Script__info--section Script__indications">Clinical justification for use of item: {scriptData.justification}</div>
                </div>}
                <div className="Script__info--section Script__date">Date prescribed: {formatDate(scriptData.date)}</div>
              </div>
            </div>

            <div className="ProviderForm__btns">
              <Link onClick={resetData} className="re-prescribe btn-primary" to='/form' state={{
                newRx: true,
                rePrescribe: true,
                scriptData: scriptData,
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon arrow-icon" viewBox="0 0 512 512"><path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" fill="#ffffff" stroke="currentColor" strokeLinejoin="round" strokeWidth="10" /></svg>
                <span>Re-prescribe</span>
              </Link>

              <Button classLabel={`${addStatus ? 'fav-btn fav-btn--added' : 'fav-btn'}`} handleClick={() => {
                setShowModal(true);
              }}>
                <svg className="icon star-icon" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="23px" viewBox="0 0 24 24" width="22px" fill={`${addStatus ? '#FFBF00' : '#ffffff'}`}><g><path d="M0,0h24v24H0V0z" fill="none" /><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" /></g></svg>
                {/* <img src={starWhite} alt="" className="icon"/> */}
                <span>{`${addStatus ? 'Added!' : 'Add to favourites'}`}</span>
              </Button>
            </div>
          </>
        ) : (
          <Spinner />
        )}

        {showModal && <Modal title="Add to favourites" closeModal={() => setShowModal(false)}>
          <form>
            <FormField
              fieldType="text"
              name="customName"
              label="Prescription name"
              value={customName}
              onChange={(event) => setCustomName(event.target.value)}
              className="form-field custom-field"
              alert={{
                type: "helper",
                message: "This script will be displayed in your favourites list using this name."
              }}
              autoFocus
              describedBy='customName-alert'
            />
            <div className="Modal__buttons">
              <Button classLabel="cancel" design="secondary" handleClick={() => setShowModal(false)}>Cancel</Button>
              <Button handleClick={() => addToFavourites(scriptData)}>
                {favPending ? (
                  <Dots color="white" />
                ) : (
                  'Add'
                )}
              </Button>
            </div>
          </form>
        </Modal>}
      </StyledViewScript>
    </ContentContainer>
    <p className="bottom-text">Patient details are not saved in OptomRx. Only medication details are be available for review.</p>
  </>)
}

export default ViewScript
