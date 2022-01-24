import Alert from "../utils/Alert/Alert";
import { StyledFormField } from "./FormField.styled";

const FormField = (props) => {
  const { fieldType, id, name, label, value, placeholder, onChange, className, alert, subAlert, maxlength, checked, enterFunc, required, autoFocus, autocomplete } = props;

  // Used in conjunction with aria-describedby. Alert IDs will prefer ID, otherwise default to name
  const alertID = `${id ? id + '-alert' : name + '-alert'}`;

  // Check if there is either an alert or subalert present. If so, aria-describedby attribute must be present
  const ariaDescribe = (Object.keys(alert).length > 0 || Object.keys(subAlert).length) ? { "aria-describedby": alertID } : {};

  <input type="text" name="expire" id="expire" aria-labelledby="expLabel expDesc"></input>
  return (
    <StyledFormField className={className}>
      <div className="container">
        <label className="form-field__label" htmlFor={id ? id : name}>
          <span className="label-text">{label}</span>
            <input 
              id={id ? id : name}
              name={name}
              type={fieldType} 
              value={value} 
              placeholder={placeholder} 
              onChange={onChange} 
              maxLength={maxlength}
              checked={checked}
              className={checked ? 'checked' : 'unchecked'}
              onKeyDown={enterFunc}
              required={required}
              autoFocus={autoFocus ? true : false}
              autoComplete={autocomplete ? autocomplete : false}
              {...ariaDescribe}
            />
            {fieldType === ('checkbox') && <span className={`checkmark ${checked ? 'show' : 'hide'}`}></span>}
            <svg xmlns="http://www.w3.org/2000/svg" className="tickCircle hide" viewBox="0 0 512 512">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="#fff" stroke="#0a7e00" strokeMiterlimit="10" strokeWidth="25"/>
              <path fill="#fff" stroke="#0a7e00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="27" d="M352 176L217.6 336 160 272"/>
            </svg>
        </label>
      </div>
      
      {/* Pass the alert prop as an object only where alerts are required (default null) that contains both the message to display in the alert, and the type of alert, e.g. error, warning, success */}
      {Object.keys(alert).length > 0 &&
        <Alert type={alert.type} message={alert.message} id={alertID}/>
      }

      {/* SubAlert is used for a second alert either applying to the same field, or for an adjacent related field where it makes more sense to group alerts */}
      {(Object.keys(subAlert).length > 0 && Object.keys(alert).length === 0)  && 
        <Alert type={subAlert.type} message={subAlert.message} id={alertID} subAlert={true}/>
      } 
    </StyledFormField> 
  );
}

FormField.defaultProps = {
  fieldType: 'text',
  className: 'form-field',
  alert: {},
  subAlert: {},
}

export default FormField;

