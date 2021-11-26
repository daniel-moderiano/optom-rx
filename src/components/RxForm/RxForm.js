import { useState, useEffect, useCallback } from "react";
import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { StyledRxForm } from "./RxForm.styled";
import DrugAutocomplete from "../DrugAutocomplete/DrugAutocomplete";
import Fieldset from "../utils/Fieldset/Fieldset";

// ! Multiple optometrist items are not permitted to be prescribed on the same form; each must use an individual form

const RxForm = ({ handleSubmit, googleLoaded, existingData }) => {

  const [drugAlerts, setDrugAlerts] = useState({
    name: {},
    quantity: {},
    repeats: {},
    dosage: {},
  });

  const [patientAlerts, setPatientAlerts] = useState({
    fullName: {},
    streetAddress: {},
    suburb: {},
    postcode: {},
    state: {},
    medicareNumber: {},
    medicareRefNumber: {}
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

  // These states have been separated for better logic and avoiding too much nesting. However they still draw on any existing submitted data. Merge them on form submit
  const [drugData, setDrugData] = useState({
    activeIngredient: '',
    brandName: '',
    quantity: '',
    repeats: '',
    dosage: '',
    itemCode: '',
    substitutePermitted: true,    // Indicates if brand substitution is permitted
    brandOnly: false,    // Indicates whether the Rx should list brand name only (only permitted for certain drugs)
    includeBrand: false,    // Indicates whether brand name should be included on the Rx
    pbsRx: true,    // Indicates whether this is a PBS prescription 
    compounded: false,
    ...existingData.drugData,
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
    ...existingData.patientData,
  });

  // Not all of this data will be required
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

  const [miscData, setMiscData] = useState({
    date: '',    // Should be generated when the form is loaded, with an option to be manually changed
    authRxNumber: '',    // Auto-generated by optomRx 
    authCode: '',    // Either a streamline authority code, or a code obtained via telephone or online approval
    scriptID: '',    // Unique script ID to reference script 
    ...existingData.miscData,
  });

  const [requiredFields] = useState({
    drug: [
      'activeIngredient',
      'quantity',
      'repeats',
      'dosage',
    ],
    patient: [
      'fullName',
      'streetAddress',
      'suburb',
      'postcode',
      'state',
      'medicareNumber',
      'medicareRefNumber',
    ],
    provider: [
      'fullName',
      'streetAddress',
      'suburb',
      'postcode',
      'state',
      'phoneNumber',
      'prescriberNumber',
    ],
    misc: [
      'date'
    ],
  });

  // UI functions
  const showErrorClass = (element) => {
    element.classList.add('error');
    element.classList.remove('success');
  }

  const showSuccessClass = (element) => {
    element.classList.remove('error');
    element.classList.add('success');
  }

  // Pass a set function to handle change, rather than hardcoding with a certain setState function
  const handleChange = (set, event) => {
    const { name, value } = event.target;
    set((prevData) => ({
      ...prevData, 
      [name]: value 
    }));
  };

  // Will return true or false depending on whether the validated field is empty (not valid/false) or not
  const validateFieldForEmpty = (setFuncAlert, field) => {
    // Validate full name here
    if (field.value.trim().length === 0) {
      setFuncAlert((prevAlerts) => ({
        ...prevAlerts,
        [field.name]: {
          message: "This field cannot be left blank",
          type: 'error',
        }
      }));
      showErrorClass(field);
      return false;
    } else {
      return true;
    }
  }

  // Ensure final address entered is formatted with abbreviated state code
  const formatAddressState = (stateInput) => {
    let formatted = '';
    switch (true) {
      case (/South Australia/i).test(stateInput):
        formatted = 'SA'
        break;
      
      case (/Queensland/i).test(stateInput):
      formatted = 'QLD'
      break;

      case (/New South Wales/i).test(stateInput):
        formatted = 'NSW'
        break;

      case (/Tasmania/i).test(stateInput):
        formatted = 'TAS'
        break;

      case (/Victoria/i).test(stateInput):
        formatted = 'VIC'
        break;

      case (/Western Australia/i).test(stateInput):
        formatted = 'WA'
        break;

      default:
        formatted = stateInput;
        break;
    }

    return formatted;
  }

  // Show positive feedback once a validation requirements are met
  const positiveInlineValidation = useCallback((setAlertFunc, field) => {
    showSuccessClass(field);
    setAlertFunc((prevAlerts) => ({
      ...prevAlerts,
      [field.name]: {}
    }));
  }, []);

  // Show positive feedback once a validation requirements are met
  const negativeInlineValidation = useCallback((setAlertFunc, alertMsg, field) => {
    showErrorClass(field);
    setAlertFunc((prevAlerts) => ({
      ...prevAlerts,
      [field.name]: {
        message: alertMsg,
        type: 'error',
      }
    }));
  }, []);

  // Provide positive and negative feedback for a field requiring any non-empty input
  const validateRequiredField = useCallback((setAlertFunc, field) => {
    // Validate full name here
    if (field.value.trim().length === 0) {
      setAlertFunc((prevAlerts) => ({
        ...prevAlerts,
        [field.name]: {
          message: "This field cannot be left blank",
          type: 'error',
        }
      }));
      showErrorClass(field);
    } else {
      showSuccessClass(field);
      setAlertFunc((prevAlerts) => ({
        ...prevAlerts,
        [field.name]: {}
      }));
    }
  }, []);


  // TODO: function to generate Authority prescription numbers
  // Take any seven digit base number and convert it to a valid PBS authority prescription number
  const generateAuthRxNumber = (baseNumber) => {
    if (typeof baseNumber === 'number') {
      baseNumber = baseNumber.toString()
    }
    // AuthNo format must be a 7 digit number followed by a check digit that is the remainder of dividing the sum of the digits of the base number by 9
    const reducer = (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue);
    const sum = baseNumber.split('').reduce(reducer)
    const checkDigit = sum % 9;

    return `${baseNumber}${checkDigit}`;
  }

  // Inline form validation
  useEffect(() => {
    // Event propagation will capture all focusout events from patient form
    const drugDataValidation = () => {
      document.querySelector('.drug-form').addEventListener('focusout', (event) => {
        const { name, value } = event.target
        switch (true) {
          case name === 'activeIngredient':
            validateRequiredField(setDrugAlerts, event.target);
            break;

          case name === 'brandName':
            if (value.trim().length > 0) {
              event.target.classList.remove('error')
              setDrugAlerts((prevAlerts) => ({
                ...prevAlerts,
                brandName: {}
              }));
            }
            break;

          case name === 'quantity':
            validateRequiredField(setDrugAlerts, event.target);
            break;

          // Can be zero, and for non-PBS prescriptions, there is technically no upper limits
          case name === 'repeats':
            if (value.trim().length === 0) {
              negativeInlineValidation(setDrugAlerts, 'This field cannot be left blank', event.target);
            } else if (!(/^0$|^([1-9]{1,})$/).test(value.trim())) {
              negativeInlineValidation(setDrugAlerts, 'Please enter a valid number of repeats (may be zero)', event.target);
            } else {
              positiveInlineValidation(setDrugAlerts, event.target);
            }
            break;
        
          case name === 'dosage':
            validateRequiredField(setDrugAlerts, event.target);
            break;        
          default:
            break;
        }
      });
    };

    const patientDataValidation = () => {
      document.querySelector('.patient-form').addEventListener('focusout', (event) => {
        const { name, value } = event.target
        switch (true) {
          case name === 'fullName':
            validateRequiredField(setPatientAlerts, event.target);
            break;

          case name === 'streetAddress':
            validateRequiredField(setPatientAlerts, event.target);
            break;
          
          case name === 'suburb':
            validateRequiredField(setPatientAlerts, event.target);
            break;
    
          case name === 'state':
            setPatientData((prevData) => ({
              ...prevData, 
              [name]: formatAddressState(value), 
            }));
            validateRequiredField(setPatientAlerts, event.target);
            break;
    
          case name === 'postcode':
            validateRequiredField(setPatientAlerts, event.target);
            break;

          case name === 'medicareNumber':
            // Check for exactly 10 digits
            if (value.trim()[0] === '0') {
              negativeInlineValidation(setPatientAlerts, 'Medicare number must not start with zero', event.target);
              showErrorClass(event.target);
            } else if (!(/^[0-9]{10}$/).test(value.trim())) {
              negativeInlineValidation(setPatientAlerts, 'Medicare number must be exactly 10 digits long', event.target);
            } else {
              positiveInlineValidation(setPatientAlerts, event.target);
            }
            break;

          case name === 'medicareRefNumber':
            // Check for digits 1-9, and only a single digit
            if (!(/^[1-9]{1}$/).test(value.trim())) {
              negativeInlineValidation(setPatientAlerts, 'IRN must be a single digit between 1 through 9', event.target);
            } else {
              positiveInlineValidation(setPatientAlerts, event.target);
            }
            break;
        
          default:
            break;
        }
      });
    };

    const providerDataValidation = () => {
      document.querySelector('.provider-form').addEventListener('focusout', (event) => {
        const { name, value } = event.target
        switch (true) {
          case name === 'fullName':
            validateRequiredField(setProviderAlerts, event.target);
            break;

          case name === 'streetAddress':
            validateRequiredField(setProviderAlerts, event.target);
            break;
          
          case name === 'suburb':
            validateRequiredField(setProviderAlerts, event.target);
            break;
    
          case name === 'state':
            setProviderData((prevData) => ({
              ...prevData, 
              [name]: formatAddressState(value), 
            }));
            validateRequiredField(setProviderAlerts, event.target);
            break;
    
          case name === 'postcode':
            validateRequiredField(setProviderAlerts, event.target);
            break;

          case name === 'phoneNumber':
            // Consider trimming the input of any spaces, hyphens, or parens
            if (!(/^((0[2-8]\d{8})|(13(00|\d{4})(\d{6})?))$/).test(value.trim())) {
              if (value.substring(0, 2) === '13') {
                // Provide business specific error message
                negativeInlineValidation(setProviderAlerts, 'Australian business numbers are either 6 digits and begin with 13, or 10 digits and begin with 1300', event.target);
              } else {
                // Provide general error message
                negativeInlineValidation(setProviderAlerts, 'Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08', event.target);
              }
            } else {
              positiveInlineValidation(setProviderAlerts, event.target);
            }
            break;

          case name === 'prescriberNumber':
            // Check for digits only
            if (!(/^[0-9]{7}$/).test(value.trim())) {
              // Sets an alert object in the state, which will immediately cause the component to render an alert message
              negativeInlineValidation(setProviderAlerts, 'Prescriber number must be a seven digit number', event.target);
            } else {
              positiveInlineValidation(setProviderAlerts, event.target);
            }
            break;
        
          default:
            break;
        }
      });
    };

    patientDataValidation();
    providerDataValidation();
    drugDataValidation();

  }, [validateRequiredField, positiveInlineValidation, negativeInlineValidation]);

  // Check remove a visible error or alert from the brand name input where it changes from being required to not
  useEffect(() => {
    if (!drugData.includeBrand && !drugData.brandOnly) {
      document.querySelector('#brandName').classList.remove('error');
      setDrugAlerts((prevAlerts) => ({
        ...prevAlerts,
        brandName: {}
      }));
    };
    // It is optional to include a function here that provides a warning when one of these are checked to true and the brand name input is empty, but this is opposite to expected user flow and will likely cause annoyance more than anything else
  }, [drugData.includeBrand, drugData.brandOnly]);

  // Used to toggle any boolean data in the data states
  const toggleBooleanState = (setFunc, data, boolToChange) => {
    let newState = true;
    if (data[boolToChange]) {
      newState = false;
    }
    setFunc((prevData) => ({
      ...prevData,
      [boolToChange]: newState,
    }));
  };

  // Ensure form is validated before calling form submission function (to generate Rx)
  const checkFormValidation = () => {
    let valid = true;

    const drugForm = document.querySelector('.drug-form')
    const patientForm = document.querySelector('.patient-form')
    const providerForm = document.querySelector('.provider-form')

    requiredFields.drug.forEach((field) => {
      const input = drugForm.querySelector(`[name="${field}"]`);
      if (input.value.trim().length === 0) {
        valid = false;
        negativeInlineValidation(setDrugAlerts, 'This field cannot be left blank', input);
      }
    });

    requiredFields.patient.forEach((field) => {
      const input = patientForm.querySelector(`[name="${field}"]`);
      if (input.value.trim().length === 0) {
        valid = false;
        negativeInlineValidation(setPatientAlerts, 'This field cannot be left blank', input);
      }
    });

    requiredFields.provider.forEach((field) => {
      const input = providerForm.querySelector(`[name="${field}"]`);
      if (input.value.trim().length === 0) {
        valid = false;
        negativeInlineValidation(setProviderAlerts, 'This field cannot be left blank', input);
      }
    });

    if (drugData.brandOnly || drugData.includeBrand) {
      if(!validateFieldForEmpty(setDrugAlerts, document.querySelector('#brandName'))) {
        valid = false;
      }
    }

    return valid;
  }

  return (
    <StyledRxForm 
      className="rxform" 
      onSubmit={(e) => {
        e.preventDefault(); 
        if (checkFormValidation()) {
          handleSubmit(drugData, patientData, providerData, miscData)
        }
      }} 
      autoComplete="off">
      {/* Single input to select the medication */}
      {/* Note there must be enough info to identify the medicine, including form and strength */}

      <FormField 
        fieldType="date" 
        name="date"
        label="Date" 
        value={miscData.date} 
        onChange={(event) => handleChange(setMiscData, event)} 
        // alert={drugAlerts.dosage}
      />

      <Fieldset className="drug-form" legend="Medication Details">

        <DrugAutocomplete 
          data={drugData}
          setData={setDrugData}
          handleChange={(event) => handleChange(setDrugData, event)}  
          toggle={toggleBooleanState}
          alerts={drugAlerts}
          setAlerts={setDrugAlerts}
        />

        {/* TODO: PBS integration to identify which medications require authority, and auto-filling. Should appear while PBS Rx is true */}
        <FormField 
          fieldType="checkbox" 
          name="pbsRx"
          label="PBS" 
          onChange={() => toggleBooleanState(setDrugData, drugData, 'pbsRx')}
          checked={drugData.pbsRx}
          className="checkbox"
        />  
        {/* Must include quantity and repeats to meet requirements */}
        <FormField 
          fieldType="text" 
          name="dosage"
          label="Dosage directions" 
          value={drugData.dosage} 
          onChange={(event) => handleChange(setDrugData, event)} 
          alert={drugAlerts.dosage}
        />

        <FormField 
          fieldType="number" 
          name="quantity"
          label="Quantity" 
          value={drugData.quantity} 
          onChange={(event) => handleChange(setDrugData, event)} 
          alert={drugAlerts.quantity}
          className="quantity-field form-field"
        />

        <FormField 
          fieldType="number" 
          name="repeats"
          label="Repeats" 
          value={drugData.repeats} 
          onChange={(event) => handleChange(setDrugData, event)} 
          alert={drugAlerts.repeats}
          className="repeats-field form-field"
        /> 
      </Fieldset>

      {/* Enter the patient Rx details */}
      <Fieldset className="patient-form" legend="Patient Details">
      {/* Legal requirements include only the patient's name and address */}
      {/* Patient Medicare number is however required for ALL PBS Rx, and should be included in general so that the patient may claim under PBS where this price is cheaper. All Aus are valid private prescriptions however. */}

        {/* A max length for these fields based on the physical space available on the Rx pad is possible, however there should be virtually no cases where this is a problem. If anything, a warning alert could be added for fields such as full name, and street address/suburb where the char length exceeds 40 */}
        <FormField 
          fieldType="text" 
          name="fullName"
          label="Full name" 
          value={patientData.fullName} 
          onChange={(event) => handleChange(setPatientData, event)} 
          alert={patientAlerts.fullName}
        />

        <AddressAutocomplete 
          data={patientData}
          setData={setPatientData}
          handleChange={(event) => handleChange(setPatientData, event)}      
          provider={false}   
          alerts={patientAlerts}
          setAlerts={setPatientAlerts} 
          googleLoaded={googleLoaded}
        />

        {/* Fieldset may be more appropriate here? */}
        <div className="medicareFields">
          {/* Validation requires a 10-digit number. Further checks are beyond the scopy of this application */}
          <FormField 
            fieldType="text" 
            name="medicareNumber"
            label="Medicare number" 
            value={patientData.medicareNumber} 
            onChange={(event) => handleChange(setPatientData, event)} 
            alert={patientAlerts.medicareNumber}
            maxlength="10"
            className="medicareNumber-field form-field"
          />

          {/* Validation dictates only a single digit from 1-9 */}
          <FormField 
            fieldType="text" 
            name="medicareRefNumber"
            label="IRN" 
            value={patientData.medicareRefNumber} 
            onChange={(event) => handleChange(setPatientData, event)} 
            alert={patientAlerts.medicareRefNumber}
            maxlength="1"
            className="irn-field form-field"
          />
        </div>        
      </Fieldset>

      {/* Enter the provider details */}
      <Fieldset className="provider-form" legend="Provider Details">
        {/* ! Legal requirements include the prescriber's name, address, and contact details, and prescriber num
        You may also give them the option of adding qualifications */}
        {/* Consider a separate practice name field in the address section for providers, or even a Shop/Building # field? */}
      
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
          className="checkbox"
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
        />

        <FormField 
          fieldType="text" 
          name="prescriberNumber"
          label="Prescriber number" 
          value={providerData.prescriberNumber} 
          onChange={(event) => handleChange(setProviderData, event)} 
          alert={providerAlerts.prescriberNumber}
          maxlength="7"
        />
      </Fieldset>
      
      <button type="submit">Generate Rx</button>
      
      
    </StyledRxForm>
  )
}

export default RxForm
