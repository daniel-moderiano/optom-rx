import { useState, useEffect, useCallback } from "react";
import FormField from "../FormField/FormField";
import { StyledRxForm } from "./RxForm.styled";
import DrugAutocomplete from "../DrugAutocomplete/DrugAutocomplete";
import Fieldset from "../utils/Fieldset/Fieldset";
import { useLocation } from "react-router";
import { useNumbers } from '../../hooks/useNumbers';
import { usePBSFetch } from "../../hooks/usePBSFetch";
import { Link } from "react-router-dom";
import ContentContainer from '../utils/ContentContainer/ContentContainer';
import PageHeader from '../utils/PageHeader/PageHeader';
import Button from '../utils/Button/Button';
import { useInputValidation } from "../../hooks/useInputValidation";
import { useFormatting } from '../../hooks/useFormatting';
import { useInputChanges } from "../../hooks/useInputChanges";
import PrescriberDetails from "../PrescriberDetails/PrescriberDetails";
import PatientDetails from "../PatientDetails/PatientDetails";
import Indications from "../Indications/Indications";

// Multiple items are not permitted to be prescribed on the same form; each must use an individual form (applies to optometrists only)

const RxForm = ({ handleSubmit, googleLoaded, existingData, setPage, setToast }) => {
  
  // Location state is only provided if generating a new Rx. This signals certain functions to run (i.e. fetch numbers)
  const { state } = useLocation();
  const [{ scriptNo, authRxNo, numbersError, numbersLoading }, fetchNumbers] = useNumbers();
  const [{ pbsInfo, pbsError }, fetchDrug, setPbsInfo] = usePBSFetch(existingData.pbsData);
  const { positiveValidationUI, negativeValidationUI, validateRequiredField } = useInputValidation();
  const { abbreviateStateName } = useFormatting();
  const { handleChange, toggleBooleanState, handleEnterKeyOnCheckbox } = useInputChanges();

  const [showTooltip, setShowTooltip] = useState(true);
  const [tooltipText, setTooltipText] = useState('');

  const [numbersLoaded, setNumbersLoaded] = useState(false);

  const [drugAlerts, setDrugAlerts] = useState({
    name: {},
    quantity: {},
    repeats: {},
    dosage: {},
    pbsRx: {},
    maxQuantity: {},
    maxRepeats: {},
    activeIngredient: {},
    authRequired: {},
  });

  const [patientAlerts, setPatientAlerts] = useState({
    fullName: {},
    streetAddress: {},
    suburb: {},
    postcode: {},
    state: {},
    medicareNumber: {},
    medicareRefNumber: {},
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

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('form');
  }, [setPage])

  console.log(pbsInfo);


  // --- FORM INITIALISATION FUNCTIONS ---

  // Generate the unique script and authRx numbers, and attach them to the local RxForm state. This is only performed when loading the RxForm component using 'Create new prescription' btn
  useEffect(() => {
    try {
      if (state.newRx) {
        // Use .then() to ensure the above scriptNo and authRxNo variables are set prior to attempting to set data state with them
        fetchNumbers().then(() => {
          setNumbersLoaded((prevData) => prevData ? prevData : !prevData);
        });

        // Also reset all existing data 
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
      // If the user has clicked a prescribe or re-prescribe button to get here then newRx will still be true, but this additional logic must be run to initialise drug data
      if (state.rePrescribe) {
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
    } catch (error) {
      // If the Rx is not newly generated, a reference error will be thrown, where state is null. No action required.
    }
  }, [state, fetchNumbers, fetchDrug]);

  // Set local state with authRxNo and scriptNo fetched from firestore. Activates only when the numbers have been fetched, which is performed as part of generating a newRx
  useEffect(() => {
    if (numbersLoaded) {
      setMiscData((prevData) => ({
        ...prevData,
        scriptID: scriptNo,
        authRxNumber: authRxNo,
      }))
    }
  }, [numbersLoaded, authRxNo, scriptNo])


  // --- FORM VALIDATION FUNCTIONS ---

  // Inline form validation
  useEffect(() => {
    // Validation functions are split via form to utilise event propagation within the form
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
              [name]: abbreviateStateName(value),
            }));
            validateRequiredField(setPatientAlerts, event.target);
            break;

          case name === 'medicareNumber':
            if ((/^[0-9]{10}$/).test(value.trim())) {
              positiveValidationUI(setPatientAlerts, event.target);
            } else {
              // ignore
              event.target.classList.remove('success');
              // Remove the tick icon
              const tick = event.target.parentNode.querySelector('.tickCircle');
              tick.classList.remove('show');
              tick.classList.add("hide");
            }
            break;

          case name === 'medicareRefNumber':
            if ((/^[1-9]{1}$/).test(value.trim())) {
              positiveValidationUI(setPatientAlerts, event.target);
            } else {
              // ignore
              event.target.classList.remove('success');
              // Remove the tick icon
              const tick = event.target.parentNode.querySelector('.tickCircle');
              tick.classList.remove('show');
              tick.classList.add("hide");
            }
            break;

          case name === 'postcode':
            validateRequiredField(setPatientAlerts, event.target);
            break;

          default:
            break;
        }
      });
    };

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
              negativeValidationUI(setDrugAlerts, 'This field cannot be left blank', event.target);
            } else if (!(/^[1-9][0-9]*$/).test(value.trim())) {
              // Checks for non-zero number with no theoretical limit
              negativeValidationUI(setDrugAlerts, 'Please enter a quantity of 1 or more (with no leading zeroes)', event.target);
            } else {
              positiveValidationUI(setDrugAlerts, event.target);
            }
            break;

          // Can be zero, and for non-PBS prescriptions, there is technically no upper limits
          case name === 'repeats':
            // Verify as standard
            if (value.trim().length === 0) {
              negativeValidationUI(setDrugAlerts, 'This field cannot be left blank', event.target);
            } else if (!(/^([1-9][0-9]*)|(0)$/).test(value.trim())) {
              // Checks for non-zero number with no theoretical limit
              negativeValidationUI(setDrugAlerts, 'Please enter a valid number (no leading zeroes)', event.target);
            } else {
              positiveValidationUI(setDrugAlerts, event.target);
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

    // Although only a single field is being validated, the switch statement should remain in case more fields need to be added
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
  }, [validateRequiredField, positiveValidationUI, negativeValidationUI, abbreviateStateName]);

  // Remove a visible error or alert from the brand name input when it changes from being required to not being required
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

  // Returns boolean indicating if form is valid or not, and also highlights invalid fields on UI
  const checkFormValidation = () => {
    let valid = true;
    let inputFocused = false;

    const performInputValidation = (fieldName, setAlertFunc) => {
      const input = document.querySelector(`[name="${fieldName}"]`)
      if (input.value.trim().length === 0) {
        if (!inputFocused) {
          input.focus();
          inputFocused = true;
        }
        valid = false;
        negativeValidationUI(setAlertFunc, 'This field cannot be left blank', input);
      }
    }

    const requiredFields = {
      drug: [
        'activeIngredient',
        'dosage',
        'quantity',
        'repeats',
      ],
      patient: [
        'fullName',
        'streetAddress',
        'suburb',
        'postcode',
        'state',
      ],
    }

    const medicareNumberInput = document.querySelector('#medicareNumber');
    const medicareRefNumberInput = document.querySelector('#medicareRefNumber');

    requiredFields.patient.forEach((field) => {
      performInputValidation(field, setPatientAlerts);
    });

    // If the user has attempted to enter medicare information, we should validate it for correct input here, and by default check the IRN input
    if (medicareNumberInput.value.trim() !== "") {
      if (!(/^[0-9]{10}$/).test(medicareNumberInput.value.trim())) {
        negativeValidationUI(setPatientAlerts, 'Medicare number must be exactly 10 digits long', medicareNumberInput);
        if (!inputFocused) {
          medicareNumberInput.focus();
          inputFocused = true;
        }
        valid = false;
      }
      if (!(/^[1-9]{1}$/).test(medicareRefNumberInput.value.trim())) {
        negativeValidationUI(setPatientAlerts, 'IRN must be a single digit between 1 through 9', medicareRefNumberInput);
        if (!inputFocused) {
          medicareRefNumberInput.focus();
          inputFocused = true;
        }
        valid = false;
      }
    }

    requiredFields.drug.forEach((field) => {
      performInputValidation(field, setDrugAlerts);
    });


    // Brand name field should only be validated if the user has selected that brand name is required in some way
    if (drugData.brandOnly || drugData.includeBrand) {
      performInputValidation('brandName', setDrugAlerts);
    }

    // Only a single miscellaneous field is required to validate
    performInputValidation('date', setMiscAlerts);

    // Finally, check for any active error alerts that were not detected with the more basic submission validation
    if (document.querySelectorAll('.alert--error').length > 0) {
      valid = false;
    }
    return valid;
  };


  // --- PBS FUNCTIONS ---

  // Alert user when there is an error fetching the PBS data (on drug select)
  useEffect(() => {
    if (pbsError) {
      setToast((prevData) => ({
        ...prevData,
        visible: true,
        type: 'error',
        message: 'An error occurred while loading PBS information'
      }));
    }
  }, [pbsError, setToast]);

  // Remove all relevant PBS and verified-dependent information when there is loss of verified status (i.e. user manually adjusts active ingredient or brand name field)
  useEffect(() => {
    const clearPbsInfo = () => {
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
  
    }
  
    // Toggle any PBS-related functionality if there is a change in verified status. 
    if (!drugData.verified) {
      clearPbsInfo();
      setPbsInfo(null);
      setDrugAlerts((prevAlerts) => ({
        ...prevAlerts,
        pbsRx: {
          message: 'Select a medication from the dropdown list for PBS information',
          type: 'neutral',
        }
      }));
      setShowTooltip(false);
      // Only bother with an authority message to select a dropdown medication IF the user is trying to prescribe on PBS
      if (drugData.pbsRx) {
        setDrugAlerts((prevAlerts) => ({
          ...prevAlerts,
          authRequired: {
            message: 'Select a medication from the dropdown list for authority information',
            type: 'neutral',
          }
        }));
      } 
    } else {

      setDrugAlerts((prevAlerts) => ({
        ...prevAlerts,
        pbsRx: {
          message: 'This item is not available on the PBS',
          type: 'neutral',
        }
      }));
      setDrugAlerts((prevAlerts) => ({
          ...prevAlerts,
          authRequired: {
            message: 'This prescription does not require authority',
            type: 'neutral',
          }
        }));
    }
  }, [drugData.verified, drugData.pbsRx, setPbsInfo])


  // ! Successfully remove verified functions
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
        setDrugAlerts((prevAlerts) => ({
          ...prevAlerts,
          authRequired: {
            message: 'This prescription does not require authority',
            type: 'neutral',
          }
        }));
      }
    } else {
      setDrugData((prevData) => ({
        ...prevData,
        authRequired: false,
      }));
    }
  }, [pbsInfo, drugData.pbsRx]);

  
  // ! Successfully remove verified functions
  // Identify whether a drug on the PBS is restricted or not, and display indications for use on restricted items


    // ! Successfully remove verified functions
  const quantityRepeatStatus = useCallback(() => {
    // PBS info-related effects here
    if (pbsInfo && drugData.pbsRx) {
      // All PBS drugs have restrictions on quantity and repeats; set to local state
      setDrugData((prevData) => ({
        ...prevData,
        maxRepeats: pbsInfo['repeats'],
        maxQuantity: pbsInfo['mq'],
      }));

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
  }, [pbsInfo, drugData.maxQuantity, drugData.maxRepeats, drugData.pbsRx]);

  const handleLEMIInfo = useCallback((fetchedPBSData) => {
    // Check for lemi and/or lmbc status
    if (fetchedPBSData['lemi']) {
      // Medicine is recommended to prescribe by brand only
      setDrugData((prevData) => ({
        ...prevData,
        brandOnly: true,
      }));
      setTooltipText(`<span>This item is included on the <a target="_blank" href="https://www.safetyandquality.gov.au/publications-and-resources/resource-library/list-excluded-medicinal-items-lemi">List of Excluded Medicinal Items (LEMI)</a>, and should be prescribed by brand name only for practical and safety reasons</span>`);
    } else if (fetchedPBSData['lmbc']) {
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
      setShowTooltip(true);
    }
  }, [showTooltip]);


  const handleRestrictionInfo = useCallback((fetchedPBSData) => {
   // Check for restricted status
   switch (fetchedPBSData['restriction-flag']) {
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
        indications: fetchedPBSData.indications.description,
      }));
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
        indications: fetchedPBSData.indications.description,
      }));
      if (drugData.pbsRx) {
        setDrugAlerts((prevAlerts) => ({
          ...prevAlerts,
          authRequired: {
            message: 'This item requires an authority prescription',
            type: 'neutral',
          }
        }));
      }
      break;

    default:
      break;
  }
  }, [drugData.pbsRx]);



  // Can utilise a useEffect such as this to set state or UI elements based on PBS data being fetched or lost
  // Note that these PBS-related functions MUST only be performed on drug data with the verified: true tag
  useEffect(() => {

    authorityStatus();
    quantityRepeatStatus();
  }, [authorityStatus, quantityRepeatStatus, pbsInfo])

  
  // Function to call relevant data handlers when PBS information is successfully fetched
  useEffect(() => {
    if (pbsInfo) {
      handleLEMIInfo(pbsInfo);
      handleRestrictionInfo(pbsInfo);
    } else {
    }
  }, [pbsInfo, handleLEMIInfo, handleRestrictionInfo])

  return (
    <ContentContainer>
      <PageHeader title="New prescription" description="Complete all sections required for your prescription" />
      <StyledRxForm
        className="rxform"
        onSubmit={(e) => {
          e.preventDefault();
          if (checkFormValidation()) {
            handleSubmit(drugData, patientData, providerData, miscData, pbsInfo)
          }
        }}
        autoComplete="off"
        noValidate
      >
        <div className="scriptNo" data-testid="scriptNo">Script number: {numbersLoading ? 'Loading...' : miscData.scriptID}</div>

        <Fieldset className="provider-form select-fieldset" legend="Prescriber details">
          <PrescriberDetails setData={setProviderData} setToast={setToast}/>
        </Fieldset>   

        <Fieldset className="patient-form" legend="Patient details">
          <PatientDetails 
            data={patientData} 
            setData={setPatientData} 
            alerts={patientAlerts} 
            setAlerts={setPatientAlerts}
            googleLoaded={googleLoaded}
          />
        </Fieldset>

        {/* There must be enough info to identify the medicine, including form and strength, and informatiom regarding dosage, quantity, and repeats */}
        <Fieldset className="drug-form" legend="Medication details">
          <DrugAutocomplete
            data={drugData}
            setData={setDrugData}
            handleChange={(event) => handleChange(event, setDrugData)}
            toggle={toggleBooleanState}
            alerts={drugAlerts}
            setAlerts={setDrugAlerts}
            fetchDrug={fetchDrug}
            showTooltip={showTooltip}
            tooltipText={tooltipText}
          />

          <FormField
            name="dosage"
            label="Dosage directions"
            value={drugData.dosage}
            onChange={(event) => handleChange(event, setDrugData)}
            alert={drugAlerts.dosage}
            required
          />

          <FormField
            fieldType="checkbox"
            name="pbsRx"
            label="PBS prescription"
            onChange={() => toggleBooleanState(setDrugData, drugData, 'pbsRx')}
            checked={drugData.pbsRx}
            className="checkbox pbsRx"
            alert={drugAlerts.pbsRx}
            enterFunc={(event) => handleEnterKeyOnCheckbox(event, setDrugData, drugData)}
          />

          {(drugData.verified && drugData.indications.length > 0 && drugData.pbsRx) &&
            <Indications indicationsData={drugData.indications}/>
          }

          <FormField
            fieldType="number"
            name="quantity"
            label="Quantity"
            value={drugData.quantity}
            onChange={(event) => handleChange(event, setDrugData)}
            alert={drugAlerts.quantity}
            subAlert={drugAlerts.maxQuantity}
            className="quantity-field form-field"
            required
          />

          <FormField
            fieldType="number"
            name="repeats"
            label="Repeats"
            value={drugData.repeats}
            onChange={(event) => handleChange(event, setDrugData)}
            alert={drugAlerts.repeats}
            subAlert={drugAlerts.maxRepeats}
            className="repeats-field form-field"
            required
          />
        </Fieldset>

        <Fieldset className="misc-form" legend="Authority details">
          <FormField
            fieldType="checkbox"
            name="authRequired"
            label="Authority required"
            onChange={() => toggleBooleanState(setDrugData, drugData, 'authRequired')}
            checked={drugData.authRequired}
            className="checkbox authRequired"
            enterFunc={(event) => handleEnterKeyOnCheckbox(event, setDrugData, drugData)}
            alert={drugAlerts.authRequired}
          />

          {(drugData.authRequired && drugData.pbsRx) && <>
            <div className="numbers" data-testid="numbers">

              {/* drugData.authRequired should be auto-selected once PBS integration is complete, but should also have an option to set manually */}
              {drugData.authRequired && <div className="authRxNo" data-testid="authRxNo">Authority script number: {numbersLoading ? 'Loading...' : miscData.authRxNumber}</div>}
              {numbersError && <div className="numbers__error">Something went wrong</div>}
            </div>

            {/* Consider a variable message beside or below this saying 'not required for this medication' or similar */}
            <FormField
              name="authCode"
              label="Authority code (where applicable)"
              value={miscData.authCode}
              onChange={(event) => handleChange(event, setMiscData)}
              alert={miscAlerts.authCode}
            />

            <div className="retention">
              <div className="retention">
                <div className="justification-field">
                  <label htmlFor="justification">
                    Clinical justification for use of item
                    <textarea className="textarea-justification" name="justification" value={miscData.justification} id="justification" cols="30" rows="3" onChange={(event) => handleChange(event, setMiscData)} ></textarea>
                  </label>
                </div>
                <FormField
                  fieldType="number"
                  name="age"
                  label="Patient's age if under 18"
                  value={miscData.age}
                  onChange={(event) => handleChange(event, setMiscData)}
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
                  enterFunc={(event) => handleEnterKeyOnCheckbox(event, setMiscData, miscData)}
                />
              </div>
            </div>
          </>}

          <FormField
            fieldType="date"
            name="date"
            label="Date"
            value={miscData.date}
            onChange={(event) => handleChange(event, setMiscData)}
            alert={miscAlerts.date}
            required
          />
        </Fieldset>

        <div className="ProviderForm__btns">
          <Button type="submit" classLabel="submit-btn">Generate prescription</Button>
          <Link to="/" className="cancel-btn btn-secondary button">Cancel</Link>
        </div>

      </StyledRxForm>
    </ContentContainer>
  )
}

export default RxForm
