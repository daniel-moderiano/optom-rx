import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledFavourites } from './Favourites.styled'
import Table from './Table';
import Spinner from '../utils/Spinner/Spinner';
import { useEffect } from 'react';
import { useFavourites } from '../../hooks/useFavourites';
import { doc, arrayRemove, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Favourites = ({ setToast }) => {
  const { user } = useAuthContext();
  // const { favourites, isPending, error } = useFavourites(user.uid);
  // const { documents: favourites, isPending, error } = useCollection('providers', ['uid', '==', user.uid]);
  const { documents: favourites, isPending, error } = useFavourites(user.uid);
  const [deletePending, setDeletePending] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

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
  }, [error, setToast])

  const deleteFavourite = async (scriptToDelete) => {
    setDeletePending(true);
    setDeleteError(null);
    const docRef = doc(db, 'users', user.uid);

    try {
      await updateDoc(docRef, {
        favourites: arrayRemove(scriptToDelete)
      });

      setDeletePending(true);
      setDeleteError(null);

      // TODO: delete confirmation modal

      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'Deleted script'
      }));

    } catch (err) {
      console.log(err);
      setDeletePending(false);
      setDeleteError(err);

      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'Failed to complete requests'
      }));
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

  return (
    <StyledFavourites className="Scripts">
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
                <button className='delete-btn' onClick={() => deleteFavourite(fav)}>Delete</button>
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
  )
}

export default Favourites;
