import { useCallback } from "react";

// Define generalised form field validation functions and features here. These may be destrcutured and ised as required in form components.

// UI error/success functions
const applyErrorStyling = (element) => {
  element.classList.add('error');
  element.classList.remove('success');

  // Remove the tick icon
  const tick = element.parentNode.querySelector('.tickCircle');
  tick.classList.remove('show');
  tick.classList.add("hide");
}

const applySuccessStyling = (element) => {
  element.classList.remove('error');
  element.classList.add('success');

  // Add the tick icon
  const tick = element.parentNode.querySelector('.tickCircle');
  tick.classList.remove('hide');
  tick.classList.add("show");
}

export const useInputValidation = () => {
  // ! useCallbacks are absolutely necessary as these functions are most commonly used in useEffect hooks

   // Show positive UI feedback on a form field. Used in a conditional that validates form field
   const positiveValidationUI = useCallback((setAlertFunc, field) => {
    applySuccessStyling(field);
    setAlertFunc((prevAlerts) => ({
      ...prevAlerts,
      [field.name]: {}
    }));
  }, []);

  // Show negative UI feedback on a form field. Used in a conditional that validates form field
  const negativeValidationUI = useCallback((setAlertFunc, alertMsg, field) => {
    applyErrorStyling(field);
    setAlertFunc((prevAlerts) => ({
      ...prevAlerts,
      [field.name]: {
        message: alertMsg,
        type: 'error',
      }
    }));
  }, []);

  // Combination of the positive and negative UI functions but including the most common case validation conditional of assessing for empty value. Used to add validation to required fields in a form.
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
      applyErrorStyling(field);
    } else {
      applySuccessStyling(field);
      setAlertFunc((prevAlerts) => ({
        ...prevAlerts,
        [field.name]: {}
      }));
    }
  }, []);

  return { positiveValidationUI, negativeValidationUI, validateRequiredField }
}