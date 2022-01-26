import FormField from "../FormField/FormField";
import AddressAutocomplete from "../AddressAutocomplete/AddressAutocomplete";
import { useInputChanges } from "../../hooks/useInputChanges";

// Created to help parent RxFprm component readability
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
      />

      <AddressAutocomplete
        data={data}
        setData={setData}
        handleChange={(event) => handleChange(event, setData)}
        prescriber={false}
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
        />

        {/* The alert for this field is attached to medicareNumber field for UI pruposes since these fields are 'linked' conceptually */}
        <FormField
          name="medicareRefNumber"
          label="IRN"
          value={data.medicareRefNumber}
          onChange={(event) => handleChange(event, setData)}
          maxlength="1"
          className="irn-field medicare-field form-field"
        />
      </div>
  </>);
};

export default PatientDetails;
