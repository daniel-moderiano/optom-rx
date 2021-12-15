import ProviderForm from "../ProviderForm/ProviderForm";
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useState } from "react";
import { StyledProviders } from "./Providers.styled";
import FormField from "../FormField/FormField";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

// TODO: allow a user to set a provider as default, and be able to have this appear as the pre-selected option in the RxForm

const Providers = ({ googleLoaded }) => {
  const { user } = useAuthContext();
  // This should be called using the curernt user ID to query the collection
  const { documents: providers } = useCollection('providers', ['uid', '==', user.uid]);
  
  const [showForm, setShowForm] = useState(false);

  // Store the firebase doc ID of the provider currently set as default
  const [defaultProvider, setDefaultProvider] = useState('');

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
    // Update UI once complete. Consider loading UI element in meantime
    setDefaultProvider(provID);
    console.log('Updated firestore defaults');
  }

  const showProviderForm = () => {
    if (!showForm) {
      setShowForm((prevState) => !prevState);
    }

  };

  return (
    <StyledProviders className="Providers">
      <h2 className="Providers__title">Providers</h2>
      <p className="Providers__description">Use this section to add provider details that can be used in your prescriptions</p>
      <button className="Providers__add-btn" onClick={showProviderForm}>Add new provider</button>
      {providers && 
        <div className="Providers__list">
        {/* Render providers using map function in combination with HTML table */}
        <table className="Providers__table">
          <thead>
            <tr className="table__header-row">
                <th className="table__header">Name</th>
                <th className="table__header">Location</th>
                <th className="table__header">Prescriber Number</th>
                <th className="table__header">Set as default</th>
                <th className="table__header">Actions</th>
            </tr>
          </thead>
          <tbody>
            {providers.map(provider => (
              <tr key={provider.id} className="table__data-row">
                <td className="table__cell">{provider.fullName}</td>
                <td className="table__cell">{provider.streetAddress}</td>
                <td className="table__cell">{provider.prescriberNumber}</td>
                <td className="table__cell">
                  <FormField 
                    fieldType="checkbox" 
                    name="defaultProvider"
                    onChange={() => setAsDefault(providers, provider.id)}
                    checked={provider.id === defaultProvider}
                    className="checkbox defaultProvider"
                  /> 
                </td>
                <td className="table__cell">
                  <button className="table__action">View</button>
                  <button className="table__action">Edit</button>
                  <button className="table__action">Delete</button>
                </td>

              
              </tr>
            ))}
          </tbody>
          

        </table>
        
        </div>
      }
      
      {showForm && <ProviderForm googleLoaded={googleLoaded} standalone={true}/>}
      
    </StyledProviders>
  )
}

export default Providers;
