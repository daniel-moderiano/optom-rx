// This hook provides a generalised form validation function that checks for specified required fields, and validates them for empty values
import { useInputValidation } from "./useInputValidation";

export const useFormValidation = () => {
  const { negativeValidationUI } = useInputValidation();

  // Given an array of required field names, and a DOM form element, iterate through the required fields and validate for empty, returning a bool of whether the form 'passes' validation check or not. Designed for a single form at a time, and so takes the corresponding setAlert function for that form data
  const validateForm = (requiredFieldNames, form, setAlertFunc) => {
    let valid = true;
    let inputFocused = false;

    // Validate each field for empty value, but do not provide any positive feedback UI
    requiredFieldNames.forEach((field) => {
      const input = form.querySelector(`[name="${field}"]`);
      if (input.value.trim().length === 0) {
        if (!inputFocused) {
          input.focus();
          inputFocused = true;
        }
        valid = false;
        negativeValidationUI(setAlertFunc, 'This field cannot be left blank', input);
      }
    });

    return valid;
  };

  return { validateForm }
}