// Code created using guide by Franciso Mendes @ https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd

import { useEffect, useState } from "react";
import useTable from "../../hooks/useTable";
import TableFooter from "../utils/TableFooter/TableFooter";
import { Link } from "react-router-dom";
import { StyledTableProviders } from "./TableProviders.styled";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

import Modal from "../utils/Modal/Modal";

// ! The table container and element must be defined outside this component to allow tbody conditional rendering. This will end up being a tbody only type component

const TableProviders = ({ data, rowsPerPage, setToast }) => {
  // Start on page 1
  const [page, setPage] = useState(1);
  // Gather the data slices for each page and the range of pages needed 
  const { dataSlice, range } = useTable(data, page, rowsPerPage);

  const [showModal, setShowModal] = useState(false);
  
  const [selectedProvider, setSelectedProvider] = useState({
    fullName: '',
    location: '',
    id: '',
  });

  const { user } = useAuthContext();
  // This should be called using the curernt user ID to query the collection
  const { documents: providers } = useCollection('providers', ['uid', '==', user.uid]);

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);


  // Update both the UI checkboxes and backend to ensure only one provider can be set default at any one time
  const setAsDefault = async (currentProviders, provID) => {
    let prevDefault = null;

    // Begin pending state
    setIsPending(true);

    try {
      // Remove the current default and record which provider this was
      for (let i = 0; i < currentProviders.length; i++) {
        // Identify the current default provider
        if (currentProviders[i].default) {
          prevDefault = currentProviders[i].id;
          // In any case, remove the current default user
          await updateDoc(doc(db, 'providers', currentProviders[i].id), {
            default: false
          }); 
          break;
        }       
      }

      for (let i = 0; i < currentProviders.length; i++) {
        // When reaching the provider that the user click on
        if (currentProviders[i].id === provID) {
          // Check that this is not the previous default
          if (provID !== prevDefault) {
            // And update defaults if so, ending the loop here
            await updateDoc(doc(db, 'providers', currentProviders[i].id), {
              default: true
            }); 
  
            break;
            
          } else {
            // Do not reset any defaults and end the loop here
            break;
          }
        } 
      }

      setIsPending(false);

      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'Provider defaults updated'
      }));
    } catch (error) {
      setIsPending(false);
      setError(error);

      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'An error occurred while updating defaults'
      }));
    }
     
  };

  // Delete providers using the provider ID (documetn ID in firestore)
  // TODO: modal confirming that provider should be deleted
  const deleteProvider = async (provID) => {

    try {
      await deleteDoc(doc(db, 'providers', provID));


      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'success',
        message: 'Provider has been removed'
      }));

      
    } catch (error) {

      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'An error occurred while deleting providers'
      }));
    } finally {
      setShowModal(false);
    }
    
  };

  const formatLocation = (practice, streetAddress, suburb) => {
    if (practice === "") {
      return `${streetAddress}, ${suburb}`;
    } else {
      return `${practice}, ${suburb}`;
    }
  };

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

  return (
    <>
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
            This will permanently delete the following provider details
          </div>
        </div>
        <div className="provider-display">
          <div className="provider-label">Selected provider</div>
          <div className="provider-summary">{`${selectedProvider.fullName} (${selectedProvider.location})`}</div>
        </div>
        <div className="Modal__buttons">
          <button className="cancel-btn Modal__btn" onClick={() => setShowModal(false)}>Cancel</button>
          <button className="delete-btn Modal__btn" onClick={() => {
            deleteProvider(selectedProvider.id);
          }}>Delete</button>
        </div>
      </Modal>}

      <StyledTableProviders className="table">
          <thead className="tableRowHeader">
            <tr>
              <th className="tableHeader">Name</th>
              <th className="tableHeader">Location</th>
              <th className="tableHeader actions-header">Actions</th>
            </tr>
          </thead>
          <tbody>

            {dataSlice.map((provider) => (
              <tr className="tableRowItems" key={provider.id}>
                <td className="tableCell">{provider.fullName}</td>
                <td className="tableCell">{formatLocation(provider.practiceName, provider.streetAddress, provider.suburb)}</td>

                <td className="tableCell actions-cell">
                  
                  <Link className="table__action edit" to={`/edit/${provider.id}`}>Edit</Link>
                  <button className="table__action delete" onClick={() => {
                    setShowModal(true);
                    setSelectedProvider({
                      fullName: provider.fullName,
                      location: formatLocation(provider.practiceName, provider.streetAddress, provider.suburb),
                      id: provider.id,
                    })
                  }}>Delete</button>
                  <button className={`${(provider.default && !isPending) ? 'table__action default--selected' : 'table__action default'}`} onClick={(event) => setAsDefault(providers, provider.id)}>
                    {isPending ? (
                      'Updating...'
                      ) : (
                      `${provider.default ? 'Remove default' : 'Make default'}`
                    )}
                  </button>
                </td>
              </tr>
            ))}
         
          
          </tbody>
          
      </StyledTableProviders>
      <TableFooter pages={range} slice={dataSlice} setPage={setPage} page={page} />
    </>
  )};

export default TableProviders;
