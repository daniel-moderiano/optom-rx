// Setup inline validation for the Rx Form component. Used only as a means of helping readability of the Rx Form component itself.
import { useInputValidation } from "./useInputValidation";
import { useFormatting } from "./useFormatting";
import { useCallback } from "react";

export const useRxFormValidation = (setAlertFunc, setFunc) => {
  const { validateRequiredField, positiveValidationUI, negativeValidationUI } = useInputValidation();
  const { abbreviateStateName } = useFormatting();
  // Validation functions are split via form to utilise event propagation within the form
  const patientDataValidation = useCallback((setAlertFunc, setFunc) => {
    document.querySelector('.patient-form').addEventListener('focusout', (event) => {
      const { name, value } = event.target
      switch (true) {
        case name === 'fullName':
          validateRequiredField(setAlertFunc, event.target);
          break;

        case name === 'streetAddress':
          validateRequiredField(setAlertFunc, event.target);
          break;

        case name === 'suburb':
          validateRequiredField(setAlertFunc, event.target);
          break;

        case name === 'state':
          setFunc((prevData) => ({
            ...prevData,
            [name]: abbreviateStateName(value),
          }));
          validateRequiredField(setAlertFunc, event.target);
          break;

        case name === 'medicareNumber':
          if ((/^[0-9]{10}$/).test(value.trim())) {
            positiveValidationUI(setAlertFunc, event.target);
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
            positiveValidationUI(setAlertFunc, event.target);
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
          validateRequiredField(setAlertFunc, event.target);
          break;

        default:
          break;
      }
    });
  }, [abbreviateStateName, positiveValidationUI, validateRequiredField]);

  const drugDataValidation = useCallback((setAlertFunc) => {
    document.querySelector('.drug-form').addEventListener('focusout', (event) => {
      const { name, value } = event.target
      switch (true) {
        case name === 'activeIngredient':
          validateRequiredField(setAlertFunc, event.target);
          break;

        case name === 'brandName':
          if (value.trim().length > 0) {
            event.target.classList.remove('error')
            setAlertFunc((prevAlerts) => ({
              ...prevAlerts,
              brandName: {}
            }));
          }
          break;

        case name === 'quantity':
          // Verify as standard
          if (value.trim().length === 0) {
            negativeValidationUI(setAlertFunc, 'This field cannot be left blank', event.target);
          } else if (!(/^[1-9][0-9]*$/).test(value.trim())) {
            // Checks for non-zero number with no theoretical limit
            negativeValidationUI(setAlertFunc, 'Please enter a quantity of 1 or more (with no leading zeroes)', event.target);
          } else {
            positiveValidationUI(setAlertFunc, event.target);
          }
          break;

        // Can be zero, and for non-PBS prescriptions, there is technically no upper limits
        case name === 'repeats':
          // Verify as standard
          if (value.trim().length === 0) {
            negativeValidationUI(setAlertFunc, 'This field cannot be left blank', event.target);
          } else if (!(/^([1-9][0-9]*)|(0)$/).test(value.trim())) {
            // Checks for non-zero number with no theoretical limit
            negativeValidationUI(setAlertFunc, 'Please enter a valid number (no leading zeroes)', event.target);
          } else {
            positiveValidationUI(setAlertFunc, event.target);
          }
          break;

        case name === 'dosage':
          validateRequiredField(setAlertFunc, event.target);
          break;
        default:
          break;
      }
    });
  }, [negativeValidationUI, positiveValidationUI, validateRequiredField]);

  // Although only a single field is being validated, the switch statement should remain in case more fields need to be added
  const miscDataValidation = useCallback((setAlertFunc) => {
    document.querySelector('.misc-form').addEventListener('focusout', (event) => {
      const { name } = event.target
      switch (true) {
        case name === 'date':
          validateRequiredField(setAlertFunc, event.target);
          break;
        default:
          break;
      }
    });
  }, [validateRequiredField]);
  return { patientDataValidation, drugDataValidation, miscDataValidation }
}
