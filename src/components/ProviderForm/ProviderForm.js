import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { useState, useEffect } from "react";
import { StyledProviderForm } from './ProviderForm.styled.js'
import Dots from "../utils/Dots/Dots";
import LoadOverlay from "../utils/LoadOverlay/LoadOverlay";
import Button from '../utils/Button/Button';
import { useValidation } from "../../hooks/useValidation";

// ! Legal requirements include the prescriber's name, address, contact details, and prescriber number

const ProviderForm = ({ data, setData, handleChange, toggleBooleanState, googleLoaded, handleSubmit, handleCancel, submitBtnLabel, pending, formPending }) => {

  const { positiveValidationUI, negativeValidationUI, validateRequiredField } = useValidation();

  const [providerAlerts, setProviderAlerts] = useState({
    fullName: {},
    streetAddress: {},
    suburb: {},
    postcode: {},
    state: {},
    phoneNumber: {},
    prescriberNumber: {},
  });

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
    document.querySelector('.ProviderForm').addEventListener('focusout', (event) => {
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
            // Provide general error message
            negativeValidationUI(setProviderAlerts, 'A valid Australian phone number is required', event.target);
          } else {
            positiveValidationUI(setProviderAlerts, event.target);
          }
          break;

        case name === 'prescriberNumber':
          // Check for digits only
          if (!(/^[0-9]{7}$/).test(value.trim())) {
            // Sets an alert object in the state, which will immediately cause the component to render an alert message
            negativeValidationUI(setProviderAlerts, 'Prescriber number must be a seven digit number', event.target);
          } else {
            positiveValidationUI(setProviderAlerts, event.target);
          }
          break;
      
        default:
          break;
      }
    });    
  }, [setData, negativeValidationUI, positiveValidationUI, validateRequiredField]);

  // Ensure form is validated before calling form submission function (standalone form only)
  const checkFormValidation = () => {
    let valid = true;
    let inputFocused = false;
    const requiredFields = [
      'fullName',
      'streetAddress',
      'suburb',
      'postcode',
      'state',
      'phoneNumber',
      'prescriberNumber',
    ];

    const form = document.querySelector('.ProviderForm');

    requiredFields.forEach((field) => {
      const input = form.querySelector(`[name="${field}"]`);
      if (input.value.trim().length === 0) {
        if (!inputFocused) {
          input.focus();
          inputFocused = true;
        }
        valid = false;
        negativeValidationUI(setProviderAlerts, 'This field cannot be left blank', input);
      }
    });

    return valid;
  }

  return (
      <StyledProviderForm className="ProviderForm" autoComplete="off" noValidate>
        <div className="fields">
          {formPending && <LoadOverlay />}

          <FormField 
            fieldType="text" 
            name="fullName"
            label="Full name" 
            value={data.fullName} 
            onChange={handleChange} 
            alert={providerAlerts.fullName}
            required
            describedBy={Object.keys(providerAlerts.fullName).length === 0 ? null : 'fullName-alert'}
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
                event.preventDefault();
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
            alerts={providerAlerts}
            setAlerts={setProviderAlerts} 
            googleLoaded={googleLoaded}
          />

          <FormField 
            fieldType="text" 
            name="phoneNumber"
            label="Phone number" 
            value={data.phoneNumber} 
            onChange={handleChange} 
            alert={providerAlerts.phoneNumber}
            id="phoneNumber"
            maxlength="10"
            className="phoneNo-field form-field"
            required
            describedBy = {Object.keys(providerAlerts.phoneNumber).length === 0 ? null : 'phoneNumber-alert'}
          />

          <FormField 
            fieldType="text" 
            name="prescriberNumber"
            label="Prescriber number" 
            value={data.prescriberNumber} 
            onChange={handleChange} 
            alert={providerAlerts.prescriberNumber}
            maxlength="7"
            className="prescriberNo-field form-field"
            required
            describedBy = {Object.keys(providerAlerts.prescriberNumber).length === 0 ? null : 'prescriberNumber-alert'}
          />
        </div>
       
        <div className="ProviderForm__btns">
          <Button 
            classLabel="submit" 
            handleClick={(event) => {
              event.preventDefault(); 
              if (checkFormValidation()) {
                handleSubmit(event);
              }
            }}>
            {pending ? (
              <Dots color="white" />
              ) : (
              `${submitBtnLabel}`
            )}
          </Button>

          <Button 
            design="secondary" 
            handleClick={(event) => {
              event.preventDefault(); 
              handleCancel();
            }}>
            Cancel
          </Button>
        </div>
      </StyledProviderForm>
    )
}

export default ProviderForm;
