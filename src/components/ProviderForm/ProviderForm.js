import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { useState, useEffect, useCallback } from "react";

// ! Legal requirements include the prescriber's name, address, and contact details, and prescriber number

const ProviderForm = ({ data, setData, handleChange, alerts, setAlerts, toggleBooleanState, googleLoaded, standalone, handleSubmit, handleCancel }) => {

  const [providerAlerts, setProviderAlerts] = useState({
    fullName: {},
    streetAddress: {},
    suburb: {},
    postcode: {},
    state: {},
    phoneNumber: {},
    prescriberNumber: {},
  });

  // UI functions
  const showErrorClass = (element) => {
    element.classList.add('error');
    element.classList.remove('success');

    // Remove the tick icon
    const tick = element.parentNode.querySelector('.tickCircle');
    tick.classList.remove('show');
    tick.classList.add("hide");
  }

  const showSuccessClass = (element) => {
    element.classList.remove('error');
    element.classList.add('success');

    // Add the tick icon
    const tick = element.parentNode.querySelector('.tickCircle');
    tick.classList.remove('hide');
    tick.classList.add("show");
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

  // Standlone form validation on focusout events
  useEffect(() => {
    if (standalone) {
      document.querySelector('.ProviderForm--standalone').addEventListener('focusout', (event) => {
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
            setData((prevData) => ({
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
    } else {
      document.querySelector('.ProviderForm--integrated').addEventListener('focusout', (event) => {
        const { name, value } = event.target
        switch (true) {
          case name === 'fullName':
            validateRequiredField(setAlerts, event.target);
            break;
  
          case name === 'streetAddress':
            validateRequiredField(setAlerts, event.target);
            break;
          
          case name === 'suburb':
            validateRequiredField(setAlerts, event.target);
            break;
    
          case name === 'state':
            setData((prevData) => ({
              ...prevData, 
              [name]: formatAddressState(value), 
            }));
            validateRequiredField(setAlerts, event.target);
            break;
    
          case name === 'postcode':
            validateRequiredField(setAlerts, event.target);
            break;
  
          case name === 'phoneNumber':
            // Consider trimming the input of any spaces, hyphens, or parens
            if (!(/^((0[2-8]\d{8})|(13(00|\d{4})(\d{6})?))$/).test(value.trim())) {
              if (value.substring(0, 2) === '13') {
                // Provide business specific error message
                negativeInlineValidation(setAlerts, 'Australian business numbers are either 6 digits and begin with 13, or 10 digits and begin with 1300', event.target);
              } else {
                // Provide general error message
                negativeInlineValidation(setAlerts, 'Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08', event.target);
              }
            } else {
              positiveInlineValidation(setAlerts, event.target);
            }
            break;
  
          case name === 'prescriberNumber':
            // Check for digits only
            if (!(/^[0-9]{7}$/).test(value.trim())) {
              // Sets an alert object in the state, which will immediately cause the component to render an alert message
              negativeInlineValidation(setAlerts, 'Prescriber number must be a seven digit number', event.target);
            } else {
              positiveInlineValidation(setAlerts, event.target);
            }
            break;
        
          default:
            break;
        }
      });
    }
    
  }, [negativeInlineValidation, positiveInlineValidation, validateRequiredField, standalone, setAlerts, setData]);

  // Ensure form is validated before calling form submission function (standalone form only)
  const checkFormValidation = () => {
    let valid = true;
    const requiredFields = [
      'fullName',
      'streetAddress',
      'suburb',
      'postcode',
      'state',
      'phoneNumber',
      'prescriberNumber',
    ];

    const form = document.querySelector('.ProviderForm--standalone');

    requiredFields.forEach((field) => {
      const input = form.querySelector(`[name="${field}"]`);
      if (input.value.trim().length === 0) {
        valid = false;
        negativeInlineValidation(setProviderAlerts, 'This field cannot be left blank', input);
      }
    });

    return valid;
  }

  return (
    <>
      {/* The standalone form allows all 'in house' state management and validation, but has the optiona of overwriting data with custom state if required */}
      {/* Standalone form should submit providers to firebase using user ID as document ID */}
      {standalone &&  <div className="ProviderForm ProviderForm--standalone">
        <FormField 
          fieldType="text" 
          name="fullName"
          label="Full name" 
          value={data.fullName} 
          onChange={handleChange} 
          alert={alerts ? alerts.fullName : providerAlerts.fullName}
        />    

        <FormField 
          fieldType="checkbox" 
          name="prefix"
          label="Include 'Dr' in provider name" 
          onChange={toggleBooleanState}
          checked={data.prefix}
          className="checkbox prefix-field"
          enterFunc={(event) => {
            if (event.keyCode === 13) {
              toggleBooleanState(setData, data, event.target.name);
            }
          }}
        />  

        <FormField 
          fieldType="text" 
          name="qualifications"
          label="Abbreviated qualifications (optional)" 
          placeholder="e.g. BMedSci(VisSc), MOpt"
          value={data.qualifications} 
          onChange={handleChange} 
          maxlength="40"
        />

        {/* Practice name is only relevant for providers, and even then you might consider omitting this, as there is really no room on the computerised for for practice name */}
        <FormField 
          name="practiceName"
          label="Practice name (optional)" 
          value={data.practiceName} 
          onChange={handleChange} 
        />

        <AddressAutocomplete 
          data={data}
          setData={setData}
          handleChange={handleChange}
          provider={true}   
          alerts={alerts ? alerts : providerAlerts}
          setAlerts={setAlerts ? setAlerts : setProviderAlerts} 
          googleLoaded={googleLoaded}
        />

        {/* Because this is intended for use only in Australia, present and validate phone numbers in national format, which includes 10 digits for landline and mobile numbers, as follows: 02 1234 4321 [telephone], or 0400 000 000 [mobile]. Note that 13 numbers may be 6 or 10 digits, and indicates an Australia wide number. This shouldn't be appropriate for any optical practices, but should be able to be inputted regardless */}

        <FormField 
          fieldType="text" 
          name="phoneNumber"
          label="Phone number" 
          value={data.phoneNumber} 
          onChange={handleChange} 
          alert={alerts ? alerts.phoneNumber : providerAlerts.phoneNumber}
          id="phoneNumber"
          maxlength="10"
          className="phoneNo-field form-field"
        />

        <FormField 
          fieldType="text" 
          name="prescriberNumber"
          label="Prescriber number" 
          value={data.prescriberNumber} 
          onChange={handleChange} 
          alert={alerts ? alerts.prescriberNumber : providerAlerts.prescriberNumber}
          maxlength="7"
          className="prescriberNo-field form-field"
        />

        {/* Only visible on standalone forms */}
        <button onClick={(event) => {
          event.preventDefault(); 
          if (checkFormValidation()) {
            handleSubmit(event);
          }
        }}>Save</button>

        <button onClick={(event) => {
          event.preventDefault(); 
          // TODO: be able to close form from within 
          handleCancel();
        }}>Cancel</button>
       
      </div>}

      {/* The non standalone form uses the App/RxForm state instead of local state, and is intedend to integrate within the RxForm component */}
      {!standalone && <div className="ProviderForm ProviderForm--integrated">
        <FormField 
          fieldType="text" 
          name="fullName"
          label="Full name" 
          value={data.fullName} 
          onChange={(event) => handleChange(event)} 
          alert={alerts.fullName}
        />    

        <FormField 
          fieldType="checkbox" 
          name="prefix"
          label="Include 'Dr' in provider name" 
          onChange={() => toggleBooleanState(setData, data, 'prefix')}
          checked={data.prefix}
          className="checkbox prefix-field"
          enterFunc={(event) => {
            if (event.keyCode === 13) {
              toggleBooleanState(setData, data, event.target.name);
            }
          }}
        />  

        <FormField 
          fieldType="text" 
          name="qualifications"
          label="Abbreviated qualifications (optional)" 
          placeholder="e.g. BMedSci(VisSc), MOpt"
          value={data.qualifications} 
          onChange={(event) => handleChange(event)} 
          maxlength="40"
        />

        {/* Practice name is only relevant for providers, and even then you might consider omitting this, as there is really no room on the computerised for for practice name */}
        <FormField 
          name="practiceName"
          label="Practice name (optional)" 
          value={data.practiceName} 
          onChange={(event) => handleChange(event)} 
        />

        <AddressAutocomplete 
          data={data}
          setData={setData}
          handleChange={(event) => handleChange(event)}
          provider={true}   
          alerts={alerts}
          setAlerts={setAlerts} 
          googleLoaded={googleLoaded}
        />

        {/* Because this is intended for use only in Australia, present and validate phone numbers in national format, which includes 10 digits for landline and mobile numbers, as follows: 02 1234 4321 [telephone], or 0400 000 000 [mobile]. Note that 13 numbers may be 6 or 10 digits, and indicates an Australia wide number. This shouldn't be appropriate for any optical practices, but should be able to be inputted regardless */}

        <FormField 
          fieldType="text" 
          name="phoneNumber"
          label="Phone number" 
          value={data.phoneNumber} 
          onChange={(event) => handleChange(event)} 
          alert={alerts.phoneNumber}
          id="phoneNumber"
          maxlength="10"
          className="phoneNo-field form-field"
        />

        <FormField 
          fieldType="text" 
          name="prescriberNumber"
          label="Prescriber number" 
          value={data.prescriberNumber} 
          onChange={(event) => handleChange(event)} 
          alert={alerts.prescriberNumber}
          maxlength="7"
          className="prescriberNo-field form-field"
        />
      </div>}
    </>
      
  )
}

export default ProviderForm;
