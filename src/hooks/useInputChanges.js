// Define functions that handle input changes to various types of form inputs. These are frequently used around the app

export const useInputChanges = () => {

  // General text input change handler
  const handleChange = (setFunc, event) => {
    const { name, value } = event.target;
    setFunc((prevData) => ({
      ...prevData, 
      [name]: value 
    }));
  };

  // Handle any input controlling boolean data, typically checkboxes
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

  // Ensure that pressing the enter key on checkboxes functions as expected without submitting any forms
  const handleEnterKeyOnCheckbox = (event, setFunc, data) => {
    // If the enter key is pressed
    if (event.key === 'Enter') {
      event.preventDefault();
      toggleBooleanState(setFunc, data, event.target.name);
    }
  }

  return { handleChange, toggleBooleanState, handleEnterKeyOnCheckbox }
}
