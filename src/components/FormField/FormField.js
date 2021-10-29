import { StyledFormField } from "./FormField.styled";

const FormField = (props) => {
  const { fieldType, id, name, label, value, placeholder, onChange, className, alert } = props;

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
        />
      </label>
      <span className="alert">{alert}</span>
    </StyledFormField> 
  );
}

FormField.defaultProps = {
  fieldType: 'text',
  className: '',
}

export default FormField;