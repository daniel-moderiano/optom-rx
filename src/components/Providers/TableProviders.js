// Code created using guide by Franciso Mendes @ https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd

import { useEffect, useState } from "react";
import useTable from "../../hooks/useTable";
import TableFooter from "../utils/TableFooter/TableFooter";
import { Link } from "react-router-dom";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Button from '../utils/Button/Button'
import Modal from "../utils/Modal/Modal";
import { useFormatting } from "../../hooks/useFormatting";
import { useImmediateToast } from '../../hooks/useImmediateToast';

const TableProviders = ({ data, rowsPerPage, setToast, user }) => {
  // Start on page 1
  const [page, setPage] = useState(1);
  // Gather the data slices for each page and the range of pages needed 
  const { dataSlice, range } = useTable(data, page, rowsPerPage);
  const { formatLocation } = useFormatting();
  const { showSuccessToast, showErrorToast } = useImmediateToast();

  const [showModal, setShowModal] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState({
    fullName: '',
    location: '',
    id: '',
  });

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
      showSuccessToast(setToast, 'Prescriber defaults updated');
    } catch (error) {
      setIsPending(false);
      showErrorToast(setToast, 'An error occurred while updating defaults');
    }
  };

  const deleteProvider = async (provID) => {
    try {
      await deleteDoc(doc(db, 'providers', provID));
      setShowModal(false);
      showSuccessToast(setToast, 'Prescriber has been removed');

    } catch (error) {
      setShowModal(false);
      showErrorToast(setToast, 'An error occurred while deleting providers defaults');
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

  return (<>
      <table className="table data-table" aria-describedby="Providers__description">
        <thead className="tableRowHeader">
          <tr role="row">
            <th role="columnheader" className="tableHeader" scope="col">Name</th>
            <th role="columnheader"className="tableHeader" scope="col">Location</th>
            <th role="columnheader" className="tableHeader actions-header" scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {dataSlice.map((provider) => (
            <tr role="row" className="tableRowItems" key={provider.id}>
              <td role="cell" data-title="Name" className="tableCell">{provider.fullName}</td>
              <td role="cell" data-title="Location" className="tableCell">{formatLocation(provider.practiceName, provider.streetAddress, provider.suburb)}</td>

              <td role="cell" data-title="Actions" className="tableCell actions-cell">
                <div className="btns">
                  <div className="non-default">
                    <Link 
                      className="table__action edit" 
                      to={`/edit/${provider.id}`}
                      state={ {...provider} }
                    >Edit</Link>
                    <button className="table__action delete" onClick={() => {
                      setShowModal(true);
                      setSelectedProvider({
                        fullName: provider.fullName,
                        location: formatLocation(provider.practiceName, provider.streetAddress, provider.suburb),
                        id: provider.id,
                      })
                    }}>Delete</button>
                  </div>
                
                  <button className={`${(provider.default && !isPending) ? 'table__action default--selected' : 'table__action default'}`} onClick={() => setAsDefault(data, provider.id)}>
                    {isPending ? (
                      'Updating...'
                      ) : (
                      `${provider.default ? 'Remove default' : 'Make default'}`
                    )}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <TableFooter pages={range} slice={dataSlice} setPage={setPage} page={page} />

      {showModal && <Modal title="Delete provider" closeModal={() => setShowModal(false)} type="delete" errorMessage="This will permanently delete the following provider details">
        <div className="provider-display">
          <div className="provider-label">Selected provider</div>
          <div className="provider-summary">{`${selectedProvider.fullName} (${selectedProvider.location})`}</div>
        </div>
        <div className="Modal__buttons">
          <Button classLabel="cancel" design="secondary" handleClick={() => setShowModal(false)}>Cancel</Button>
          <Button design="delete" handleClick={() => deleteProvider(selectedProvider.id)}>Delete</Button>
        </div>
      </Modal>}
    </>
  )};

export default TableProviders;
