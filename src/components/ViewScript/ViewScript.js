import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { StyledViewScript } from "./ViewScript.styled.";
import Spinner from '../utils/Spinner/Spinner'
import { useAuthContext } from "../../hooks/useAuthContext";
import Modal from "../utils/Modal/Modal";
import FormField from "../FormField/FormField";
import Dots from "../utils/Dots/Dots";
import arrow from '../../assets/arrow.svg';
import starWhite from '../../assets/star-white.svg';
import starYellow from '../../assets/star-yellow.svg';

import './ViewScript.css'

const ViewScript = ({ setToast, resetData, setPage }) => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [scriptData, setScriptData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [favPending, setFavPending] = useState(false);
  const [favError, setFavError] = useState(null);
  
  const [showModal, setShowModal] = useState(false);
  const [customName, setCustomName] = useState('');

  const [addStatus, setAddStatus] = useState(false);

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage(null);
  }, [setPage])

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
        message: 'An error occurred while loading the script'
      }));
    }

    if (favError) {
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'An error occurred while adding favourites'
      }));
    }
  }, [error, setToast, favError]);



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
        setAddStatus(true);
  
        setToast((prevData) => ({
          ...prevData,
          visible: true,
          type: 'success',
          message: 'Prescription saved to favourites'
        }));



  
      } catch (error) {
        setFavError(error);
        setFavPending(false);
        
        setToast((prevData) => ({
          ...prevData,
          visible: true,
          type: 'error',
          message: 'An error occurred while adding favourites'
        }));
      } finally {
        setShowModal(false);
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

  return (<>
    <StyledViewScript>
      {showModal && <Modal title="Add to favourites" closeModal={() => setShowModal(false)}>
        <form>
        <FormField 
            fieldType="text" 
            name="customName"
            label="Prescription name" 
            value={customName} 
            onChange={(event) => setCustomName(event.target.value)} 
            className="form-field custom-field"
            autoFocus
          />
        <div className="provider-display">
          <div className="provider-label">This script will be displayed in your favourites list using the name above</div>
        </div>
        <div className="Modal__buttons">
          <button type="button" className="cancel-btn Modal__btn" onClick={() => setShowModal(false)}>Cancel</button>
          <button type="submit" className="delete-btn Modal__btn" onClick={(event) => {event.preventDefault(); addToFavourites(scriptData)}}>
            {favPending ? (
              <Dots color="white" />
              ) : (
              'Add'
            )} 
          </button>
        </div>
        </form>
      </Modal>}
      
      <div className="header">
        <h2 className="EditProvider__title">Script #{id}</h2>

        
      </div>
      
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
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 512 512"><path d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z" fill="#ffffff" stroke="currentColor" stroke-linejoin="round" stroke-width="10"/></svg>
              {/* <img src={arrow} alt="" className="icon"/> */}
              <span>Re-prescribe</span>
              </Link>
            {/* <Link to="/scripts" className="cancel-btn ProviderForm__btn">Go back</Link> */}
            
            <button className={`${addStatus ? 'fav-btn fav-btn--added' : 'fav-btn'}`} onClick={() => {
              setShowModal(true);
            }}>
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="22px" fill={`${addStatus ? '#FFBF00' : '#ffffff'}`}><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
              {/* <img src={starWhite} alt="" className="icon"/> */}
              <span>{`${addStatus ? 'Added!' : 'Add to favourites'}`}</span>
            </button>
 
            </div>
            </>
          }
        </div>
        
       
        
        

      </div>
      
    </StyledViewScript>
    <p className="bottom-text">Patient details are not saved in OptomRx. Only medication details are be available for review.</p>
    </>
  )
}

export default ViewScript
