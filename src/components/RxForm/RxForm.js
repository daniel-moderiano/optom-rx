import { useState } from "react";
import FormField from "../FormField/FormField";

const RxForm = () => {

  const [drugData, setDrugData] = useState({
    name: '',
  });
  const [patientData, setPatientData] = useState({});
  const [providerData, setProviderData] = useState({});

  // Pass a set function to handle change, rather than hardcoding with a certain setState function
  const handleChange = (set, event) => {
    const { name, value } = event.target;
    set((prevData) => ({
      ...prevData, 
      [name]: value 
    }));
  };

  return (
    <form className="rxform">
      {/* Single input to select the medication */}
      {/* Note there must be enough info to identify the medicine, including form and strength */}
      <fieldset className="drug">
        <FormField 
          fieldType="text" 
          name="name"
          label="Medication" 
          placeholder="Enter medication name"
          value={drugData.name} 
          onChange={(event) => handleChange(setDrugData, event)} 
        />
      </fieldset>

      {/* Enter the patient Rx details */}
      <fieldset className="patient">
        {/* Legal requirements include only the patient's name and address */}
        {/* Patient Medicare number is however required for ALL PBS Rx, and should be included in general so that the patient may claim under PBS where this price is cheaper. All Aus are valid private prescriptions however. */}
      </fieldset>

      {/* Enter the provider details */}
      <fieldset className="provider">
        {/* Legal requirements include the prescriber's name, address, and contact details, and prescriber num
        You may also give them the option of adding qualifications */}
      </fieldset>

      {/* Enter remaining details such as dosage, quantity, and repeats, plus PBS. This section might include the PBS authority code field */}
      <fieldset className="parameters">
        {/* Must include quantity and repeats to meet requirements */}
      </fieldset>
    </form>
  )
}

export default RxForm
