import { useState } from "react";
import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";

const RxForm = () => {

  // These states have been separated for better logic and avoiding too much nesting. Merge them on form submit
  const [drugData, setDrugData] = useState({
    name: '',
    quantity: '',
    repeats: '',
    dosage: '',
  });

  // Note this will eventually be modified to match the address autocomplete data returned
  const [patientData, setPatientData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    subpremise: '',
    suburb: '',
    postcode: '',
    state: '',
    medicareNumber: '',
    medicareRefNumber: '',
  });

  // Not all of this data will be required
  const [providerData, setProviderData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    qualifications: '',
    practiceName: '',
    streetAddress: '',
    subpremise: '',
    suburb: '',
    postcode: '',
    state: '',
    phoneNumber: '',
    faxNumber: '',
    prescriberNumber: '',
  });

  // Pass a set function to handle change, rather than hardcoding with a certain setState function
  const handleChange = (set, event) => {
    const { name, value } = event.target;
    set((prevData) => ({
      ...prevData, 
      [name]: value 
    }));
  };

  return (
    <form className="rxform">
      {/* Single input to select the medication */}
      {/* Note there must be enough info to identify the medicine, including form and strength */}
      <fieldset className="drug">
        <FormField 
          fieldType="text" 
          name="name"
          label="Medication" 
          placeholder="Enter medication name"
          value={drugData.name} 
          onChange={(event) => handleChange(setDrugData, event)} 
        />
      </fieldset>

      {/* Enter the patient Rx details */}
      <fieldset className="patient">
      {/* Legal requirements include only the patient's name and address */}
      {/* Patient Medicare number is however required for ALL PBS Rx, and should be included in general so that the patient may claim under PBS where this price is cheaper. All Aus are valid private prescriptions however. */}

        <FormField 
          fieldType="text" 
          name="firstName"
          label="First name" 
          placeholder="Enter first name"
          value={patientData.firstName} 
          onChange={(event) => handleChange(setPatientData, event)} 
        />

        <FormField 
          fieldType="text" 
          name="lastName"
          label="Last name" 
          placeholder="Enter last name"
          value={patientData.lastName} 
          onChange={(event) => handleChange(setPatientData, event)} 
        />

        <AddressAutocomplete 
          data={patientData}
          setData={setPatientData}
          handleChange={(event) => handleChange(setPatientData, event)}      
          provider={false}    
        />

        <FormField 
          fieldType="text" 
          name="medicareNumber"
          label="Medicare number" 
          placeholder="Enter medicare number"
          value={patientData.medicareNumber} 
          onChange={(event) => handleChange(setPatientData, event)} 
        />

        <FormField 
          fieldType="text" 
          name="medicareRefNumber"
          label="Reference number" 
          placeholder="Enter reference number"
          value={patientData.medicareRefNumber} 
          onChange={(event) => handleChange(setPatientData, event)} 
        />
      </fieldset>

      {/* Enter the provider details */}
      <fieldset className="provider">
        {/* Legal requirements include the prescriber's name, address, and contact details, and prescriber num
        You may also give them the option of adding qualifications */}
        {/* Consider a separate practice name field in the address section for providers, or even a Shop/Building # field? */}
        <FormField 
          fieldType="text" 
          name="title"
          label="Title" 
          placeholder="Mr/Mrs/Miss"
          value={providerData.title} 
          onChange={(event) => handleChange(setProviderData, event)} 
        />

        <FormField 
          fieldType="text" 
          name="firstName"
          label="First name" 
          placeholder="Enter first name"
          value={providerData.firstName} 
          onChange={(event) => handleChange(setProviderData, event)} 
        />

        <FormField 
          fieldType="text" 
          name="lastName"
          label="Last name" 
          placeholder="Enter last name"
          value={providerData.lastName} 
          onChange={(event) => handleChange(setProviderData, event)} 
        />

        <AddressAutocomplete 
          data={providerData}
          setData={setProviderData}
          handleChange={(event) => handleChange(setProviderData, event)}
          provider={true}   
        />

        <FormField 
          fieldType="text" 
          name="phoneNumber"
          label="Phone number" 
          placeholder="Enter phone number"
          value={providerData.phoneNumber} 
          onChange={(event) => handleChange(setProviderData, event)} 
        />

        <FormField 
          fieldType="text" 
          name="faxNumber"
          label="Fax number" 
          placeholder="Enter fax number"
          value={providerData.faxNumber} 
          onChange={(event) => handleChange(setProviderData, event)} 
        />

        <FormField 
          fieldType="text" 
          name="prescriberNumber"
          label="Prescriber number" 
          placeholder="Enter prescriber number"
          value={providerData.prescriberNumber} 
          onChange={(event) => handleChange(setProviderData, event)} 
        />

      </fieldset>

      {/* Enter remaining details such as dosage, quantity, and repeats, plus PBS. This section might include the PBS authority code field */}
      <fieldset className="parameters">
        {/* Must include quantity and repeats to meet requirements */}
        <FormField 
          fieldType="text" 
          name="dosage"
          label="Dosage" 
          placeholder="Enter dosage"
          value={drugData.dosage} 
          onChange={(event) => handleChange(setDrugData, event)} 
        />

        <FormField 
          fieldType="text" 
          name="quantity"
          label="Quantity" 
          placeholder="Enter quantity"
          value={drugData.quantity} 
          onChange={(event) => handleChange(setDrugData, event)} 
        />

        <FormField 
          fieldType="text" 
          name="repeats"
          label="Repeats" 
          placeholder="Enter repeats"
          value={drugData.repeats} 
          onChange={(event) => handleChange(setDrugData, event)} 
        />
      </fieldset>
    </form>
  )
}

export default RxForm
