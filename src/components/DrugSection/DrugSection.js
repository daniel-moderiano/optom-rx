import FormField from "../FormField/FormField";
import DrugAutocomplete from "../DrugAutocomplete/DrugAutocomplete";

const DrugSection = ({ data, handleChange, alerts }) => {
  return (
    <fieldset className="drug-form">
      <legend className="drug-form__title">Medication</legend>

      <DrugAutocomplete 
        data={data}
        // setData={setDrugData}
        // handleChange={(event) => handleChange(setDrugData, event)}  
        // toggle={toggleBooleanState}
        // alerts={drugAlerts}
        setAlerts={alerts}
      />

      {/* TODO: PBS integration to identify which medications require authority, and auto-filling. Should appear while PBS Rx is true */}
      <FormField 
        fieldType="checkbox" 
        name="pbsRx"
        label="PBS" 
        onChange={() => toggleBooleanState(setDrugData, data, 'pbsRx')}
        checked={data.pbsRx}
      />  
      {/* Must include quantity and repeats to meet requirements */}
      <FormField 
        fieldType="text" 
        name="dosage"
        label="Dosage" 
        placeholder="Enter dosage"
        value={data.dosage} 
        onChange={(event) => handleChange(setDrugData, event)} 
        alert={alerts.dosage}
      />

      <FormField 
        fieldType="number" 
        name="quantity"
        label="Quantity" 
        placeholder="Enter quantity"
        value={data.quantity} 
        onChange={(event) => handleChange(setDrugData, event)} 
        alert={alerts.quantity}
      />

      <FormField 
        fieldType="number" 
        name="repeats"
        label="Repeats" 
        placeholder="Enter repeats"
        value={data.repeats} 
        onChange={(event) => handleChange(setDrugData, event)} 
        alert={alerts.repeats}
      />

        
    </fieldset>
  )
}

export default DrugSection;
