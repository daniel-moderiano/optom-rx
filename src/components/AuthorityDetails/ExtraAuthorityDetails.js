import { useInputChanges } from "../../hooks/useInputChanges";
import FormField from "../FormField/FormField";


const ExtraAuthorityDetails = ({ data, setData, alerts }) => {
  const { handleChange, toggleBooleanState, handleEnterKeyOnCheckbox } = useInputChanges();

  return (<>
    {/* Consider a variable message beside or below this saying 'not required for this medication' or similar */}
    <FormField
      name="authCode"
      label="Authority code (where applicable)"
      value={data.authCode}
      onChange={(event) => handleChange(event, setData)}
      alert={alerts.authCode}
    />

    <div className="retention">
      <div className="retention">
        <div className="justification-field">
          <label htmlFor="justification">
            Clinical justification for use of item
            <textarea className="textarea-justification" name="justification" value={data.justification} id="justification" cols="30" rows="3" onChange={(event) => handleChange(event, setData)} ></textarea>
          </label>
        </div>

        <FormField
          fieldType="number"
          name="age"
          label="Patient's age if under 18"
          value={data.age}
          onChange={(event) => handleChange(event, setData)}
          alert={alerts.age}
          className="age-field"
        />

        <FormField
          fieldType="checkbox"
          name="prevAuth"
          label="Patient has received authority for this medicine before"
          onChange={() => toggleBooleanState(setData, data, 'prevAuth')}
          checked={data.prevAuth}
          className="checkbox prevAuth"
          enterFunc={(event) => handleEnterKeyOnCheckbox(event, setData, data)}
        />
      </div>
    </div>
  </>)
}

export default ExtraAuthorityDetails;
