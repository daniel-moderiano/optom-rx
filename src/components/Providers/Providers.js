import ProviderForm from "../ProviderForm/ProviderForm";
import { useCollection } from '../../hooks/useCollection'

const Providers = () => {
  const { documents: providers } = useCollection('providers');
  console.log(providers);

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
