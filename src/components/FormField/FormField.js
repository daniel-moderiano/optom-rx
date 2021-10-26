const FormField = (props) => {
  const { fieldType, name, label, value, placeholder, onChange } = props;

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
        />
      </label>
      
    </div> 
  );
}

export default FormField;