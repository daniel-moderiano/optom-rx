import { StyledFormField } from "./FormField.styled";

const FormField = (props) => {
  const { fieldType, name, label, value, placeholder, onChange, className } = props;

  return (
    <StyledFormField className="form-field">
      {/* Input nested in label to avoid the need for htmlFor + id. A <span> may be wrapped around the label text to add more styling options */}
      <label className="form-field__label">
        {label}
        <input 
          name={name}
          type={fieldType} 
          value={value} 
          placeholder={placeholder} 
          onChange={onChange} 
          className={className}
        />
      </label>
      
    </StyledFormField> 
  );
}

FormField.defaultProps = {
  className: 'form-field__input',
}

export default FormField;