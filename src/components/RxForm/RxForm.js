import { useState, useEffect, useCallback } from "react";
import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { StyledRxForm } from "./RxForm.styled";
import DrugAutocomplete from "../DrugAutocomplete/DrugAutocomplete";
import Fieldset from "../utils/Fieldset/Fieldset";
import ProviderForm from "../ProviderForm/ProviderForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { useLocation } from "react-router";
import { useNumbers } from '../../hooks/useNumbers';
import { usePBSFetch } from "../../hooks/usePBSFetch";

// ! Multiple optometrist items are not permitted to be prescribed on the same form; each must use an individual form

const RxForm = ({ handleSubmit, googleLoaded, existingData }) => {
  const [{ scriptNo, authRxNo, isError, isLoading }, fetchNumbers] = useNumbers();
  const { user } = useAuthContext();
  const { documents: providers } = useCollection('providers', ['uid', '==', user.uid]);

  const [{ pbsInfo, pbsError, pbsLoading }, fetchDrug] = usePBSFetch();

  // Can utilise a useEffect such as this to set state or UI elements based on PBS data being fetched or lost
  useEffect(() => {
    // PBS info-related effects here
    if (pbsInfo) {
      console.log(pbsInfo['item-code']);
      // Check for authority
      switch (pbsInfo['restriction-flag']) {
        case 'A':
          console.log('Authority item');
          break;
        
        case 'R':
          console.log('Restricted item');
          break;

        case 'U':
          console.log('Unrestricted item');
          break;
      
        default:
          break;
      }
    } else {
      // Disable authority functions
      console.log('Authority functions disabled');
    }
  }, [pbsInfo])

  // State (at this stage) is only provided if generating a new Rx. Hence the numbers fetch should only be performed when state exists
  const { state } = useLocation();
  
  const [numbersLoaded, setNumbersLoaded] = useState(false);

  const [chosenProvider, setChosenProvider] = useState('---Select provider---');

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

  const [miscAlerts, setMiscAlerts] = useState({
    date: {},   
    authRxNumber: {},    
    authCode: {},    
    scriptID: {},
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
    verified: false,    // Set to true when the user selects an autocomplete option. Set to false on any subsequent     modification of drug information, as this cannot be verified on the PBS. Only those verified drugs should be integrated with PBS backend
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

  const [showProviderForm, setShowProviderForm] = useState(false);

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

  // Pass a set function to handle change, rather than hardcoding with a certain setState function
  const handleChange = (set, event) => {
    const { name, value } = event.target;
    set((prevData) => ({
      ...prevData, 
      [name]: value 
    }));
  };

  // A handle change function specifically for the select element. Sets both the input state and providerData based on selection
  const handleSelectChange = (event) => {
    setChosenProvider(event.target.value);
    // Use the unique document ID to grab the provider from the fetched providers array
    const providerId = event.target.options[event.target.selectedIndex].dataset.id;
    // Note the provider is returned from array.filter as an array, hence destructuring
    const [provider] = providers.filter((provider) => provider.id === providerId);
    setProviderData({
      ...provider,
    })
  }

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

  // Set useNumbers hook variables to local state
  const setNumbers = useCallback(() => {
    setMiscData((prevData) => ({
      ...prevData,
      scriptID: scriptNo,
      authRxNumber: authRxNo,
    }))
  }, [authRxNo, scriptNo])

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

    // ! Medicare card validation should be dependent on PBS Rx yes/no. Not required if Rx is non PBS
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

    const miscDataValidation = () => {
      document.querySelector('.misc-form').addEventListener('focusout', (event) => {
        const { name, value } = event.target
        switch (true) {
          case name === 'date':
            validateRequiredField(setMiscAlerts, event.target);
            break;

          // TODO: validation for authority code where applicable. Potentially enable fields on auto-detect of restricted benefits, or make required on same criteria, but enable at all times

          default:
            break;
        }
      });
    };

    patientDataValidation();
    drugDataValidation();
    miscDataValidation();

  }, [validateRequiredField, positiveInlineValidation, negativeInlineValidation, showProviderForm]);

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

  // Generate the unique script and authRx numbers, and attach them to the local RxForm state. This is only performed when loading the RxForm component using 'Create new prescription' btn
  useEffect(() => {
    if (state) {
      // Use .then() to ensure the above scriptNo and authRxNo variables are set prior to attempting to set data state with them
      fetchNumbers().then(() => {
        setNumbersLoaded((prevData) => prevData ? prevData : !prevData);
      }).catch((error) => {
        console.log(error);
      })
    }
  }, [state, fetchNumbers]);

  // Set local state with authRxNo and scriptNo fetched from firestore. Activates only when the numbers have been fetched on a first time new Rx 
  useEffect(() => {
    if (numbersLoaded) {
      setNumbers();
    }
  }, [numbersLoaded, setNumbers])

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

  const toggleProviderForm = () => {
    if (!showProviderForm) {
      setShowProviderForm((prevState) => !prevState);
    }
  };

  // Ensure form is validated before calling form submission function (to generate Rx)
  const checkFormValidation = () => {
    let valid = true;

    const drugForm = document.querySelector('.drug-form');
    const patientForm = document.querySelector('.patient-form');
    const miscForm = document.querySelector('.misc-form');

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

    // Provider form should only be validated on submission if the form is visible (i.e. the user is editing or using the locum provider feature)
    if (showProviderForm) {
      requiredFields.provider.forEach((field) => {
        const input = document.querySelector('.provider-form').querySelector(`[name="${field}"]`);
        if (input.value.trim().length === 0) {
          valid = false;
          negativeInlineValidation(setProviderAlerts, 'This field cannot be left blank', input);
        }
      });
    }

    requiredFields.misc.forEach((field) => {
      const input = miscForm.querySelector(`[name="${field}"]`);
      if (input.value.trim().length === 0) {
        valid = false;
        negativeInlineValidation(setMiscAlerts, 'This field cannot be left blank', input);
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

    
        
      <Fieldset className="provider-form" legend="Provider Details">

        <div className="provider-controls">
          <div className="form-field">
            <label htmlFor="provider-select" className="select-label">Select provider</label>
            <select value={chosenProvider} name="providerChoice" id="provider-select" className="provider-select" onChange={handleSelectChange}>
              {/* This default option must have a value matching the initial state in chosenProvider to be displayed */}
              <option disabled hidden className="Providers__list-item" value="---Select provider---">---Select provider---</option>
              {/* List to be populated with any available existing providers */}
              {providers && 
                <>
                {providers.map(provider => (
                  <option key={provider.id} data-id={provider.id} className="Providers__list-item" value={provider.fullName}>{provider.fullName}</option>
                ))}  
                </>   
              }
            </select>
          </div>
          <button onClick={(e) => { e.preventDefault(); toggleProviderForm(); }}>Edit selected provider</button>
          <button onClick={(e) => e.preventDefault()}>Create temporary (locum) provider</button>
        </div>

        {showProviderForm && 
          <ProviderForm 
            googleLoaded={googleLoaded}
            standalone={false}
            data={providerData}
            setData={setProviderData}
            handleChange={(event) => handleChange(setProviderData, event)}      
            provider={false}   
            alerts={providerAlerts}
            setAlerts={setProviderAlerts} 
          />
        }
      </Fieldset>

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
            subAlert={patientAlerts.medicareRefNumber}
            maxlength="10"
            className="medicareNumber-field medicare-field form-field"
          />

          {/* Validation dictates only a single digit from 1-9 */}
          <FormField 
            fieldType="text" 
            name="medicareRefNumber"
            label="IRN" 
            value={patientData.medicareRefNumber} 
            onChange={(event) => handleChange(setPatientData, event)} 
            // alert={patientAlerts.medicareRefNumber}
            maxlength="1"
            className="irn-field medicare-field form-field"
          />
        </div>     
      </Fieldset>

      {/* Note there must be enough info to identify the medicine, including form and strength */}
      <Fieldset className="drug-form" legend="Medication Details">

        <DrugAutocomplete 
          data={drugData}
          setData={setDrugData}
          handleChange={(event) => handleChange(setDrugData, event)}  
          toggle={toggleBooleanState}
          alerts={drugAlerts}
          setAlerts={setDrugAlerts}
          fetchDrug={fetchDrug}
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

      {/* Note there must be enough info to identify the medicine, including form and strength */}
      <Fieldset className="misc-form" legend="PBS and Other Details">

        <FormField 
          fieldType="checkbox" 
          name="pbsRx"
          label="PBS prescription" 
          onChange={() => toggleBooleanState(setDrugData, drugData, 'pbsRx')}
          checked={drugData.pbsRx}
          className="checkbox pbsRx"
        />  

        <FormField 
          fieldType="checkbox" 
          name="pbsRx"
          label="Authority required" 
          onChange={() => toggleBooleanState(setDrugData, drugData, 'authRequired')}
          checked={drugData.authRequired}
          className="checkbox authRequired"
        />    

        {/* Consider a variable message beside or below this saying 'not required for this medication' or similar */}
        <FormField 
          fieldType="text" 
          name="authCode"
          label="Authority code (where applicable)" 
          value={miscData.authCode} 
          onChange={(event) => handleChange(setMiscData, event)} 
          alert={miscAlerts.authCode}
        />

        <FormField 
          fieldType="date" 
          name="date"
          label="Date" 
          value={miscData.date} 
          onChange={(event) => handleChange(setMiscData, event)} 
          alert={miscAlerts.date}
        />

        {/* Authority Rx numbers and ScriptID here */}
        <div className="numbers" data-testid="numbers">
          <div className="scriptNo" data-testid="scriptNo">Script number: {isLoading ? 'Loading...' : miscData.scriptID}</div>
          {/* drugData.authRequired should be auto-selected once PBS integration is complete, but should also have an option to set manually */}
          {drugData.authRequired && <div className="authRxNo" data-testid="authRxNo">AuthRx number: {isLoading ? 'Loading...' : miscData.authRxNumber}</div>}
        </div>

        {isError && <div className="numbers__error">Something went wrong</div>}


      </Fieldset>

      <button type="submit" className="btn btn-generate">Generate prescription</button>
      
    </StyledRxForm>
  )
}

export default RxForm
