import ProviderForm from "../ProviderForm/ProviderForm";
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useState } from "react";
import { StyledProviders } from "./Providers.styled";

// TODO: allow a user to set a provider as default, and be able to have this appear as the pre-selected option in the RxForm

const Providers = ({ googleLoaded }) => {
  const { user } = useAuthContext();
  // This should be called using the curernt user ID to query the collection
  const { documents: providers } = useCollection('providers', ['uid', '==', user.uid]);
  
  const [showForm, setShowForm] = useState(false);

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
          <tr className="table__header-row">
            <th className="table__header">Name</th>
            <th className="table__header">Location</th>
            <th className="table__header">Prescriber Number</th>
            <th className="table__header">Set default?</th>
          </tr>
          {providers.map(provider => (
            <tr key={provider.id} className="table__data-row">
              <td className="table__cell">{provider.fullName}</td>
              <td className="table__cell">{provider.streetAddress}</td>
              <td className="table__cell">{provider.prescriberNumber}</td>
              <td className="table__cell">Checkbox</td>
            </tr>
          ))}

        </table>
        
        </div>
      }
      
      {showForm && <ProviderForm googleLoaded={googleLoaded} standalone={true}/>}
      
    </StyledProviders>
  )
}

export default Providers;
