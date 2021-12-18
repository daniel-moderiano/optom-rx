import ProviderForm from "../ProviderForm/ProviderForm";
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useState } from "react";
import { StyledProviders } from "./Providers.styled";
import FormField from "../FormField/FormField";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";

const Providers = ({ googleLoaded, setToast }) => {
  const { user } = useAuthContext();
  // This should be called using the curernt user ID to query the collection
  const { documents: providers } = useCollection('providers', ['uid', '==', user.uid]);
  
  const [showForm, setShowForm] = useState(false);

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
    console.log('Deleted');
  };

  const showProviderForm = () => {
    if (!showForm) {
      setShowForm((prevState) => !prevState);
    }
  };

  const hideProviderForm = () => {
    if (showForm) {
      setShowForm((prevState) => !prevState);
    }
  };

  const formatLocation = (practice, streetAddress, suburb) => {
    if (practice === "") {
      return `${streetAddress}, ${suburb}`;
    } else {
      return `${practice}, ${suburb}`;
    }
  };

  return (
    <StyledProviders className="Providers">
      <h2 className="Providers__title">Providers</h2>
      <p className="Providers__description">Use this section to add provider details that can be used in your prescriptions</p>

      <button className="Providers__add-btn" onClick={showProviderForm}>Add new provider</button>
      {showForm && <ProviderForm googleLoaded={googleLoaded} standalone={true} handleCancel={hideProviderForm} setToast={setToast}/>}
      
      {providers && 
        <div className="Providers__list">
        {/* Render providers using map function in combination with HTML table */}
        <table className="Providers__table">
          <thead>
            <tr className="table__header-row">
                <th className="table__header">Name</th>
                <th className="table__header">Location</th>
                {/* <th className="table__header">Prescriber Number</th> */}
                <th className="table__header default-header">Set as default</th>
                <th className="table__header actions-header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {providers.map(provider => (
              <tr key={provider.id} className="table__data-row">
                <td className="table__cell">{provider.fullName}</td>
                <td className="table__cell">{formatLocation(provider.practiceName, provider.streetAddress, provider.suburb)}</td>
                <td className="table__cell default-cell">
                  <FormField 
                    fieldType="checkbox" 
                    name="defaultProvider"
                    onChange={() => setAsDefault(providers, provider.id)}
                    checked={provider.default}
                    className="checkbox defaultProvider"
                  /> 
                </td>
                <td className="table__cell actions-cell" >
                  <Link className="table__action edit" to={`/edit/${provider.id}`}>Edit</Link>
                  <button className="table__action delete" onClick={() => deleteProvider(provider.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      }
    </StyledProviders>
  )
}

export default Providers;
