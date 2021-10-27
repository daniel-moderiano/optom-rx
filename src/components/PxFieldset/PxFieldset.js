import FormField from "../FormField/FormField"
import Autocomplete from "../Autocomplete/Autocomplete"

const PxFieldset = ({ data, set, handleChange }) => {
  return (
    <fieldset className="patient">
        {/* Legal requirements include only the patient's name and address */}
        {/* Patient Medicare number is however required for ALL PBS Rx, and should be included in general so that the patient may claim under PBS where this price is cheaper. All Aus are valid private prescriptions however. */}
        <FormField 
          fieldType="text" 
          name="firstName"
          label="First name" 
          placeholder="Enter first name"
          value={data.firstName} 
          onChange={(event) => handleChange(set, event)} 
        />

        <FormField 
          fieldType="text" 
          name="lastName"
          label="Last name" 
          placeholder="Enter last name"
          value={data.lastName} 
          onChange={(event) => handleChange(set, event)} 
        />

        <FormField 
          fieldType="text" 
          name="streetNumber"
          label="Street number" 
          placeholder="Enter street number"
          value={data.streetNumber} 
          onChange={(event) => handleChange(set, event)} 
        />

        <FormField 
          fieldType="text" 
          name="streetName"
          label="Street name" 
          placeholder="Enter street name"
          value={data.streetName} 
          onChange={(event) => handleChange(set, event)} 
        />

        <FormField 
          fieldType="text" 
          name="suburb"
          label="Suburb" 
          placeholder="Enter suburb"
          value={data.suburb} 
          onChange={(event) => handleChange(set, event)} 
        />

        <FormField 
          fieldType="text" 
          name="state"
          label="State" 
          placeholder="Enter state"
          value={data.state} 
          onChange={(event) => handleChange(set, event)} 
        />

        <FormField 
          fieldType="text" 
          name="postcode"
          label="Postcode" 
          placeholder="Enter postcode"
          value={data.postcode} 
          onChange={(event) => handleChange(set, event)} 
        />

        <FormField 
          fieldType="text" 
          name="medicareNumber"
          label="Medicare number" 
          placeholder="Enter medicare number"
          value={data.medicareNumber} 
          onChange={(event) => handleChange(set, event)} 
        />

        <FormField 
          fieldType="text" 
          name="medicareRefNumber"
          label="Reference number" 
          placeholder="Enter reference number"
          value={data.medicareRefNumber} 
          onChange={(event) => handleChange(set, event)} 
        />
      </fieldset>
  )
}

export default PxFieldset
