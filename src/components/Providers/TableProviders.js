// Code created using guide by Franciso Mendes @ https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd

import { useState } from "react";
import useTable from "../../hooks/useTable";
import TableFooter from "../utils/TableFooter/TableFooter";
import { Link } from "react-router-dom";
import { StyledTableProviders } from "./TableProviders.styled";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import Spinner from "../utils/Spinner/Spinner";

const TableProviders = ({ data, rowsPerPage, setToast }) => {
  // Start on page 1
  const [page, setPage] = useState(1);
  // Gather the data slices for each page and the range of pages needed 
  const { dataSlice, range } = useTable(data, page, rowsPerPage);

 

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
        message: 'Unable to complete request'
      }));
    }
 

    
  };

  // Delete providers using the provider ID (documetn ID in firestore)
  // TODO: modal confirming that provider should be deleted
  const deleteProvider = async (provID) => {
    await deleteDoc(doc(db, 'providers', provID));

    setToast((prevData) => ({
      ...prevData,
      visible: true,
      type: 'success',
      message: 'Provider has been removed'
    }));
  };

  const formatLocation = (practice, streetAddress, suburb) => {
    if (practice === "") {
      return `${streetAddress}, ${suburb}`;
    } else {
      return `${practice}, ${suburb}`;
    }
  };

  return (
    <>
      <StyledTableProviders className="table">
        {/* Preset table header. Note this reduces the re-usability of the Table component, but not the TableFooter */}
        {isPending && <div className="overlay">
          <Spinner />
        </div>}
        
        <thead className="tableRowHeader">
          <tr>
            <th className="tableHeader">Name</th>
            <th className="tableHeader">Location</th>
            {/* <th className="tableHeader default-header">Set default</th> */}
            <th className="tableHeader actions-header">Actions</th>
          </tr>
        </thead>
        {/* Preset table data, must specify this according to the data that is being passed in */}
        <tbody>
          
          {dataSlice.map((provider) => (
            <tr className="tableRowItems" key={provider.id}>
              <td className="tableCell">{provider.fullName}</td>
              <td className="tableCell">{formatLocation(provider.practiceName, provider.streetAddress, provider.suburb)}</td>
              {/* <td className="tableCell">
                <FormField 
                  fieldType="checkbox" 
                  name="defaultProvider"
                  onChange={() => setAsDefault(providers, provider.id)}
                  checked={provider.default}
                  className="checkbox defaultProvider"
                /> 
              </td > */}
              <td className="tableCell actions-cell">
                
                <Link className="table__action edit" to={`/edit/${provider.id}`}>Edit</Link>
                <button className="table__action delete" onClick={() => deleteProvider(provider.id)}>Delete</button>
                <button className={`${provider.default ? 'table__action default--selected' : 'table__action default'}`} onClick={() => setAsDefault(providers, provider.id)}>{`${provider.default ? 'Remove default' : 'Make default'}`}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTableProviders>
      <TableFooter pages={range} slice={dataSlice} setPage={setPage} page={page} />
    </>
  );
};

export default TableProviders;
