
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';
import { StyledProviders } from "./Providers.styled";
import { Link } from "react-router-dom";
import TableProviders from './TableProviders';

const Providers = ({ setToast }) => {
  const { user } = useAuthContext();
  // This should be called using the curernt user ID to query the collection
  const { documents: providers } = useCollection('providers', ['uid', '==', user.uid]); 

  return (
    <StyledProviders className="Providers">
      <h2 className="Providers__title">Providers</h2>
      <p className="Providers__description">Use this section to add provider details that can be used in your prescriptions</p>
  
      <Link className="Providers__add-btn" to={`/add-provider`}>Add new provider</Link> 
      {providers && 
        <div className="Providers__list">
          {providers.length > 0 ? (
            <TableProviders data={providers} rowsPerPage={10} setToast={setToast}/>
          ) : (
            <div className='Providers__none'>No providers added yet</div>
          )}
        </div>
      }      
      
    </StyledProviders>
  )
}

export default Providers;
