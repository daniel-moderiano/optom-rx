import { StyledFormField } from "./FormField.styled";

const FormField = (props) => {
  const { fieldType, id, name, label, value, placeholder, onChange, className, alert, maxlength, checked } = props;

  return (
    <StyledFormField className={className}>
      {/* Input nested in label to avoid the need for htmlFor + id. A <span> may be wrapped around the label text to add more styling options */}
      <label className="form-field__label">
        {label}
        <input 
          id={id}
          name={name}
          type={fieldType} 
          value={value} 
          placeholder={placeholder} 
          onChange={onChange} 
          maxLength={maxlength}
          checked={checked}
        />
      </label>
      {/* Pass the alert prop as an object only where alerts are required (default null) that contains both the message to display in the alert, and the type of alert, e.g. error, warning, success */}
      {Object.keys(alert).length > 0 && 
      // Consider adding a cross icon above in the label for visually impaired users
        <span className={`alert alert--${alert.type}`}>{alert.message}</span>
      }
      
    </StyledFormField> 
  );
}

FormField.defaultProps = {
  fieldType: 'text',
  className: '',
  alert: {},
}

export default FormField;

