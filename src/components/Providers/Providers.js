import ProviderForm from "../ProviderForm/ProviderForm";

const Providers = () => {
  return (
    <div className="Providers">
      <h2 className="Providers__title">Providers</h2>
      <p className="Providers__description">Use this section to add provider details that can be used in your prescriptions</p>
      <button className="Providers__add-btn">Add new provider</button>
      <ProviderForm existingData={{}} standalone={false}/>
    </div>
  )
}

export default Providers;
