const FormField = (props) => {
  const { fieldType, name, label, value, placeholder, onChange, id } = props;

  return (
    <div className="form-field">
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
      
    </div> 
  );
}

FormField.defaultProps = {
  id: 'form-field__input',
}

export default FormField;