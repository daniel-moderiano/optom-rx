import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { StyledViewScript } from "./ViewScript.styled.";
import Spinner from '../utils/Spinner/Spinner'
import { useAuthContext } from "../../hooks/useAuthContext";
import Modal from "../utils/Modal/Modal";

const ViewScript = ({ setToast, resetData }) => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [scriptData, setScriptData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [favPending, setFavPending] = useState(false);
  const [favError, setFavError] = useState(null);
  
  const [showModal, setShowModal] = useState(false);
  
  const [selectedFav, setSelectedFav] = useState({});
  const [customName, setCustomName] = useState('')

  // Fetch the script data using the supplied ID
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const docSnap = await getDoc(doc(db, 'scripts', id));
        setScriptData(docSnap.data());
        setIsPending(false);
      } catch (error) {
        setIsPending(false);
        setError(error);
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  // This effect will fire an error alert if the fetch fails. 
  useEffect(() => {
    if (error) {
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'Failed to complete requests'
      }));
    }
  }, [error, setToast]);



  const addToFavourites = async (scriptToAdd) => {
    // Ensure the scriptData is not null
    if (scriptToAdd) {
      setFavPending(true);
      setFavError(null);
      try {
        // Add script data to the current user's favourite scripts. This operation can be called multiple times as arrayUnion will not add elements already present BUT the UI design should encourage multiple calls
        await updateDoc(doc(db, 'users', user.uid), {
          favourites: arrayUnion({
            ...scriptToAdd,
            customName: customName,
          })
        });
  
        setFavPending(false);
        setShowModal(false);
  
        setToast((prevData) => ({
          ...prevData,
          visible: true,
          type: 'success',
          message: 'Prescription saved to favourites'
        }));


  
      } catch (error) {
        setFavError(error);
        setFavPending(false);
        setShowModal(false);
        setToast((prevData) => ({
          ...prevData,
          visible: true,
          type: 'error',
          message: 'There was a problem'
        }));
      }
    }
  }


  
  // Create a more UI friendly summary of drug name +/- brand
  const formatDrug = (script) => {
    const capitalised = script.activeIngredient[0].toUpperCase() + script.activeIngredient.substring(1);
    // Brand name only
    if (script.brandOnly) {
      if (!capitalised.includes('eye')) {
        if (capitalised.includes('spray')) {
          return `${script.brandName} ${capitalised.substr(capitalised.indexOf('spray'), 5)}`;
        } else {
          return script.brandName;
        }
      } else {
        return `${script.brandName} ${capitalised.substr(capitalised.indexOf('eye'))}`;
      }
    }    
    // Brand name NOT to be included
    if (!script.includeBrand) {
      return capitalised;
    }
    // Brand name included in addition to active ingredient
    if (!capitalised.includes('eye')) {
      if (capitalised.includes('spray')) {
        return `${capitalised.replace('spray', `(${script.brandName}) spray`)}`;
      } else {
        return `${capitalised.replace(',', ` (${script.brandName}),`)}`;
      }
    } else {
      return `${capitalised.replace('eye', `(${script.brandName}) eye`)}`;
    }
  };

  const formatDate = (date) => {
    return `${date.substring(8)}/${date.substring(5, 7)}/${date.substring(0, 4)}`;
  };

  return (
    <StyledViewScript>
      {showModal && <Modal title="Delete provider" closeModal={() => setShowModal(false)}>
        <div className="error-container">
          <div className="error-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--neutral" viewBox="0 0 512 512" width="24px">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="#D12323" stroke="#D12323" strokeMiterlimit="10" strokeWidth="32"/>
              <path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="#D12323" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="#ffffff"/>
            </svg>
          </div>
          <div className="error-text">
            Select a name to list this script by in your favourites screen
          </div>
        </div>
        {/* <div className="provider-display">
          <div className="provider-label">Selected script</div>
          <div className="provider-summary">{`${selectedProvider.fullName} (${selectedProvider.location})`}</div>
        </div> */}
        <div className="Modal__buttons">
          <button className="cancel-btn Modal__btn" onClick={() => setShowModal(false)}>Cancel</button>
          <button className="delete-btn Modal__btn" onClick={() => addToFavourites(scriptData)}>Add</button>
        </div>
      </Modal>}

      <h2 className="EditProvider__title">Script #{id}</h2>
      <p className="EditProvider__description">Patient details are not saved in OptomRx. Only medication details will be available for review.</p>
      <div className="container">
        <div className="script__container">
          {isPending && <Spinner />}

          {error && <div className="error">{error.message}</div>}

          {scriptData && <>
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
            <Link onClick={resetData} className="submit-btn ProviderForm__btn" to='/form' state={{ 
              newRx: true,
              rePrescribe: true,
              scriptData: scriptData,
            }}>Re-prescribe</Link>
            <Link to="/scripts" className="cancel-btn ProviderForm__btn">Go back</Link>
            <button className="ProviderForm__btn" onClick={() => {
              setShowModal(true);
            }}>Add to favourites</button>
            
            </div>
            </>
          }
        </div>
       
        
        

      </div>
      
    </StyledViewScript>
  )
}

export default ViewScript
