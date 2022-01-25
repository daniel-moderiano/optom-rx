import { useState, useEffect } from "react";
import FormField from "../FormField/FormField";
import { StyledRxForm } from "./RxForm.styled";
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
import { useHandleLEMI } from "../../hooks/useHandleLEMI";
import MedicationDetails from "../MedicationDetails/MedicationDetails";
import ExtraAuthorityDetails from "../AuthorityDetails/ExtraAuthorityDetails";
import { useConditionalToast } from "../../hooks/useConditionalToast";
import { useNewRx } from "../../hooks/useNewRx";
import { useRxFormValidation } from "../../hooks/useRxFormValidation";

// Multiple items are not permitted to be prescribed on the same form; each must use an individual form (applies to optometrists only)

const RxForm = ({ handleSubmit, googleLoaded, existingData, setPage, setToast }) => {
  // Location state is only provided if generating a new Rx. This signals certain functions to run (i.e. fetch numbers)
  const { state } = useLocation();
  const [{ scriptNo, authRxNo, numbersError, numbersLoading }, fetchNumbers] = useNumbers();
  const [{ pbsInfo, pbsError }, fetchDrug, setPbsInfo] = usePBSFetch(existingData.pbsData);
  const { positiveValidationUI, negativeValidationUI, validateRequiredField, removeAllValidation } = useInputValidation();
  const { patientDataValidation, drugDataValidation, miscDataValidation } = useRxFormValidation();
  const { abbreviateStateName } = useFormatting();
  const { handleChange, toggleBooleanState, handleEnterKeyOnCheckbox } = useInputChanges();
  const { LEMIText, handleLEMIInfo } = useHandleLEMI();
  const { resetFormData, resetFormValidation } = useNewRx();

  const [showTooltip, setShowTooltip] = useState(true);

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


  // --- FORM INITIALISATION FUNCTIONS ---

  // Generate the unique script and authRx numbers, and attach them to the local RxForm state. This is only performed when loading the RxForm component using 'Create new prescription' btn
  useEffect(() => {
    try {
      if (state.newRx) {
        // Use .then() to ensure the above scriptNo and authRxNo variables are set prior to attempting to set data state with them
        fetchNumbers().then(() => {
          setNumbersLoaded((prevData) => prevData ? prevData : !prevData);
        });

        resetFormData(setDrugData, setPatientData, setMiscData);
        resetFormValidation(setDrugAlerts, setPatientAlerts);
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

        // Finally, expand the medication details section
        document.querySelector('.drug-expand').click();
      }
    } catch (error) {
      // If the Rx is not newly generated, a reference error will be thrown, where state is null. No action required.
    }
  }, [state, fetchNumbers, fetchDrug, resetFormValidation, resetFormData]);

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
    patientDataValidation(setPatientAlerts, setPatientData);
    drugDataValidation(setDrugAlerts);
    miscDataValidation(setMiscAlerts);
  }, [drugDataValidation, patientDataValidation, miscDataValidation]);

  // Remove a visible error or alert from the brand name input when it changes from being required to not being required
  useEffect(() => {
    if (!drugData.includeBrand && !drugData.brandOnly) {
      removeAllValidation(document.querySelector('#brandName'), setDrugAlerts)
    };
  }, [drugData.includeBrand, drugData.brandOnly, removeAllValidation]);

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

  // Alert the user if there is an error fetching PBS data
  useConditionalToast(pbsError, setToast, 'An error occurred while loading PBS information');

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
      setShowTooltip(false);
      setDrugAlerts((prevAlerts) => ({
        ...prevAlerts,
        authRequired: {
          message: 'This prescription does not require authority',
          type: 'neutral',
        },
        pbsRx: {
          message: 'Select a medication from the dropdown list for PBS information',
          type: 'neutral',
        }
      }));
      setDrugAlerts((prevAlerts) => ({
        ...prevAlerts,
        maxQuantity: {},
        maxRepeats: {},
      }));

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
      if (!pbsInfo) {
        setDrugAlerts((prevAlerts) => ({
          ...prevAlerts,
          pbsRx: {
            message: 'This item is not available on the PBS',
            type: 'neutral',
          },
          authRequired: {
            message: 'This prescription does not require authority',
            type: 'neutral',
          }
        }));
      }
    }
  }, [drugData.verified, drugData.pbsRx, setPbsInfo, pbsInfo])

  // Function to call relevant data handlers when PBS information is successfully fetched
  useEffect(() => {
    const handleMaxParametersInfo = (fetchedPBSData) => {
      // PBS info-related effects here
      if (drugData.pbsRx) {
        // All PBS drugs have restrictions on quantity and repeats; set to local state
        setDrugData((prevData) => ({
          ...prevData,
          maxRepeats: fetchedPBSData['repeats'],
          maxQuantity: fetchedPBSData['mq'],
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
    };
  
    const handleAuthorityInfo = (fetchedPBSData) => {
      // All authority required items will have flag 'A'. Set auth status accordingly
      if (fetchedPBSData['restriction-flag'] === 'A' && drugData.pbsRx) {
        setDrugData((prevData) => ({
          ...prevData,
          authRequired: true,
        }));
        setDrugAlerts((prevAlerts) => ({
          ...prevAlerts,
          authRequired: {
            message: 'This item requires an authority prescription',
            type: 'neutral',
          },
          pbsRx: {
            message: 'This item is available on the PBS (authority required)',
            type: 'neutral',
          }
        }));
        if (fetchedPBSData['streamline-code'].length > 0) {
          setMiscAlerts((prevAlerts) => ({
            ...prevAlerts,
            authCode: {
              message: 'This medication is available using the streamline code above',
              type: 'success',
            }
          }));
          setMiscData((prevData) => ({
            ...prevData,
            authCode: fetchedPBSData['streamline-code'],
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
    }

    const handleRestrictionInfo = (fetchedPBSData) => {
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
          break;
  
        default:
          break;
      }
    }

    if (pbsInfo) {
      handleLEMIInfo(pbsInfo, setDrugData);
      handleRestrictionInfo(pbsInfo);
      handleAuthorityInfo(pbsInfo);
      handleMaxParametersInfo(pbsInfo);
      setShowTooltip(true);
    }
  }, [pbsInfo, drugData.pbsRx, drugData.maxQuantity, drugData.maxRepeats, showTooltip, handleLEMIInfo])


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


        <Fieldset className="drug-form" legend="Medication details">
          <MedicationDetails 
            data={drugData} 
            setData={setDrugData} 
            alerts={drugAlerts} 
            setAlerts={setDrugAlerts}
            fetchDrug={fetchDrug}
            showTooltip={showTooltip}
            LEMIText={LEMIText}
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

            <ExtraAuthorityDetails data={miscData} setData={setMiscData} alerts={miscAlerts} />
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
