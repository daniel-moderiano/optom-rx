import Fieldset from "../utils/Fieldset/Fieldset";
import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { useState } from "react";

// ! Legal requirements include the prescriber's name, address, and contact details, and prescriber number

const ProviderForm = ({ existingData, googleLoaded, handleSubmit, standalone }) => {
  const [providerData, setProviderData] = useState({
    prefix: false,
    fullName: '',
    qualifications: '',
    practiceName: '',
    streetAddress: '',
    subpremise: '',
    suburb: '',
    postcode: '',
    state: '',
    phoneNumber: '',
    prescriberNumber: '',
    ...existingData.providerData,
  });

  const [providerAlerts, setProviderAlerts] = useState({
    fullName: {},
    streetAddress: {},
    suburb: {},
    postcode: {},
    state: {},
    phoneNumber: {},
    prescriberNumber: {},
  });

  // Pass a set function to handle change, rather than hardcoding with a certain setState function
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProviderData((prevData) => ({
      ...prevData, 
      [name]: value 
    }));
  };

  // Used to toggle any boolean data in the data states
  const toggleBooleanState = (data, boolToChange) => {
    let newState = true;
    if (data[boolToChange]) {
      newState = false;
    }
    setProviderData((prevData) => ({
      ...prevData,
      [boolToChange]: newState,
    }));
  };
  

  return (
    <Fieldset className="ProviderForm" legend="Provider Details">

      <FormField 
        fieldType="text" 
        name="fullName"
        label="Full name" 
        value={providerData.fullName} 
        onChange={(event) => handleChange(event)} 
        alert={providerAlerts.fullName}
      />    

      <FormField 
        fieldType="checkbox" 
        name="prefix"
        label="Include 'Dr' in provider name" 
        onChange={() => toggleBooleanState(providerData, 'prefix')}
        checked={providerData.prefix}
        className="checkbox prefix-field"
      />  

      <FormField 
        fieldType="text" 
        name="qualifications"
        label="Abbreviated qualifications (optional)" 
        placeholder="e.g. BMedSci(VisSc), MOpt"
        value={providerData.qualifications} 
        onChange={(event) => handleChange(event)} 
        maxlength="40"
      />

      {/* Practice name is only relevant for providers, and even then you might consider omitting this, as there is really no room on the computerised for for practice name */}
      <FormField 
        name="practiceName"
        label="Practice name (optional)" 
        value={providerData.practiceName} 
        onChange={handleChange} 
      />

      <AddressAutocomplete 
        data={providerData}
        setData={setProviderData}
        handleChange={(event) => handleChange(event)}
        provider={true}   
        alerts={providerAlerts}
        setAlerts={setProviderAlerts} 
        googleLoaded={googleLoaded}
      />

      {/* Because this is intended for use only in Australia, present and validate phone numbers in national format, which includes 10 digits for landline and mobile numbers, as follows: 02 1234 4321 [telephone], or 0400 000 000 [mobile]. Note that 13 numbers may be 6 or 10 digits, and indicates an Australia wide number. This shouldn't be appropriate for any optical practices, but should be able to be inputted regardless */}

      <FormField 
        fieldType="text" 
        name="phoneNumber"
        label="Phone number" 
        value={providerData.phoneNumber} 
        onChange={(event) => handleChange(event)} 
        alert={providerAlerts.phoneNumber}
        id="phoneNumber"
        maxlength="10"
        className="phoneNo-field form-field"
      />

      <FormField 
        fieldType="text" 
        name="prescriberNumber"
        label="Prescriber number" 
        value={providerData.prescriberNumber} 
        onChange={(event) => handleChange(event)} 
        alert={providerAlerts.prescriberNumber}
        maxlength="7"
        className="prescriberNo-field form-field"
      />

      {/* Only visible on standalone forms */}
      {standalone && <button onClick={handleSubmit}>Save</button>}
      
    </Fieldset>
  )
}

export default ProviderForm;
