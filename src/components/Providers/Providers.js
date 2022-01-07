
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledProviders } from "./Providers.styled";
import { Link } from "react-router-dom";
import TableProviders from './TableProviders';
import Spinner from '../utils/Spinner/Spinner';
import { useEffect } from 'react';
import Modal from '../utils/Modal/Modal';
import { useState } from 'react';

const Providers = ({ setToast }) => {
  const { user } = useAuthContext();
  // This should be called using the curernt user ID to query the collection
  const { documents: providers, isPending, error } = useCollection('providers', ['uid', '==', user.uid]);

  const [showModal, setShowModal] = useState(true);


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

  return (
    <StyledProviders className="Providers">
      {showModal && <Modal title="Delete provider">
        <div className="error-container">
          <div className="error-icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--neutral" viewBox="0 0 512 512" width="24px">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="#D12323" stroke="#D12323" strokeMiterlimit="10" strokeWidth="32"/>
              <path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="#D12323" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="#ffffff"/>
            </svg>
          </div>
          <div className="error-text">
            This will permanently delete the following provider details
          </div>
        </div>
        <div className="provider-display">
          <div className="provider-label">Selected provider</div>
          <div className="provider-summary">Daniel Moderiano (OPSM Tea Tree Plaza, Modbury)</div>
        </div>
        <div className="Modal__buttons">
          <button className="cancel-btn Modal__btn">Cancel</button>
          <button className="delete-btn Modal__btn">Delete</button>
        </div>
      </Modal>}
      <h2 className="Providers__title">Providers</h2>
      <p className="Providers__description">Use this section to add provider details that can be used in your prescriptions</p>
  
      <Link className="Providers__add-btn" to={`/add-provider`}>Add new provider</Link> 

      <div className="Providers__container">
        {isPending && <Spinner />}

        {error && <div>{error}</div>}

        {providers && <div className='table__container'>
          <div className="Providers__list">
            {providers.length > 0 ? (
              <TableProviders data={providers} rowsPerPage={10} setToast={setToast} showModal={setShowModal}/>
            ) : (
              <div className='Providers__none'>
                <h4 className="no-providers-title">No providers added</h4>
                <p className="no-providers-text">Providers list requires an internet connection to update and display</p>
              </div>
            )}
          </div>
        </div>}    
      </div>
    </StyledProviders>
  )
}

export default Providers;
