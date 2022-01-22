import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { useState, useEffect } from "react";
import { StyledProviderForm } from './ProviderForm.styled.js'
import Dots from "../utils/Dots/Dots";
import LoadOverlay from "../utils/LoadOverlay/LoadOverlay";
import Button from '../utils/Button/Button';
import { useValidation } from "../../hooks/useValidation";
import { useFormatting } from "../../hooks/useFormatting";

// ! Legal requirements include the prescriber's name, address, contact details, and prescriber number

const ProviderForm = ({ data, setData, handleChange, toggleBooleanState, googleLoaded, handleSubmit, handleCancel, submitBtnLabel, pending, formPending }) => {

  // Hook usage for formatting and validation purposes
  const { positiveValidationUI, negativeValidationUI, validateRequiredField } = useValidation();
  const { abbreviateStateName } = useFormatting();

  const [providerAlerts, setProviderAlerts] = useState({
    fullName: {},
    streetAddress: {},
    suburb: {},
    postcode: {},
    state: {},
    phoneNumber: {},
    prescriberNumber: {},
  });

  // Inline form validation using focusout as a trigger. All included functions are written in useCallback to ensure this is only run once initially (no duplicate listeners).
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
            [name]: abbreviateStateName(value), 
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
  }, [setData, negativeValidationUI, positiveValidationUI, validateRequiredField, abbreviateStateName]);


  // Ensure form is validated with no empty required fields before calling form submission function
  const checkFormValidation = () => {
    let valid = true;
    let inputFocused = false;

    // Fields that must not be left empty
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

    // Validate each field for empty value, but do not provide any positive feedback UI
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
