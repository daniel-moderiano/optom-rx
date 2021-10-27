import { StyledFormField } from "./FormField.styled";

const FormField = (props) => {
  const { fieldType, name, label, value, placeholder, onChange, className } = props;

  return (
    <StyledFormField className="form-field">
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