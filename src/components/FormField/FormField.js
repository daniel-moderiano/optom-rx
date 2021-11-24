import { StyledFormField } from "./FormField.styled";

const FormField = (props) => {
  const { fieldType, id, name, label, value, placeholder, onChange, className, alert, maxlength, checked } = props;

  return (
    <StyledFormField className={className}>
      {/* Input nested in label to avoid the need for htmlFor + id. A <span> may be wrapped around the label text to add more styling options */}
      <div className="container">
        <label className="form-field__label">
          <span className="label-text">{label}</span>
            <input 
              id={id}
              name={name}
              type={fieldType} 
              value={value} 
              placeholder={placeholder} 
              onChange={onChange} 
              maxLength={maxlength}
              checked={checked}
              className={checked ? 'checked' : 'unchecked'}
            />
            {className.includes('checkbox') && <span className={`checkmark ${checked ? 'show' : 'hide'}`}></span>}
        </label>
        {/* <svg className="tick" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg> */}
      </div>
      
      {/* Pass the alert prop as an object only where alerts are required (default null) that contains both the message to display in the alert, and the type of alert, e.g. error, warning, success */}
      {Object.keys(alert).length > 0 && 
      // Consider adding a cross icon above in the label for visually impaired users
        <div className="alert-container">
          <svg className="alert-icon alert-icon-error" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#c40000"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
          <span className={`alert alert--${alert.type}`}>{alert.message}</span>
        </div>
      }
      
    </StyledFormField> 
  );
}

FormField.defaultProps = {
  fieldType: 'text',
  className: 'form-field',
  alert: {},
}

export default FormField;

