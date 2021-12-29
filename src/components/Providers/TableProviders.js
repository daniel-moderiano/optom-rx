// Code created using guide by Franciso Mendes @ https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd

import { useState } from "react";
import useTable from "../../hooks/useTable";
import TableFooter from "../utils/TableFooter/TableFooter";
import { Link } from "react-router-dom";
import { StyledTableProviders } from "./TableProviders.styled";
import FormField from "../FormField/FormField";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

const TableProviders = ({ data, rowsPerPage }) => {
  // Start on page 1
  const [page, setPage] = useState(1);
  // Gather the data slices for each page and the range of pages needed 
  const { dataSlice, range } = useTable(data, page, rowsPerPage);

  const { user } = useAuthContext();
  // This should be called using the curernt user ID to query the collection
  const { documents: providers } = useCollection('providers', ['uid', '==', user.uid]);

  // Update both the UI checkboxes and backend to ensure only one provider can be set default at any one time
  const setAsDefault = async (currentProviders, provID) => {
    // Cycle through all backend providers. Note this list is always going to be very small, typicall <5
    for (let i = 0; i < currentProviders.length; i++) {
      // Remove defaults
      if (currentProviders[i].id !== provID) {
        await updateDoc(doc(db, 'providers', currentProviders[i].id), {
          default: false
        })
      } else {
        // Add default
        await updateDoc(doc(db, 'providers', currentProviders[i].id), {
          default: true
        })
      }
    }
  };

  const deleteProvider = async (provID) => {
    await deleteDoc(doc(db, 'providers', provID));
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
        <thead className="tableRowHeader">
          <tr>
            <th className="tableHeader">Name</th>
            <th className="tableHeader">Location</th>
            <th className="tableHeader default-header">Set default</th>
            <th className="tableHeader actions-header">Actions</th>
          </tr>
        </thead>
        {/* Preset table data, must specify this according to the data that is being passed in */}
        <tbody>
          {dataSlice.map((provider) => (
            <tr className="tableRowItems" key={provider.id}>
              <td className="tableCell">{provider.fullName}</td>
              <td className="tableCell">{formatLocation(provider.practiceName, provider.streetAddress, provider.suburb)}</td>
              <td className="tableCell">
                <FormField 
                  fieldType="checkbox" 
                  name="defaultProvider"
                  onChange={() => setAsDefault(providers, provider.id)}
                  checked={provider.default}
                  className="checkbox defaultProvider"
                /> 
              </td >
              <td className="tableCell actions-cell">
                <Link className="table__action edit" to={`/edit/${provider.id}`}>Edit</Link>
                <button className="table__action delete" onClick={() => deleteProvider(provider.id)}>Delete</button>
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
