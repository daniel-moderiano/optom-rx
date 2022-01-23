import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { useState, useEffect } from "react";
import { StyledPrescriberForm } from './PrescriberForm.styled.js'
import Dots from "../utils/Dots/Dots";
import LoadOverlay from "../utils/LoadOverlay/LoadOverlay";
import Button from '../utils/Button/Button';
import { useInputValidation } from "../../hooks/useInputValidation";
import { useFormatting } from "../../hooks/useFormatting";
import { useInputChanges } from "../../hooks/useInputChanges";

// ! Legal requirements include the prescriber's name, address, contact details, and prescriber number

const PrescriberForm = ({ data, setData, googleLoaded, handleSubmit, handleCancel, submitBtnLabel, pending, formPending }) => {

  // Hook usage for formatting and validation purposes
  const { positiveValidationUI, negativeValidationUI, validateRequiredField } = useInputValidation();
  const { abbreviateStateName } = useFormatting();
  const { handleChange, toggleBooleanState, handleEnterKeyOnCheckbox } = useInputChanges();

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
    document.querySelector('.PrescriberForm').addEventListener('focusout', (event) => {
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

    // Validate each field for empty value, but do not provide any positive feedback UI
    requiredFields.forEach((field) => {
      const input = document.querySelector(`[name="${field}"]`);
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
      <StyledPrescriberForm className="PrescriberForm" autoComplete="off" noValidate>
        <div className="fields">
          {formPending && <LoadOverlay />}

          <FormField 
            fieldType="text" 
            name="fullName"
            label="Full name" 
            value={data.fullName} 
            onChange={(event) => handleChange(event, setData)} 
            alert={providerAlerts.fullName}
            required
            describedBy={Object.keys(providerAlerts.fullName).length === 0 ? null : 'fullName-alert'}
          />    

          <FormField 
            fieldType="checkbox" 
            name="prefix"
            label="Include 'Dr' in provider name" 
            onChange={() => toggleBooleanState(setData, data, 'prefix')}
            checked={data.prefix}
            className="checkbox prefix-field"
            enterFunc={(event) => handleEnterKeyOnCheckbox(event, setData, data)}
          />  

          <FormField 
            fieldType="text" 
            name="qualifications"
            label="Abbreviated qualifications (optional)" 
            placeholder="e.g. BMedSci(VisSc), MOpt"
            value={data.qualifications} 
            onChange={(event) => handleChange(event, setData)} 
            maxlength="40"
          />

          {/* Practice name is only used for display purposes to quickly identify the provider to the user */}
          <FormField 
            name="practiceName"
            label="Practice name (optional)" 
            value={data.practiceName} 
            onChange={(event) => handleChange(event, setData)} 
          />

          <AddressAutocomplete 
            data={data}
            setData={setData}
            handleChange={(event) => handleChange(event, setData)}
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
            onChange={(event) => handleChange(event, setData)} 
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
            onChange={(event) => handleChange(event, setData)} 
            alert={providerAlerts.prescriberNumber}
            maxlength="7"
            className="prescriberNo-field form-field"
            required
            describedBy = {Object.keys(providerAlerts.prescriberNumber).length === 0 ? null : 'prescriberNumber-alert'}
          />
        </div>
       
        <div className="PrescriberForm__btns">
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
      </StyledPrescriberForm>
    )
}

export default PrescriberForm;
