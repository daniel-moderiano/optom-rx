import { useState, useEffect, useCallback } from "react";
import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { StyledRxForm } from "./RxForm.styled";
import DrugAutocomplete from "../DrugAutocomplete/DrugAutocomplete";
import Fieldset from "../utils/Fieldset/Fieldset";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { useLocation } from "react-router";
import { useNumbers } from '../../hooks/useNumbers';
import { usePBSFetch } from "../../hooks/usePBSFetch";
import Select from 'react-select';
import { Link } from "react-router-dom";
import Spinner from "../utils/Spinner/Spinner";
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PageHeader from '../utils/PageHeader/PageHeader';
import Button from '../utils/Button/Button'

// ! Multiple optometrist items are not permitted to be prescribed on the same form; each must use an individual form

const RxForm = ({ handleSubmit, googleLoaded, existingData, resetData, setPage }) => {
  const [{ scriptNo, authRxNo, isError, isLoading }, fetchNumbers] = useNumbers();
  const { user } = useAuthContext();

  const { documents: providers, isPending, error } = useCollection('providers', ['uid', '==', user.uid]);

  const [{ pbsInfo, pbsError, pbsLoading }, fetchDrug, clearPbsState] = usePBSFetch(existingData.pbsData);

  const [authorityMessage, setAuthorityMessage] = useState('Please select a medication for authority requirements')

  const [indication, setIndication] = useState('');
  const [expandIndication, setExpandIndication] = useState(false);

  const [showTooltip, setShowTooltip] = useState(true);
  const [tooltipText, setTooltipText] = useState('');

  const [selectOptions, setSelectOptions] = useState([]);

  // State (at this stage) is only provided if generating a new Rx. Hence the numbers fetch should only be performed when state exists
  const { state } = useLocation();
  
  const [numbersLoaded, setNumbersLoaded] = useState(false);

  const [chosenProvider, setChosenProvider] = useState("");

  const [drugAlerts, setDrugAlerts] = useState({
    name: {},
    quantity: {},
    repeats: {},
    dosage: {},
    pbsRx: {},
    maxQuantity: {},
    maxRepeats: {},
    activeIngredient: {},
  });

  const [patientAlerts, setPatientAlerts] = useState({
    fullName: {},
    streetAddress: {},
    suburb: {},
    postcode: {},
    state: {},
    medicareNumber: {},
    medicareRefNumber: {},
    noMedicare: {},
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
    justification: {},
    prevAuth: {},
    age: {},
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
    pbsRx: false,    // Indicates whether this is a PBS prescription 
    compounded: false,
    verified: false,    // Set to true when the user selects an autocomplete option. Set to false on any subsequent     modification of drug information, as this cannot be verified on the PBS. Only those verified drugs should be integrated with PBS backend
    indications: '',    // Indications for the use of drug under PBS restriction
    authRequired: false,
    maxQuantity: '',
    maxRepeats: '',
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
    noMedicare: false,
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
    justification: '',  // The reason why the drug was used (authority scripts only)
    prevAuth: false,    // Has the patient received prior authority for this medication. Required for auth scripts
    age: '',    // Required only if the patient is under 18 years of age, again for auth scripts
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
      // 'medicareNumber',
      // 'medicareRefNumber',
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

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('form');
  }, [setPage])

  // Update the default option in the providers select with a default provider (if available) 
  useEffect(() => {
    // Do not run unless a providers collection exists (i.e. before fetch has occured, or potentially for guest forms)
    if (providers) {
      providers.forEach((provider) => {
        // Check for a default provider
        if (provider.default) {
          // Update the select element accordingly
          setChosenProvider({ label: `${provider.fullName} (${(provider.practiceName !== "") ? provider.practiceName + `, ${provider.suburb}`: provider.suburb})`, value: provider.id });
          // Also set state to provider data to ensure the form is pre-filled
          setProviderData({
            ...provider,
          })
        }
      })
    }
  }, [providers]);

  // Remove all PBS related information from local state
  const clearPbsInfo = useCallback(() => {
    setDrugData((prevData) => ({
      ...prevData,
      authRequired: false,
      indications: '',
      maxQuantity: '',
      maxRepeats: '',
    }));

    setMiscData((prevData) => ({
      ...prevData,
      authCode: '',
    }));

    setMiscAlerts((prevAlerts) => ({
      ...prevAlerts,
      authCode: {}
    }));

  }, []);

  const formatIndications = (indicationStr) => {
    const clinical = indicationStr.includes('Clinical criteria');
    const treatment = indicationStr.includes('Treatment criteria');


    // TODO: consider link to PBS site for ciclosporin
    
    if (clinical) {
      // Extract the main general indication (prior to any specific criteria). Will work even where there is no additional text
      const mainIndication = indicationStr.split('Clinical criteria')[0].trim();
      const splitIndication = indicationStr.split('Clinical criteria');
      // Add 'Clinical criteria' to final html and format accordingly
      const specificCriteria = splitIndication[1];
      let preAnd = specificCriteria.split('AND')[0];
      preAnd = preAnd.replace(':', '').replace('*', '').trim();
      preAnd = preAnd.slice(0, preAnd.length - 1);

      if (specificCriteria.split('AND').length > 1) {
        const postAnd = specificCriteria.split('AND')[1];
        const dotPoints = postAnd.split('* ').filter((point) => point !== " ");      
  
        const mapPoints = () => {
          const ul = document.createElement('ul');
          dotPoints.forEach((point) => {
            const li = document.createElement('li');
            li.classList.add('indication__list-item');
            li.textContent = point;
            ul.appendChild(li);
          });
          return ul.outerHTML;
        }
        const html = `<div class="indication">

          <div class="indication__main">${mainIndication}</div>
          <div class="indication__extra">
            <div class="indication__clinical">Clinical criteria:</div>
              <ul class="indication__list">
                <li class="indication__list-item">${preAnd}</li>
              </ul>
            <div class="indication__and">AND</div>
            ${mapPoints()}
          </div>     
        </div>`;
        setIndication(html);
      } else {
        const html = `<div class="indication">
          <div class="indication__main">${mainIndication}</div>
          <div class="indication__extra">
          <div class="indication__clinical">Clinical criteria:</div>
            <ul class="indication__list">
              <li class="indication__list-item">${preAnd}</li>
            </ul>
          </div>
        </div>`;
        setIndication(html);
      }
  

    } else if (treatment) {
      // Extract the main general indication (prior to any specific criteria). Will work even where there is no additional text
      const mainIndication = indicationStr.split('Treatment criteria')[0].trim();
      const splitIndication = indicationStr.split('Treatment criteria');
      // Add 'Treatment criteria' to final html and format accordingly
      const specificCriteria = splitIndication[1];
      let preAnd = specificCriteria.split('AND')[0];
      preAnd = preAnd.replace(':', '').replace('*', '').trim();
      preAnd = preAnd.slice(0, preAnd.length - 1);

      if (specificCriteria.split('AND').length > 1) {
        const postAnd = specificCriteria.split('AND')[1];
        const dotPoints = postAnd.split('* ').filter((point) => point !== " ");      
  
        const mapPoints = () => {
          const ul = document.createElement('ul');
          dotPoints.forEach((point) => {
            const li = document.createElement('li');
            li.classList.add('indication__list-item');
            li.textContent = point;
            ul.appendChild(li);
          });
          return ul.outerHTML;
        }
        const html = `<div class="indication">
          <div class="indication__main">${mainIndication}</div>
          <div class="indication__extra">
          <div class="indication__clinical">Treatment criteria:</div>
            <ul class="indication__list">
              <li class="indication__list-item">${preAnd}</li>
            </ul>
          <div class="indication__and">AND</div>
          ${mapPoints()}
          </div>
        </div>`;
        setIndication(html);
      } else {
        const html = `<div class="indication">
          <div class="indication__main">${mainIndication}</div>
          <div class="indication__extra">
          <div class="indication__clinical">Treatment criteria:</div>
            <ul class="indication__list">
              <li class="indication__list-item">${preAnd}</li>
            </ul>
          </div>
        </div>`;
        setIndication(html);
      }
  
    } else {
      // Must be just a single indication
      
      const html = `<div className="indication">
        <div className="indication__main">${indicationStr}</div>
      </div>`;
      setIndication(html);

    }
  }
  
  const authorityStatus = useCallback(() => {
    // PBS info-related effects here
    if (pbsInfo) {
      // All authority required items will have flag 'A'. Set auth status accordingly
      if (pbsInfo['restriction-flag'] === 'A' && drugData.pbsRx) {
        setDrugData((prevData) => ({
          ...prevData,
          authRequired: true,
        }));
        if (pbsInfo['streamline-code'].length > 0) {
          setMiscAlerts((prevAlerts) => ({
            ...prevAlerts,
            authCode: {
              message: 'This medication is available using the streamline code above',
              type: 'success',
            }
          }));
          setMiscData((prevData) => ({
            ...prevData,
            authCode: pbsInfo['streamline-code'],
          }));
          // TODO: Success class added to streamline code
        } else {
          setMiscAlerts((prevAlerts) => ({
            ...prevAlerts,
            authCode: {
              message: 'This medication requires an authority code, which can be obtained through PRODA',
              type: 'neutral',
            }
          }));
        }
      } else {
        setDrugData((prevData) => ({
          ...prevData,
          authRequired: false,
        }));
        setAuthorityMessage('This prescription does not require authority');
      }
    }

    // Toggle any PBS-related functionality if there is a change in verified status. 
    if (!drugData.verified) {
      clearPbsInfo();
      clearPbsState();
      setDrugAlerts((prevAlerts) => ({
        ...prevAlerts,
        pbsRx: {
          message: 'Select a medication from the dropdown list for PBS information',
          type: 'neutral',
        }
      }));
      // Only bother with an authority message to select a dropdown medication IF the user is trying to prescribe on PBS
      if (drugData.pbsRx) {
        setAuthorityMessage('Select a medication from the dropdown list for authority information');
      } else {
        setAuthorityMessage('This prescription does not require authority');
      }
    }

  }, [pbsInfo, drugData.verified, clearPbsInfo, clearPbsState, drugData.pbsRx]);

  // Identify whether a drug on the PBS is restricted or not, and display indications for use on restricted items
  const restrictedStatus = useCallback(() => {
  
    // PBS info-related effects here
    if (pbsInfo) {
      // Check for restricted status
      switch (pbsInfo['restriction-flag']) {
        case 'R':
          setDrugAlerts((prevAlerts) => ({
            ...prevAlerts,
            pbsRx: {
              message: 'This is item is available on the PBS (restrictions apply)',
              type: 'neutral',
            }
          }));
          // Add the indication to the local drugData state to allow certain conditional renders
          setDrugData((prevData) => ({
            ...prevData,
            indications: pbsInfo.indications.description,
          }));
          formatIndications(pbsInfo.indications.description);
          // setAuthorityMessage('This prescription does not require authority');
          break;

        case 'U':
          setDrugAlerts((prevAlerts) => ({
            ...prevAlerts,
            pbsRx: {
              message: 'This is item is available on the PBS (unrestricted)',
              type: 'neutral',
            }
          }));
          // Remove the indication to the local drugData state to allow certain conditional renders
          setDrugData((prevData) => ({
            ...prevData,
            indications:'',
          }));
          // setAuthorityMessage('This prescription does not require authority');
          break;
      
        // All 'A' class items are also restricted with indications or Treatment criteria
        case 'A':
          setDrugAlerts((prevAlerts) => ({
            ...prevAlerts,
            pbsRx: {
              message: 'This item is available on the PBS (authority required)',
              type: 'neutral',
            }
          }));
          setDrugData((prevData) => ({
            ...prevData,
            indications: pbsInfo.indications.description,
          }));
          formatIndications(pbsInfo.indications.description);
          if (drugData.pbsRx) {
            setAuthorityMessage('This item requires an authority prescription');
          }
          break;

        default:
          break;
      }
    } else {
      // TODO: consider disabling PBS checkbox and authority related fields
      // clearPbsInfo();
      setDrugAlerts((prevAlerts) => ({
        ...prevAlerts,
        pbsRx: {
          message: 'This item is not available on the PBS',
          type: 'neutral',
        }
      }));
    }

    // Toggle any PBS-related functionality if there is a change in verified status. 
    if (!drugData.verified) {
      clearPbsInfo();
      clearPbsState();
      setDrugAlerts((prevAlerts) => ({
        ...prevAlerts,
        pbsRx: {
          message: 'Select a medication from the dropdown list for PBS information',
          type: 'neutral',
        }
      }));
      // Only bother with an authority message to select a dropdown medication IF the user is trying to prescribe on PBS
      if (drugData.pbsRx) {
        setAuthorityMessage('Select a medication from the dropdown list for authority information');
      } else {
        setAuthorityMessage('This prescription does not require authority');
      }
    } 
  }, [pbsInfo, drugData.verified, clearPbsInfo, clearPbsState, drugData.pbsRx]);

  const quantityRepeatStatus = useCallback(() => {

    // PBS info-related effects here
    if (pbsInfo) {
      // All PBS drugs have restrictions on quantity and repeats; set to local state
      setDrugData((prevData) => ({
        ...prevData,
        maxRepeats: pbsInfo['repeats'],
        maxQuantity: pbsInfo['mq'],
      }));
    }

    // Toggle any PBS-related functionality if there is a change in verified status. 
    if (!drugData.verified) {
      clearPbsInfo();
      clearPbsState();
      setDrugAlerts((prevAlerts) => ({
        ...prevAlerts,
        pbsRx: {
          message: 'Select a medication from the dropdown list for PBS information',
          type: 'neutral',
        }
      }));
      if (drugData.pbsRx) {
        setAuthorityMessage('Select a medication from the dropdown list for authority information');
      } else {
        setAuthorityMessage('This prescription does not require authority');
      }
    } 

  }, [pbsInfo, drugData.verified, clearPbsInfo, clearPbsState, drugData.pbsRx]);

  // Identify whether a drug on the PBS is restricted or not, and display indications for use on restricted items
  const lemiStatus = useCallback(() => {
    // PBS info-related effects here
    if (pbsInfo) {
      // Check for lemi and/or lmbc status
      if (pbsInfo['lemi']) {
        // Medicine is recommended to prescribe by brand only
        setDrugData((prevData) => ({
          ...prevData,
          brandOnly: true,
        }));
        setTooltipText(`<span>This item is included on the <a target="_blank" href="https://www.safetyandquality.gov.au/publications-and-resources/resource-library/list-excluded-medicinal-items-lemi">List of Excluded Medicinal Items (LEMI)</a>, and should be prescribed by brand name only for practical and safety reasons</span>`);
      } else if (pbsInfo['lmbc']) {
        // Medicine is recommended to have brand name included
        setDrugData((prevData) => ({
          ...prevData,
          brandOnly: false,
          includeBrand: true,
        }));
        setTooltipText(`<span>This item is included on the <a target="_blank" href="https://www.safetyandquality.gov.au/publications-and-resources/resource-library/list-medicines-brand-consideration-lmbc">List of Medicines for Brand Consideration (LMBC)</a>. Prescribers should consider prescribing by brand as well as active ingredient for patient safety</span>`);
      } else {
        // Neither LEMI nor LMBC listed; prescribe by active ingredient only
        setDrugData((prevData) => ({
          ...prevData,
          brandOnly: false,
          includeBrand: false,
        }));
        setTooltipText('<span>This item should be prescribed by active ingredient only</span>');
      }
      // Show tooltip
      if (!showTooltip) {
        setShowTooltip((prevData) => !prevData);
        setTooltipText('');
      }
    }
    
    // Hide the tooltip if the user changes the medication manually, but leave the lemi/lmbc settings unchanged
    if (!drugData.verified) {
      if (showTooltip) {
        setShowTooltip((prevData) => !prevData);
      }
    } 
  }, [pbsInfo, drugData.verified, setShowTooltip, showTooltip]);

  // Can utilise a useEffect such as this to set state or UI elements based on PBS data being fetched or lost
  // Note that these PBS-related functions MUST only be performed on drug data with the verified: true tag
  useEffect(() => {
    restrictedStatus();
    authorityStatus();
    quantityRepeatStatus();
    lemiStatus();
  }, [restrictedStatus, authorityStatus, quantityRepeatStatus, lemiStatus, pbsInfo])


  // Used to manage alerts on max quantity and repeats under the PBS
  useEffect(() => {
    // Ensures the call happens when a max quantity and repeat are added
    if (drugData.maxQuantity.length > 0 && drugData.maxRepeats.length > 0 && drugData.pbsRx) {
      setDrugAlerts((prevAlerts) => ({
        ...prevAlerts,
        maxQuantity: {
          message: `Maximum allowed quantity under the PBS is ${drugData.maxQuantity}`,
          type: 'neutral',
        },
        maxRepeats: {
          message: `Maximum allowed repeats under the PBS is ${drugData.maxRepeats}`,
          type: 'neutral',
        }
      }));
    } else {
      // If the above condition isn't met, it means the quantity and repeat values are gone, so no valid PBS drug exists. hence remove all alerts
      setDrugAlerts((prevAlerts) => ({
        ...prevAlerts,
        maxQuantity: {},
        maxRepeats: {},
      }));
    }
  }, [drugData.maxRepeats, drugData.maxQuantity, drugData.pbsRx]);


  const changeOnEnter = (event, setFunc, data) => {    
    // If the enter key is pressed
    if (event.keyCode === 13) {
      event.preventDefault();
      toggleBooleanState(setFunc, data, event.target.name);
    }
  }

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
            // Verify as standard
            if (value.trim().length === 0) {
              negativeInlineValidation(setDrugAlerts, 'This field cannot be left blank', event.target);
            } else if (!(/^[1-9][0-9]*$/).test(value.trim())) {
              // Checks for non-zero number with no theoretical limit
              negativeInlineValidation(setDrugAlerts, 'Please enter a quantity of 1 or more (with no leading zeroes)', event.target);
            } else {
              positiveInlineValidation(setDrugAlerts, event.target);
            }  
            break;

          // Can be zero, and for non-PBS prescriptions, there is technically no upper limits
          case name === 'repeats':
            // Verify as standard
            if (value.trim().length === 0) {
              negativeInlineValidation(setDrugAlerts, 'This field cannot be left blank', event.target);
            } else if (!(/^([1-9][0-9]*)|(0)$/).test(value.trim())) {
              // Checks for non-zero number with no theoretical limit
              negativeInlineValidation(setDrugAlerts, 'Please enter a valid number (no leading zeroes)', event.target);
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

    const miscDataValidation = () => {
      document.querySelector('.misc-form').addEventListener('focusout', (event) => {
        const { name } = event.target
        switch (true) {
          case name === 'date':
            validateRequiredField(setMiscAlerts, event.target);
            break;
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
      // Checks for newRx button having been pressed
      if (state.newRx) {
        // Use .then() to ensure the above scriptNo and authRxNo variables are set prior to attempting to set data state with them
        fetchNumbers().then(() => {
          setNumbersLoaded((prevData) => prevData ? prevData : !prevData);
        }).catch((error) => {
          console.log(error);
        })

        // Also reset all existing data 
        resetData();
        setDrugData({
          activeIngredient: '',
          brandName: '',
          quantity: '',
          repeats: '',
          dosage: '',
          itemCode: '',
          substitutePermitted: true,    
          brandOnly: false, 
          includeBrand: false,    
          pbsRx: false,   
          compounded: false,
          verified: false,   
          indications: '', 
          authRequired: false,
          maxQuantity: '',
          maxRepeats: '',
        });

        setPatientData({
          fullName: '',
          streetAddress: '',
          subpremise: '',
          suburb: '',
          postcode: '',
          state: '',
          medicareNumber: '',
          medicareRefNumber: '',
          noMedicare: false,
        });

        setMiscData((prevData) => ({
          ...prevData,
          authRxNumber: '',  
          authCode: '',    
          scriptID: '',   
          justification: '',
          prevAuth: false,
          age: '',
        }));
     
      }
      // If the user has clicked a prescribe or re-prescribe button to get here then newRx should still be present, but this additional logic must be run
      if (state.rePrescribe) {
        console.log(state.scriptData);
        // State will have scriptData attached. Set it to local state here at form initialisation
        setDrugData((prevData) => ({
          ...prevData,
          activeIngredient: state.scriptData.activeIngredient,
          brandName: state.scriptData.brandName,
          quantity: state.scriptData.quantity,
          repeats: state.scriptData.repeats,
          dosage: state.scriptData.dosage,
          itemCode: state.scriptData.itemCode,
          substitutePermitted: state.scriptData.substitutePermitted,    
          brandOnly: state.scriptData.brandOnly, 
          includeBrand: state.scriptData.includeBrand,    
          pbsRx: state.scriptData.pbsRx,   
          compounded: state.scriptData.compounded,
          verified: state.scriptData.verified,   
        }));

        // Leave the verified status intact from the original script. Re-call the fetchDrug function; thereby updating all the authority, maxQuantity/repeats, PBS indications, and other related PBS/LEMI features

        // It is possible the drug data will be different from when the drug was initially prescribed. This will update when the fetch call is made, but some of the original script parameters (e.g. max quantity, repeats, or LEMI) may be inappropriate, and the user will not be aware. Consider a modal for scripts older than X months warning the user, or even manually add later if PBS undergoes major changes down the line
        fetchDrug(state.scriptData.itemCode);
      }
    }
  }, [state, fetchNumbers, resetData, fetchDrug]);

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

  

  // Ensure form is validated before calling form submission function (to generate Rx)
  const checkFormValidation = () => {
    let valid = true;
    let inputFocused = false;

    const drugForm = document.querySelector('.drug-form');
    const patientForm = document.querySelector('.patient-form');
    const miscForm = document.querySelector('.misc-form');

     // Validation is conditional upon whether medicare details were intended to be included by the user or not
     requiredFields.patient.forEach((field) => {
      if (patientData.noMedicare && field === 'medicareNumber') {
        // Do not validate
      } else if (patientData.noMedicare && field === 'medicareRefNumber') {
        // Do not validate
      } else {
        // Validate as normal
        const input = patientForm.querySelector(`[name="${field}"]`);

        if (input.value.trim().length === 0) {
          if (!inputFocused) {
            input.focus();
            inputFocused = true;
          }
          valid = false;
          negativeInlineValidation(setPatientAlerts, 'This field cannot be left blank', input);
        }
      }      
    });

    requiredFields.drug.forEach((field) => {
      const input = drugForm.querySelector(`[name="${field}"]`);
      if (input.value.trim().length === 0) {
        if (!inputFocused) {
          input.focus();
          inputFocused = true;
        }
        valid = false;
        negativeInlineValidation(setDrugAlerts, 'This field cannot be left blank', input);
      }
    });


    if (drugData.brandOnly || drugData.includeBrand) {
      if(!validateFieldForEmpty(setDrugAlerts, document.querySelector('#brandName'))) {
        // if (!inputFocused) {
        //   document.querySelector('#brandName').focus();
        //   inputFocused = true;
        // }
        valid = false;
      }
    }

  
    requiredFields.misc.forEach((field) => {
      const input = miscForm.querySelector(`[name="${field}"]`);
      if (input.value.trim().length === 0) {
        if (!inputFocused) {
          input.focus();
          inputFocused = true;
        }
        valid = false;
        negativeInlineValidation(setMiscAlerts, 'This field cannot be left blank', input);
      }
    });

    

    // Finally, check for any active error alerts that were not detected with the more basic submission validation
    if (document.querySelectorAll('.alert--error').length > 0) {
      valid = false;
    }

    return valid;
  };

  useEffect(() => {
    if (providers) {
      
      setSelectOptions(providers.map((provider) => ({
        value: provider.id,
        label: `${provider.fullName} (${(provider.practiceName !== "") ? provider.practiceName + `, ${provider.suburb}`: provider.suburb})`,
      })));
    }
  }, [providers]);

  // A handle change function specifically for the select element. Sets both the input state and providerData based on selection
  const handleSelectChange = (event) => {
    setChosenProvider(event);
    // Use the unique document ID to grab the provider from the fetched providers array
    const providerId = event.value;
    // Note the provider is returned from array.filter as an array, hence destructuring
    const [provider] = providers.filter((provider) => provider.id === providerId);
    setProviderData({
      ...provider,
    })
  }  

      // box-shadow: 0 0 0 1px #a360ac;

  const customStyles = {
    control: (base, state) => ({
      ...base,
      // border: state.isFocused ? '1px solid #104362' : '1px solid rgb(144, 147, 150)',
      // boxShadow: state.isFocused ? '0 0 0 1px #104362' : '0',
      '&:hover': { 
        borderColor: state.isFocused ? '#104362' : 'rgb(178, 182, 185)',
        cursor: 'pointer'
      },

      border: state.isFocused ? '1px solid rgb(144, 147, 150)' : '1px solid rgb(144, 147, 150)',
      boxShadow: state.isFocused ? '0' : '0',

      
      outline: state.isFocused ? "2px solid #104362" : 'none',
        outlineOffset: state.isFocused ? "2px" : 'none',
      
      width: '26rem',
      padding: '0.12rem 0 0.11rem 0.85rem',
      borderRadius: '4px',
      fontSize: "1rem",
      marginTop: '0.5rem',
      marginBottom: '0.5rem',

      "@media (max-width: 590px)": {
        width: "100%",
        maxWidth: "26rem",
        marginRight: "1.5rem",
      },

    }),

    menu: (base, state) => ({
      ...base,
      maxWidth: "26rem",
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      paddingLeft: '0',
    }),
  }

  return (
    <ContentContainer>
      <PageHeader title="New prescription" description="Fill out the details required to prescribe"/>
<StyledRxForm 
      className="rxform" 
      onSubmit={(e) => {
        e.preventDefault(); 
        if (checkFormValidation()) {          

          handleSubmit(drugData, patientData, providerData, miscData, pbsInfo)
        }
      }}
      autoComplete="off"
      noValidate>
      <div className="scriptNo" data-testid="scriptNo">Script number: {isLoading ? 'Loading...' : miscData.scriptID}</div>

      <Fieldset className="provider-form select-fieldset" legend="Provider Details">

        <div className="provider-controls">
          {isPending && <Spinner />}
          {providers && (<>
            {(providers.length > 0) ? (
              <>
                <label id="react-select-id">Select provider
                <Select 
                  options={selectOptions} 
                  isSearchable={false}
                  value={chosenProvider}
                  onChange={handleSelectChange}
                  styles={customStyles}
                  placeholder="Select provider..."
                  id="react-select"
                  required
                  aria-labelledby="react-select-id"
                  label="Select provider"
                /> 
                </label>
              </>
            ) : (
              <Link className="provider-addBtn provider-addBtn--solo" to="/add-provider">Add new provider</Link>
            )}
          </>)}
        </div>
        

        
            
      
        
       
      
      </Fieldset>

      <Fieldset className="patient-form" legend="Patient Details">
      {/* Legal requirements include only the patient's name and address */}

        {/* A max length for these fields based on the physical space available on the Rx pad is possible, however there should be virtually no cases where this is a problem. If anything, a warning alert could be added for fields such as full name, and street address/suburb where the char length exceeds 40 */}
        <FormField 
          fieldType="text" 
          name="fullName"
          label="Full name" 
          value={patientData.fullName} 
          onChange={(event) => handleChange(setPatientData, event)} 
          alert={patientAlerts.fullName}
          autoFocus
          required
          describedBy = {Object.keys(patientAlerts.fullName).length === 0 ? null : 'fullName-alert'}
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
        {!patientData.noMedicare &&
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
            required
            describedBy = {Object.keys(patientAlerts.medicareNumber).length === 0 ? null : 'medicareNumber-alert'}
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
            required
            describedBy = {Object.keys(patientAlerts.medicareRefNumber).length === 0 ? null : 'medicareRefNumber-alert'}
          />
        </div>
        }     

        <FormField 
          fieldType="checkbox" 
          name="noMedicare"
          label="Do not include Medicare details" 
          onChange={() => toggleBooleanState(setPatientData, patientData, 'noMedicare')}
          checked={patientData.noMedicare}
          className="checkbox noMedicare"
          enterFunc={(event) => changeOnEnter(event, setPatientData, patientData)}
        />  

        
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
          showTooltip={showTooltip}
          tooltipText={tooltipText}
        />

        {/* Must include quantity and repeats to meet requirements */}
        <FormField 
          fieldType="text" 
          name="dosage"
          label="Dosage directions" 
          value={drugData.dosage} 
          onChange={(event) => handleChange(setDrugData, event)} 
          alert={drugAlerts.dosage}
          required
          describedBy = {Object.keys(drugAlerts.dosage).length === 0 ? null : 'dosage-alert'}
        />

        <FormField 
          fieldType="checkbox" 
          name="pbsRx"
          label="PBS prescription" 
          onChange={() => toggleBooleanState(setDrugData, drugData, 'pbsRx')}
          checked={drugData.pbsRx}
          className="checkbox pbsRx"
          alert={drugAlerts.pbsRx}
          enterFunc={(event) => changeOnEnter(event, setDrugData, drugData)}
        />  

        {/* TODO: consider a dropdown UI expandable div */}
        {/* TODO: Add PBS site link for ciclosporin specifically */}
        {(drugData.verified && drugData.indications.length > 0 && drugData.pbsRx) && 
          <div className="indications">
            <div className="indications__btn collapsible" onClick={
              (event) => {
                event.preventDefault(); 
                setExpandIndication((prevState) => !prevState);
              }}>
                <button type="button" onClick={
              (event) => {
                event.preventDefault(); 
                event.stopPropagation();
                setExpandIndication((prevState) => !prevState);
              }}>Restricted benefit:</button>
            </div>
            <div className={`indications__content ${expandIndication ? 'expand' : 'collapse' }`} dangerouslySetInnerHTML={{ __html: indication }}></div>    
          </div>
        }  

        <FormField 
          fieldType="number" 
          name="quantity"
          label="Quantity" 
          value={drugData.quantity} 
          onChange={(event) => handleChange(setDrugData, event)} 
          alert={drugAlerts.quantity}
          subAlert={drugAlerts.maxQuantity}
          className="quantity-field form-field"
          required
          describedBy = {Object.keys(drugAlerts.quantity).length === 0 ? null : 'quantity-alert'}
        />

        <FormField 
          fieldType="number" 
          name="repeats"
          label="Repeats" 
          value={drugData.repeats} 
          onChange={(event) => handleChange(setDrugData, event)} 
          alert={drugAlerts.repeats}
          subAlert={drugAlerts.maxRepeats}
          className="repeats-field form-field"
          required
          describedBy = {Object.keys(drugAlerts.repeats).length === 0 ? null : 'repeats-alert'}
        /> 

      </Fieldset>

      {/* Note there must be enough info to identify the medicine, including form and strength */}
      <Fieldset className="misc-form" legend="Authority Details">
        <FormField 
          fieldType="checkbox" 
          name="authRequired"
          label="Authority required" 
          onChange={() => toggleBooleanState(setDrugData, drugData, 'authRequired')}
          checked={drugData.authRequired}
          className="checkbox authRequired"
          enterFunc={(event) => changeOnEnter(event, setDrugData, drugData)}
        />  
              
        {(drugData.authRequired && drugData.pbsRx) ? <>
          <div className="numbers" data-testid="numbers">
            
            {/* drugData.authRequired should be auto-selected once PBS integration is complete, but should also have an option to set manually */}
            {drugData.authRequired && <div className="authRxNo" data-testid="authRxNo">Authority script number: {isLoading ? 'Loading...' : miscData.authRxNumber}</div>}
            {isError && <div className="numbers__error">Something went wrong</div>}
          </div>

          {/* Consider a variable message beside or below this saying 'not required for this medication' or similar */}
          <FormField 
            fieldType="text" 
            name="authCode"
            label="Authority code (where applicable)" 
            value={miscData.authCode} 
            onChange={(event) => handleChange(setMiscData, event)} 
            alert={miscAlerts.authCode}
            describedBy = {Object.keys(miscAlerts.authCode).length === 0 ? null : 'authCode-alert'}
          />

          <div className="retention">
          <div className="retention">
        <div className="justification-field">
          <label htmlFor="justification">
            Clinical justification for use of item
            <textarea className="textarea-justification" name="justification" value={miscData.justification} id="justification" cols="30" rows="3" onChange={(event) => handleChange(setMiscData, event)} ></textarea>
          </label>
        </div>
          <FormField 
            fieldType="number" 
            name="age"
            label="Patient's age if under 18" 
            value={miscData.age} 
            onChange={(event) => handleChange(setMiscData, event)} 
            alert={miscAlerts.age}
            className="age-field"
          />

          <FormField 
            fieldType="checkbox" 
            name="prevAuth"
            label="Patient has received authority for this medicine before" 
            onChange={() => toggleBooleanState(setMiscData, miscData, 'prevAuth')}
            checked={miscData.prevAuth}
            className="checkbox prevAuth"
            enterFunc={(event) => changeOnEnter(event, setMiscData, miscData)}
          />  
        </div>
       
          </div>
          </> : (
            
            <div className="solo-alert-container"> 
              <svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--neutral" viewBox="0 0 512 512" width="17px">
                <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#014083" strokeMiterlimit="10" strokeWidth="32"/>
                <path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="none" stroke="#014083" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
                <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="#014083"/>
              </svg>
              <span className={`alert alert--neutral`}>{authorityMessage}</span>
            </div>
          )
        }

        <FormField 
          fieldType="date" 
          name="date"
          label="Date" 
          value={miscData.date} 
          onChange={(event) => handleChange(setMiscData, event)} 
          alert={miscAlerts.date}
          required
        />

      </Fieldset>

      <div className="ProviderForm__btns">
        <Button type="submit">Generate prescription</Button>
        <Link to="/" className="cancel-btn btn-secondary">Cancel</Link>
        
      </div>

     
      
      
    </StyledRxForm>
    </ContentContainer>
  )
}

export default RxForm
