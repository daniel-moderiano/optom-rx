import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledFavourites } from './Favourites.styled'
import Spinner from '../utils/Spinner/Spinner';
import { useEffect } from 'react';
import { useFavourites } from '../../hooks/useFavourites';
import { doc, arrayRemove, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../utils/Modal/Modal';

const Favourites = ({ setToast }) => {
  const { user } = useAuthContext();
  // const { favourites, isPending, error } = useFavourites(user.uid);
  // const { documents: favourites, isPending, error } = useCollection('providers', ['uid', '==', user.uid]);
  const { documents: favourites, isPending, error } = useFavourites(user.uid);

  

  const [showModal, setShowModal] = useState(false);
  
  const [selectedScript, setSelectedScript] = useState({
    "maxQuantity": "",
    "authRequired": false,
    "repeats": "",
    "brandName": "",
    "justification": "",
    "pbsRx": true,
    "brandOnly": false,
    "itemCode": "",
    "scriptID": "",
    "indications": "",
    "dosage": "",
    "verified": false,
    "age": "",
    "authRxNumber": "",
    "prevAuth": false,
    "quantity": "",
    "date": "",
    "compounded": false,
    "includeBrand": false,
    "favourite": false,
    "substitutePermitted": true,
    "customName": "",
    "activeIngredient": "",
    "maxRepeats": "",
    "authCode": ""
  });

 
  // Default to cancel button when user hits enter after pressing delete, aiming avoiding accidental deletes
  const cancelOnEnter = (event) => {
    if (event.keyCode === 13) {
      const cancelBtn = document.querySelector('.cancel-btn');

      if (cancelBtn) {
        event.preventDefault();
        cancelBtn.click();
      }
    } 
  }

  // Add event listener only once on initial render
  useEffect(() => {
    window.addEventListener('keydown', cancelOnEnter);

    return () => {
      window.removeEventListener('keydown', cancelOnEnter);
    }
  }, [])
 
  // This effect will fire an error alert if the fetch fails. 
  useEffect(() => {
    if (error) {
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'An error occurred while loading favourites'
      }));
    }

  }, [error, setToast])

  const deleteFavourite = async (scriptToDelete) => {

    const docRef = doc(db, 'users', user.uid);

    try {
      await updateDoc(docRef, {
        favourites: arrayRemove(scriptToDelete)
      });

     

      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'Deleted script'
      }));

    } catch (err) {

      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'An error occurred while deleting favourites'
      }));
    } finally {
      setShowModal(false)
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

  return (<>
     
    <StyledFavourites className="Scripts">
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
            This will permanently delete the following favourite
          </div>
        </div>
        <div className="provider-display">
          <div className="provider-label">Selected script</div>
          <div className="provider-summary">{`${selectedScript.customName === "" ? formatDrug(selectedScript) : selectedScript.customName}`}</div>
        </div>
        <div className="Modal__buttons">
          <button className="cancel-btn Modal__btn" onClick={() => setShowModal(false)}>Cancel</button>
          <button className="delete-btn Modal__btn" onClick={() => {
            deleteFavourite(selectedScript);
          }}>Delete</button>
        </div>
      </Modal>}
      <h2 className="Favourites__title">Favourite scripts</h2>
      {/* <p className="Scripts__description">Scripts you have saved to your favourites will appear here, and can be prescribed in one simple click</p> */}

      
      <div className="Scripts__container">
        {isPending && <Spinner />}

        {error && <div className='list-container'>
          <ul className='fav-list'>
            <div className="list-header">Prescriptions</div>
              <li className="fav-item fav-item--none">
                No favourites added yet
              </li>
          </ul>   
        </div>}

  
        
      </div>
      {favourites && <div className='list-container'>
          {favourites.length > 0 ? (<ul className='fav-list'>
            <div className="list-header">Prescriptions</div>
            {favourites.map((fav) => (
              <li key={fav.scriptID} className="fav-item">
              <div className="item-name">{(fav.customName === "") ? formatDrug(fav) : fav.customName}</div>
              
              <div className="btns">
                <Link className="" to='/form' state={{ 
                  newRx: true,
                  rePrescribe: true,
                  scriptData: fav,
                }}>Prescribe</Link>
                <button className='delete-btn' onClick={() => {
                    setShowModal(true);
                    setSelectedScript({
                      ...fav,
                    })}}>Delete</button>
              </div>
              
              </li>
            ))}
          </ul>   
          ) : (
            <ul className='fav-list'>
            <div className="list-header">Prescriptions</div>
              <li className="fav-item fav-item--none">No favourites added yet
              </li>
          </ul>   
          )}
        </div>}  
      
    </StyledFavourites>
  </>)
}

export default Favourites;
