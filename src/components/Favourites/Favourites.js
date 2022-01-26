import { StyledFavourites } from './Favourites.styled'
import Spinner from '../utils/Spinner/Spinner';
import { useEffect } from 'react';
import { doc, arrayRemove, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../utils/Modal/Modal';
import Button from '../utils/Button/Button'
import { useFormatting } from '../../hooks/useFormatting';
import { useUserData } from '../../hooks/useUserData';
import { useImmediateToast } from '../../hooks/useImmediateToast';
import { useConditionalToast } from '../../hooks/useConditionalToast';

const Favourites = ({ user, setToast }) => {
  const { documents: favourites, isPending, error } = useUserData(user.uid, 'favourites');
  const { formatDrug } = useFormatting();
  const { showSuccessToast, showErrorToast } = useImmediateToast();

  const [showModal, setShowModal] = useState(false);

  // Initialised here to avoid reference errors in the modal when pulling selected script data
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

  // When delete modal is open, default to cancel button when user hits enter after pressing delete, aiming avoiding accidental deletes
  const cancelOnEnter = (event) => {
    if (event.key === 'Enter') {
      const cancelBtn = document.querySelector('.cancel-btn');

      if (cancelBtn) {
        event.preventDefault();
        cancelBtn.click();
      }
    } 
  }

  // Add event listener for modal only once on initial render
  useEffect(() => {
    window.addEventListener('keydown', cancelOnEnter);

    return () => {
      window.removeEventListener('keydown', cancelOnEnter);
    }
  }, []);
 
  // Listen for fetch fail and alert user as a result
  useConditionalToast(error, setToast, 'An error occurred while loading favourites');

  // Remove favourite from firestore database
  const deleteFavourite = async (scriptToDelete) => {
    const docRef = doc(db, 'users', user.uid);

    try {
      await updateDoc(docRef, {
        favourites: arrayRemove(scriptToDelete)
      });
      setShowModal(false);
      showSuccessToast(setToast, 'Deleted script');
    } catch (err) {
      setShowModal(false);
      showErrorToast(setToast, 'An error occurred while deleting favourites');
    } 
  }

  return (
    <StyledFavourites>
      <h2 className="Favourites__title">Favourites</h2>
        {isPending && <Spinner />}

        {error && (
          <ul className='fav-list fav-list--none'>
            <div className="list-header">Favourites</div>
              <li className="fav-item fav-item--none">
                No favourites added yet
              </li>
          </ul>   
        )}

        {favourites && <>
          {favourites.length > 0 ? (
            <ul className='fav-list'>
              <div className="list-header">Favourites</div>
              {favourites.map((fav) => (
                <li key={fav.scriptID} className="fav-item">
                  <div className="item-name">
                    <span className="cell-title">Script name</span>
                    <span className="item-content">{(fav.customName === "") ? formatDrug(fav) : fav.customName}</span>
                  </div>
                  <div className="actions">
                    <span className="cell-title">Actions</span>
                    <div className="btns">
                      <Link className="btn-primary prescribe" to='/form' state={{ 
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
                  </div>
                </li>
              ))}
            </ul>   
          ) : (
            <ul className='fav-list fav-list--none'>
              <div className="list-header">Favourites</div>
              <li className="fav-item fav-item--none">No favourites added yet</li>
            </ul>   
          )}
        </>}  
    
      {showModal && (<Modal title="Delete favourite" closeModal={() => setShowModal(false)} type="delete" errorMessage="This will permanently delete the following favourite.">
        <div className="favourite-display">
          <div className="favourite-label">Selected script</div>
          <div className="favourite-summary">{`${selectedScript.customName === "" ? formatDrug(selectedScript) : selectedScript.customName}`}</div>
        </div>
        <div className="Modal__buttons">
          <Button classLabel="cancel" design="secondary" handleClick={() => setShowModal(false)}>Cancel</Button>
          <Button design="delete" handleClick={() => deleteFavourite(selectedScript)}>Delete</Button>
        </div>
      </Modal>)}
    </StyledFavourites>
  )
}

export default Favourites;
