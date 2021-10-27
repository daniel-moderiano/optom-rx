import { StyledFormField } from "./FormField.styled";

const FormField = (props) => {
  const { fieldType, name, label, value, placeholder, onChange, id } = props;

  return (
    <StyledFormField className="form-field">
      <label className="form-field__label">
        {label}
        <input 
          className="form-field__input"
          name={name}
          type={fieldType} 
          value={value} 
          placeholder={placeholder} 
          onChange={onChange} 
          id={id}
        />
      </label>
      
    </StyledFormField> 
  );
}

FormField.defaultProps = {
  id: 'form-field__input',
}

export default FormField;