import { useInputChanges } from "../../hooks/useInputChanges";
import FormField from "../FormField/FormField";

const AuthorityDetails = ({ drugData, setDrugData, drugAlerts, miscData, setMiscData, miscAlerts, numbersLoading }) => {
  const { handleChange, toggleBooleanState, handleEnterKeyOnCheckbox } = useInputChanges();

  return (<>
    <FormField
      fieldType="checkbox"
      name="authRequired"
      label="Authority required"
      onChange={() => toggleBooleanState(setDrugData, drugData, 'authRequired')}
      checked={drugData.authRequired}
      className="checkbox authRequired"
      enterFunc={(event) => handleEnterKeyOnCheckbox(event, setDrugData, drugData)}
      alert={drugAlerts.authRequired}
    />

    {(drugData.authRequired && drugData.pbsRx) && <>
      <div className="numbers" data-testid="numbers">
        {/* drugData.authRequired should be auto-selected once PBS integration is complete, but should also have an option to set manually */}
        {drugData.authRequired && <div className="authRxNo" data-testid="authRxNo">Authority script number: {numbersLoading ? 'Loading...' : miscData.authRxNumber}</div>}
      </div>

      {/* Consider a variable message beside or below this saying 'not required for this medication' or similar */}
      <FormField
          name="authCode"
          label="Authority code (where applicable)"
          value={miscData.authCode}
          onChange={(event) => handleChange(event, setMiscData)}
          alert={miscAlerts.authCode}
        />

        <div className="retention">
          <div className="retention">
            <div className="justification-field">
              <label htmlFor="justification">
                Clinical justification for use of item
                <textarea className="textarea-justification" name="justification" value={miscData.justification} id="justification" cols="30" rows="3" onChange={(event) => handleChange(event, setMiscData)} ></textarea>
              </label>
            </div>

            <FormField
              fieldType="number"
              name="age"
              label="Patient's age if under 18"
              value={miscData.age}
              onChange={(event) => handleChange(event, setMiscData)}
              alert={miscAlerts.age}
              className="age-field"
            />

            <FormField
              fieldType="checkbox"
              name="prevAuth"
              label="Patient has received authority for this medicine before"
              onChange={() => toggleBooleanState(setMiscData, miscData, 'prevAuth')}
              checked={miscData.prevAuth}
              className="checkbox prevAuth"
              enterFunc={(event) => handleEnterKeyOnCheckbox(event, setMiscData, miscData)}
            />
        </div>
      </div>
    </>}

    <FormField
      fieldType="date"
      name="date"
      label="Date"
      value={miscData.date}
      onChange={(event) => handleChange(event, setMiscData)}
      alert={miscAlerts.date}
      required
    />
  </>)
}

export default AuthorityDetails;
