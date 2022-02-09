import FormField from "../FormField/FormField";
import { useInputChanges } from "../../hooks/useInputChanges";
import Indications from "../Indications/Indications";
import DrugAutocomplete from "../DrugAutocomplete/DrugAutocomplete";

// Mostly created to help improve readability and size of parent RxForm component.
const MedicationDetails = ({ data, setData, alerts, setAlerts, fetchDrug, showTooltip, LEMIText }) => {
  const { handleChange, toggleBooleanState, handleEnterKeyOnCheckbox } = useInputChanges();

  return (<>
    {/* There must be enough info to identify the medicine, including form and strength, and informatiom regarding dosage, quantity, and repeats */}
    <DrugAutocomplete
      data={data}
      setData={setData}
      handleChange={(event) => handleChange(event, setData)}
      toggle={toggleBooleanState}
      alerts={alerts}
      setAlerts={setAlerts}
      fetchDrug={fetchDrug}
      showTooltip={showTooltip}
      tooltipText={LEMIText}
      manuallyCollapse={false}
    />

    <FormField
      name="dosage"
      label="Dosage directions"
      value={data.dosage}
      onChange={(event) => handleChange(event, setData)}
      alert={alerts.dosage}
      required
    />

    <FormField
      fieldType="checkbox"
      name="pbsRx"
      label="PBS prescription"
      onChange={() => toggleBooleanState(setData, data, 'pbsRx')}
      checked={data.pbsRx}
      className="checkbox pbsRx"
      alert={alerts.pbsRx}
      enterFunc={(event) => handleEnterKeyOnCheckbox(event, setData, data)}
    />

    {(data.verified && data.indications.length > 0 && data.pbsRx) &&
      <Indications indicationsData={data.indications}/>
    }

    <FormField
      fieldType="number"
      name="quantity"
      label="Quantity"
      value={data.quantity}
      onChange={(event) => handleChange(event, setData)}
      alert={alerts.quantity}
      subAlert={alerts.maxQuantity}
      className="quantity-field form-field"
      required
    />

    <FormField
      fieldType="number"
      name="repeats"
      label="Repeats"
      value={data.repeats}
      onChange={(event) => handleChange(event, setData)}
      alert={alerts.repeats}
      subAlert={alerts.maxRepeats}
      className="repeats-field form-field"
      required
    />
  </>);
};

export default MedicationDetails;
