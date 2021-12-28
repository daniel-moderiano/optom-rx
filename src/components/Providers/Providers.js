
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledProviders } from "./Providers.styled";
import FormField from "../FormField/FormField";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import TableProviders from './TableProviders';

const Providers = () => {
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

  

  return (
    <StyledProviders className="Providers">
      <h2 className="Providers__title">Providers</h2>
      <p className="Providers__description">Use this section to add provider details that can be used in your prescriptions</p>
  
      <Link className="Providers__add-btn" to={`/add-provider`}>Add new provider</Link> 
      {providers && 
        <div className="Providers__list">
          {providers.length > 0 ? (
            <TableProviders data={providers} rowsPerPage={5} />
          ) : (
            <div className='Providers__none'>No providers added yet</div>
          )}
        </div>
      }      
      
    </StyledProviders>
  )
}

export default Providers;
