// Reset the local form state and remove all UI alerts. Used when the user is creating a new Rx
import { useCallback } from "react";
import { useInputValidation } from "./useInputValidation";

export const useNewRx = () => {
  const { removeAllValidation } = useInputValidation();

  const resetFormData = useCallback((setDrugData, setPatientData, setMiscData) => {
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
  }, []);

  const resetFormValidation = useCallback((setDrugAlerts, setPatientAlerts) => {
    // Remove any and all validation and alerts
    document.querySelector('.patient-form').querySelectorAll('input').forEach((input) => {
      removeAllValidation(input, setPatientAlerts);
    })
    document.querySelector('.drug-form').querySelectorAll('input').forEach((input) => {
      if (input.name === 'pbsRx') {
        // Do nothing
      } else {
        removeAllValidation(input, setDrugAlerts);
      }
    });

    // Close any expanded address or medication sections
    if (document.querySelector('.AddressAutocomplete').classList.contains('expanded')) {
      document.querySelector('.address-expand').click();
    }

    if (document.querySelector('.DrugAutocomplete').classList.contains('expanded')) {
      document.querySelector('.drug-expand').click();
    }
  }, [removeAllValidation])

  return { resetFormData, resetFormValidation }
}
