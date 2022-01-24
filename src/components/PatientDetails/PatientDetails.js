import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { useInputChanges } from "../../hooks/useInputChanges";

const PatientDetails = ({ data, setData, alerts, setAlerts, googleLoaded }) => {
  const { handleChange } = useInputChanges();

  return (<>
     {/* Legal requirements include only the patient's name and address */}
     <FormField
        name="fullName"
        label="Full name"
        value={data.fullName}
        onChange={(event) => handleChange(event, setData)}
        alert={alerts.fullName}
        autoFocus
        required
        describedBy={Object.keys(alerts.fullName).length === 0 ? null : 'fullName-alert'}
      />

      <AddressAutocomplete
        data={data}
        setData={setData}
        handleChange={(event) => handleChange(event, setData)}
        provider={false}
        alerts={alerts}
        setAlerts={setAlerts}
        googleLoaded={googleLoaded}
      />

      <div className="medicareFields">
        <FormField
          name="medicareNumber"
          label="Medicare number"
          value={data.medicareNumber}
          onChange={(event) => handleChange(event, setData)}
          alert={alerts.medicareNumber}
          subAlert={alerts.medicareRefNumber}
          maxlength="10"
          className="medicareNumber-field medicare-field form-field"
          describedBy={Object.keys(alerts.medicareNumber).length === 0 ? null : 'medicareNumber-alert'}
        />

        {/* The alert for this field is attached to medicareNumber field for UI pruposes since these fields are 'linked' conceptually */}
        <FormField
          name="medicareRefNumber"
          label="IRN"
          value={data.medicareRefNumber}
          onChange={(event) => handleChange(event, setData)}
          maxlength="1"
          className="irn-field medicare-field form-field"
          describedBy={Object.keys(alerts.medicareRefNumber).length === 0 ? null : 'medicareRefNumber-alert'}
        />
      </div>
  </>);
};

export default PatientDetails;
