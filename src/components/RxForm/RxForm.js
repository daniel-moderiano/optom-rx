import { useState } from "react";
import FormField from "../FormField/FormField";

const RxForm = () => {

  const [data, setData] = useState({
    drug: "",
  });

  const handleChange = (event) => {
    setData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value }
    });
  }

  return (
    <form className="rxform">
      {/* Single input to select the medication */}
      {/* Note there must be enough info to identify the medicine, including form and strength */}
      <fieldset className="drug">
        <FormField 
          fieldType="text" 
          name="drug" 
          label="Medication" 
          placeholder={"Enter medication name"} 
          value={data.drug} 
          onChange={handleChange} 
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
