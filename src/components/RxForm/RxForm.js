import { useState, useEffect } from "react";
import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { StyledRxForm } from "./RxForm.styled";

const RxForm = () => {
  const [drugAlerts, setDrugAlerts] = useState({

  });

  const [patientAlerts, setPatientAlerts] = useState({

  });

  const [providerAlerts, setProviderAlerts] = useState({
    medicareNumber: {},
    medicareRefNumber: {}
  });

  // These states have been separated for better logic and avoiding too much nesting. Merge them on form submit
  const [drugData, setDrugData] = useState({
    name: '',
    quantity: '',
    repeats: '',
    dosage: '',
  });

  // Note this will eventually be modified to match the address autocomplete data returned
  const [patientData, setPatientData] = useState({
    fullName: '',
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
  });

  // Pass a set function to handle change, rather than hardcoding with a certain setState function
  const handleChange = (set, event) => {
    const { name, value } = event.target;
    set((prevData) => ({
      ...prevData, 
      [name]: value 
    }));
  };

  useEffect(() => {
    // Event propagation will capture all focusout events from patient form
    const patientDataValidation = () => {
      document.querySelector('.patient-form').addEventListener('focusout', (event) => {
        const { name, value } = event.target
        switch (true) {
          case name === 'fullName':
            // Validate full name here
            break;

          case name === 'medicareNumber':
            // Check for exactly 10 digits
            if (!(/^[0-9]{10}$/).test(value.trim())) {
              // Sets an alert object in the state, which will immediately cause the component to render an alert message
              setProviderAlerts((prevAlerts) => ({
                ...prevAlerts,
                medicareNumber: {
                  message: 'Medicare number must be exactly 10 digits long',
                  type: 'error',
                }
              }));
            } else {
              // Consider a positive feedback success class around input
            }
            break;

          case name === 'medicareRefNumber':
            // Check for digits 1-9, and only a single digit
            if (!(/^[1-9]{1}$/).test(value.trim())) {
              // Sets an alert object in the state, which will immediately cause the component to render an alert message
              setProviderAlerts((prevAlerts) => ({
                ...prevAlerts,
                medicareRefNumber: {
                  message: 'IRN must be a single digit between 1 through 9',
                  type: 'error',
                }
              }));
            } else {
              // Consider a positive feedback success class around input
            }
            break;
        
          default:
            break;
        }
      });
    };

    patientDataValidation();
    
  }, [])


  // TODO: handle submit
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submitted');
  }

  return (
    <StyledRxForm className="rxform" onSubmit={handleSubmit}>
      {/* Single input to select the medication */}
      {/* Note there must be enough info to identify the medicine, including form and strength */}
      <fieldset className="drug-form">
        <legend className="drug-form__title">Medication</legend>
        <FormField 
          fieldType="text" 
          name="name"
          label="Medication" 
          placeholder="Enter medication name"
          value={drugData.name} 
          onChange={(event) => handleChange(setDrugData, event)} 
        />

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

      {/* Enter the patient Rx details */}
      <fieldset className="patient-form">
        <legend className="patient-form__title">Patient Details</legend>
      {/* Legal requirements include only the patient's name and address */}
      {/* Patient Medicare number is however required for ALL PBS Rx, and should be included in general so that the patient may claim under PBS where this price is cheaper. All Aus are valid private prescriptions however. */}

        {/* Consider a max limit on this input based on physical Rx form constraints? */}
        <FormField 
          fieldType="text" 
          name="fullName"
          label="Full name" 
          placeholder="Enter full name"
          value={patientData.fullName} 
          onChange={(event) => handleChange(setPatientData, event)} 
        />

        {/* Validation done within component */}
        <AddressAutocomplete 
          data={patientData}
          setData={setPatientData}
          handleChange={(event) => handleChange(setPatientData, event)}      
          provider={false}    
        />

        {/* Validation requires a 10-digit number. Further checks are beyond the scopy of this application */}
        <FormField 
          fieldType="text" 
          name="medicareNumber"
          label="Medicare number" 
          placeholder="Enter medicare number"
          value={patientData.medicareNumber} 
          onChange={(event) => handleChange(setPatientData, event)} 
          alert={providerAlerts.medicareNumber}
        />

        {/* Validation dictates only a single digit from 1-9 */}
        <FormField 
          fieldType="text" 
          name="medicareRefNumber"
          label="IRN" 
          placeholder="Enter reference number"
          value={patientData.medicareRefNumber} 
          onChange={(event) => handleChange(setPatientData, event)} 
          alert={providerAlerts.medicareRefNumber}
        />
      </fieldset>

      {/* Enter the provider details */}
      <fieldset className="provider-form">
        <legend className="provider-form__title">Provider Details</legend>
        {/* Legal requirements include the prescriber's name, address, and contact details, and prescriber num
        You may also give them the option of adding qualifications */}
        {/* Consider a separate practice name field in the address section for providers, or even a Shop/Building # field? */}
        <FormField 
          fieldType="text" 
          name="title"
          label="Title - optional" 
          placeholder="Mr/Mrs/Miss"
          value={providerData.title} 
          onChange={(event) => handleChange(setProviderData, event)} 
        />

        <FormField 
          fieldType="text" 
          name="fullName"
          label="Full name" 
          placeholder="Enter full name"
          value={providerData.fullName} 
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
          name="prescriberNumber"
          label="Prescriber number" 
          placeholder="Enter prescriber number"
          value={providerData.prescriberNumber} 
          onChange={(event) => handleChange(setProviderData, event)} 
        />
      </fieldset>
      <button type="submit">Generate Rx</button>
    </StyledRxForm>
  )
}

export default RxForm
