import Fieldset from "../utils/Fieldset/Fieldset";
import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";

// ! Legal requirements include the prescriber's name, address, and contact details, and prescriber number

const ProviderForm = () => {
  return (
    <Fieldset className="ProviderForm" legend="Provider Details">

      <FormField 
        fieldType="text" 
        name="fullName"
        label="Full name" 
        value={providerData.fullName} 
        onChange={(event) => handleChange(setProviderData, event)} 
        alert={providerAlerts.fullName}
      />    

      <FormField 
        fieldType="checkbox" 
        name="prefix"
        label="Include 'Dr' in provider name" 
        onChange={() => toggleBooleanState(setProviderData, providerData, 'prefix')}
        checked={providerData.prefix}
        className="checkbox prefix-field"
      />  

      <FormField 
        fieldType="text" 
        name="qualifications"
        label="Abbreviated qualifications (optional)" 
        placeholder="e.g. BMedSci(VisSc), MOpt"
        value={providerData.qualifications} 
        onChange={(event) => handleChange(setProviderData, event)} 
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
        handleChange={(event) => handleChange(setProviderData, event)}
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
        onChange={(event) => handleChange(setProviderData, event)} 
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
        onChange={(event) => handleChange(setProviderData, event)} 
        alert={providerAlerts.prescriberNumber}
        maxlength="7"
        className="prescriberNo-field form-field"
      />
    </Fieldset>
  )
}

export default ProviderForm
