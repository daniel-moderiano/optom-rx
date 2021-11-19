import { useState, useEffect } from "react";
import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { StyledRxForm } from "./RxForm.styled";
import DrugAutocomplete from "../DrugAutocomplete/DrugAutocomplete";

// ! Multiple optometrist items are not permitted to be prescribed on the same form; each must use an individual form

const RxForm = ({ handleSubmit }) => {
  // en-CA format provides date as YYYY-MM-DD consistent with HTML input to allow setting of the initial state with the current date
  const AuDate = new Date().toLocaleString("en-CA", { timeZone: "Australia/Adelaide" }).substring(0, 10);

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

  // These states have been separated for better logic and avoiding too much nesting. Merge them on form submit
  
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
  });

  const [miscData, setMiscData] = useState({
    date: AuDate,    // Should be generated when the form is loaded, with an option to be manually changed
    authRxNumber: '',    // Auto-generated by optomRx 
    authCode: '',    // Either a streamline authority code, or a code obtained via telephone or online approval
  });

  const [requiredFields, setRequiredFields] = useState({
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

  // TODO: function to generate Authority prescription numbers

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

  useEffect(() => {
    // Event propagation will capture all focusout events from patient form
    const patientDataValidation = () => {
      document.querySelector('.patient-form').addEventListener('focusout', (event) => {
        const { name, value } = event.target
        switch (true) {
          case name === 'fullName':
            // Validate full name here
            if (value.trim().length === 0) {
              setPatientAlerts((prevAlerts) => ({
                ...prevAlerts,
                fullName: {
                  message: "This field cannot be left blank",
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else {
              // Positive feedback and remove errors
              showSuccessClass(event.target);
              setPatientAlerts((prevAlerts) => ({
                ...prevAlerts,
                fullName: {}
              }));
            }
            break;

          case name === 'medicareNumber':
            // Check for exactly 10 digits
            if (value.trim()[0] === '0') {
              setPatientAlerts((prevAlerts) => ({
                ...prevAlerts,
                medicareNumber: {
                  message: 'Medicare number must not start with zero',
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else if (!(/^[0-9]{10}$/).test(value.trim())) {
              setPatientAlerts((prevAlerts) => ({
                ...prevAlerts,
                medicareNumber: {
                  message: 'Medicare number must be exactly 10 digits long',
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else {
              // Positive feedback and remove errors

              showSuccessClass(event.target);
              setPatientAlerts((prevAlerts) => ({
                ...prevAlerts,
                medicareNumber: {}
              }));
            }
            break;

          case name === 'medicareRefNumber':
            // Check for digits 1-9, and only a single digit
            if (!(/^[1-9]{1}$/).test(value.trim())) {
              // Sets an alert object in the state, which will immediately cause the component to render an alert message
              setPatientAlerts((prevAlerts) => ({
                ...prevAlerts,
                medicareRefNumber: {
                  message: 'IRN must be a single digit between 1 through 9',
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else {
              setPatientAlerts((prevAlerts) => ({
                ...prevAlerts,
                medicareRefNumber: {}
              }));
              showSuccessClass(event.target);
            }
            break;
        
          default:
            break;
        }
      });
    };

    patientDataValidation();

    // Event propagation will capture all focusout events from patient form
    const providerDataValidation = () => {
      document.querySelector('.provider-form').addEventListener('focusout', (event) => {
        const { name, value } = event.target
        switch (true) {
          case name === 'fullName':
            // Validate full name here
            if (value.trim().length === 0) {
              setProviderAlerts((prevAlerts) => ({
                ...prevAlerts,
                fullName: {
                  message: "This field cannot be left blank",
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else {
              // Positive feedback and remove errors
              showSuccessClass(event.target);
              setProviderAlerts((prevAlerts) => ({
                ...prevAlerts,
                fullName: {}
              }));
            }
            break;

          case name === 'phoneNumber':
            // Consider trimming the input of any spaces, hyphens, or parens
            if (!(/^((0[2-8]\d{8})|(13(00|\d{4})(\d{6})?))$/).test(value.trim())) {
              if (value.substring(0, 2) === '13') {
                // Provide business specific error message
                setProviderAlerts((prevAlerts) => ({
                  ...prevAlerts,
                  phoneNumber: {
                    message: 'Australian business numbers are either 6 digits and begin with 13, or 10 digits and begin with 1300',
                    type: 'error',
                  }
                }));
              } else {
                // Provide general error message
                setProviderAlerts((prevAlerts) => ({
                  ...prevAlerts,
                  phoneNumber: {
                    message: 'Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08',
                    type: 'error',
                  }
                }));
              }
              showErrorClass(event.target);
            } else {
              // Positive feedback and remove errors
              showSuccessClass(event.target);
              setProviderAlerts((prevAlerts) => ({
                ...prevAlerts,
                phoneNumber: {}
              }));
            }
            break;

          case name === 'prescriberNumber':
            // Check for digits only
            if (!(/^[0-9]{7}$/).test(value.trim())) {
              // Sets an alert object in the state, which will immediately cause the component to render an alert message
              setProviderAlerts((prevAlerts) => ({
                ...prevAlerts,
                prescriberNumber: {
                  message: 'Prescriber number must be a seven digit number',
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else {
              setProviderAlerts((prevAlerts) => ({
                ...prevAlerts,
                prescriberNumber: {}
              }));
              showSuccessClass(event.target);
            }
            break;
        
          default:
            break;
        }
      });
    };

    providerDataValidation();

    // Event propagation will capture all focusout events from patient form
    const drugDataValidation = () => {
      document.querySelector('.drug-form').addEventListener('focusout', (event) => {
        const { name, value } = event.target
        switch (true) {
          case name === 'name':
            if (value.trim().length === 0) {
              setDrugAlerts((prevAlerts) => ({
                ...prevAlerts,
                name: {
                  message: "This field cannot be left blank",
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else {
              // Positive feedback and remove errors
              showSuccessClass(event.target);
              setDrugAlerts((prevAlerts) => ({
                ...prevAlerts,
                name: {}
              }));
            }
            break;

          // Quantity must be greater than zero, but < 10
          case name === 'quantity':
            if (value.trim().length === 0) {
              setDrugAlerts((prevAlerts) => ({
                ...prevAlerts,
                quantity: {
                  message: "This field cannot be left blank",
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else {
              // Positive feedback and remove errors
              showSuccessClass(event.target);
              setDrugAlerts((prevAlerts) => ({
                ...prevAlerts,
                quantity: {}
              }));
            }
            break;

          // Can be zero, and for non-PBS prescriptions, there is technically no upper limits
          case name === 'repeats':
            if (value.trim().length === 0) {
              setDrugAlerts((prevAlerts) => ({
                ...prevAlerts,
                repeats: {
                  message: "This field cannot be left blank",
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else if (!(/^0$|^([1-9]{1,})$/).test(value.trim())) {
              setDrugAlerts((prevAlerts) => ({
                ...prevAlerts,
                repeats: {
                  message: "Please enter a valid number of repeats (may be zero)",
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else {
              // Positive feedback and remove errors
              showSuccessClass(event.target);
              setDrugAlerts((prevAlerts) => ({
                ...prevAlerts,
                repeats: {}
              }));
            }
            break;
        
          case name === 'dosage':
            if (value.trim().length === 0) {
              setDrugAlerts((prevAlerts) => ({
                ...prevAlerts,
                dosage: {
                  message: "This field cannot be left blank",
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else {
              // Positive feedback and remove errors
              showSuccessClass(event.target);
              setDrugAlerts((prevAlerts) => ({
                ...prevAlerts,
                dosage: {}
              }));
            }
            break;
          
          case name === 'brandName':
            // Check first if the field is required
            if (value.trim().length === 0 && (drugData.brandOnly || drugData.includeBrand)) {
              setDrugAlerts((prevAlerts) => ({
                ...prevAlerts,
                brandName: {
                  message: "This field cannot be left blank",
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else {
              // Positive feedback and remove errors
              console.log('remove error');
              showSuccessClass(event.target);
              setDrugAlerts((prevAlerts) => ({
                ...prevAlerts,
                brandName: {}
              }));
            }

            break;
        
          default:
            break;
        }
      });
    };

    drugDataValidation();
  }, [drugData.brandOnly, drugData.includeBrand])

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

  const validateFieldForEmpty = (setFunc, field) => {
    // Validate full name here
    if (field.value.trim().length === 0) {
      setFunc((prevAlerts) => ({
        ...prevAlerts,
        [field.name]: {
          message: "This field cannot be left blank",
          type: 'error',
        }
      }));
      showErrorClass(field);
      return false;
    } else {
      // Positive feedback and remove errors
      showSuccessClass(field);
      setFunc((prevAlerts) => ({
        ...prevAlerts,
        [field.name]: {}
      }));
      return true;
    }
  }

  // TODO: Add brand name to required fields when any of the relevant checkboxes are marked

  // Ensure form is validated before calling form submission function (to generate Rx)
  const checkFormValidation = () => {
    let valid = true;

    const drugForm = document.querySelector('.drug-form')
    const patientForm = document.querySelector('.patient-form')
    const providerForm = document.querySelector('.provider-form')

    requiredFields.drug.forEach((field) => {
      const input = drugForm.querySelector(`[name="${field}"]`);
      if (!validateFieldForEmpty(setDrugAlerts, input)) {
        valid = false;
      }
    });

    requiredFields.patient.forEach((field) => {
      const input = patientForm.querySelector(`[name="${field}"]`);
      if (!validateFieldForEmpty(setPatientAlerts, input)) {
        valid = false;
      }
    });

    requiredFields.provider.forEach((field) => {
      const input = providerForm.querySelector(`[name="${field}"]`);
      if (!validateFieldForEmpty(setProviderAlerts, input)) {
        valid = false;
      }
    });

    return valid;
  }

  return (
    <StyledRxForm 
      className="rxform" 
      onSubmit={(e) => {
        e.preventDefault(); 
        if (checkFormValidation()) {
          handleSubmit(drugData, patientData, providerData)
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


      <fieldset className="drug-form">
        <legend className="drug-form__title">Medication</legend>

        {/* TODO: add input checkbox to include brand name on prescription, and for brand name substitution not permitted */}
        {/* TODO: Add 'to be compounded' checkbox */}

        <DrugAutocomplete 
          data={drugData}
          setData={setDrugData}
          handleChange={(event) => handleChange(setDrugData, event)}  
          toggle={toggleBooleanState}
        />

        {/* TODO: PBS integration to identify which medications require authority, and auto-filling. Should appear while PBS Rx is true */}
        <FormField 
          fieldType="checkbox" 
          name="pbsRx"
          label="PBS" 
          onChange={() => toggleBooleanState(setDrugData, drugData, 'pbsRx')}
          checked={drugData.pbsRx}
        />  
        {/* Must include quantity and repeats to meet requirements */}
        <FormField 
          fieldType="text" 
          name="dosage"
          label="Dosage" 
          placeholder="Enter dosage"
          value={drugData.dosage} 
          onChange={(event) => handleChange(setDrugData, event)} 
          alert={drugAlerts.dosage}
        />

        <FormField 
          fieldType="number" 
          name="quantity"
          label="Quantity" 
          placeholder="Enter quantity"
          value={drugData.quantity} 
          onChange={(event) => handleChange(setDrugData, event)} 
          alert={drugAlerts.quantity}
        />

        <FormField 
          fieldType="number" 
          name="repeats"
          label="Repeats" 
          placeholder="Enter repeats"
          value={drugData.repeats} 
          onChange={(event) => handleChange(setDrugData, event)} 
          alert={drugAlerts.repeats}
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
          alert={patientAlerts.fullName}
        />

        {/* Validation done within component */}
        <AddressAutocomplete 
          data={patientData}
          setData={setPatientData}
          handleChange={(event) => handleChange(setPatientData, event)}      
          provider={false}   
          alerts={patientAlerts}
          setAlerts={setPatientAlerts} 
        />

        {/* Validation requires a 10-digit number. Further checks are beyond the scopy of this application */}
        <FormField 
          fieldType="text" 
          name="medicareNumber"
          label="Medicare number" 
          placeholder="Enter medicare number"
          value={patientData.medicareNumber} 
          onChange={(event) => handleChange(setPatientData, event)} 
          alert={patientAlerts.medicareNumber}
          maxlength="10"
        />

        {/* Validation dictates only a single digit from 1-9 */}
        <FormField 
          fieldType="text" 
          name="medicareRefNumber"
          label="IRN" 
          placeholder="Enter reference number"
          value={patientData.medicareRefNumber} 
          onChange={(event) => handleChange(setPatientData, event)} 
          alert={patientAlerts.medicareRefNumber}
          maxlength="1"
        />
      </fieldset>

      {/* Enter the provider details */}
      <fieldset className="provider-form">
        <legend className="provider-form__title">Provider Details</legend>
        {/* ! Legal requirements include the prescriber's name, address, and contact details, and prescriber num
        You may also give them the option of adding qualifications */}
        {/* Consider a separate practice name field in the address section for providers, or even a Shop/Building # field? */}
        
        <FormField 
          fieldType="checkbox" 
          name="prefix"
          label="Select if you wish to be listed as 'Dr' on the form" 
          onChange={() => toggleBooleanState(setProviderData, providerData, 'prefix')}
        />    

        <FormField 
          fieldType="text" 
          name="fullName"
          label="Full name" 
          placeholder="Enter full name"
          value={providerData.fullName} 
          onChange={(event) => handleChange(setProviderData, event)} 
          alert={providerAlerts.fullName}
        />    

        <FormField 
          fieldType="text" 
          name="qualifications"
          label="Abbreviated qualifications - optional" 
          placeholder="e.g. BMedSci(VisSc), MOpt"
          value={providerData.qualifications} 
          onChange={(event) => handleChange(setProviderData, event)} 
          maxlength="40"
        />

        <AddressAutocomplete 
          data={providerData}
          setData={setProviderData}
          handleChange={(event) => handleChange(setProviderData, event)}
          provider={true}   
          alerts={providerAlerts}
          setAlerts={setProviderAlerts} 
        />

        {/* Because this is intended for use only in Australia, present and validate phone numbers in national format, which includes 10 digits for landline and mobile numbers, as follows: 02 1234 4321 [telephone], or 0400 000 000 [mobile]. Note that 13 numbers may be 6 or 10 digits, and indicates an Australia wide number. This shouldn't be appropriate for any optical practices, but should be able to be inputted regardless */}

        <FormField 
          fieldType="text" 
          name="phoneNumber"
          label="Phone number" 
          placeholder="Enter phone number"
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
          placeholder="Enter prescriber number"
          value={providerData.prescriberNumber} 
          onChange={(event) => handleChange(setProviderData, event)} 
          alert={providerAlerts.prescriberNumber}
          maxlength="7"
        />
      </fieldset>
      {/* TODO: submit form should act as a link to the template route, which can only be accessed if all required forms are complete */}
      <button type="submit">Generate Rx</button>
    </StyledRxForm>
  )
}

export default RxForm
