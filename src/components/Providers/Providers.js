import ProviderForm from "../ProviderForm/ProviderForm";
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext';

const Providers = () => {
  const { user } = useAuthContext();
  // This should be called using the curernt user ID to query the collection
  // Query should be ('providers', ['uid', '==', user.uid])
  const { documents: providers } = useCollection('providers');
  

  return (
    <div className="Providers">
      <h2 className="Providers__title">Providers</h2>
      <p className="Providers__description">Use this section to add provider details that can be used in your prescriptions</p>
      <button className="Providers__add-btn">Add new provider</button>
      {providers && 
        <div className="Providers__list">
        {/* Render providers using map function here */}
        {providers.map(provider => (
          <div className="Providers__list-item">{provider.fullName}</div>
        ))}
        </div>
      }
      
      <ProviderForm standalone={true}/>
    </div>
  )
}

export default Providers;
