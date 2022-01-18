import { StyledFormField } from "./FormField.styled";

const FormField = (props) => {
  const { fieldType, id, name, label, value, placeholder, onChange, className, alert, subAlert, maxlength, checked, enterFunc, required, autoFocus, describedBy, autocomplete } = props;

  const ariaDescribe = describedBy ? { "aria-describedby": describedBy } : {};
  const autocompleteText = autocomplete ? { "autoComplete": autocomplete } : {};
  
  // const ariaAlert = alert === {} ? {} : { "aria-describedby": `${id ? id : name}-alert` };

  <input type="text" name="expire" id="expire" aria-labelledby="expLabel expDesc"></input>
  return (
    <StyledFormField className={className}>
      {/* Input nested in label to avoid the need for htmlFor + id. A <span> may be wrapped around the label text to add more styling options */}
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
              {...ariaDescribe}
              {...autocompleteText}
            />
            {fieldType === ('checkbox') && <span className={`checkmark ${checked ? 'show' : 'hide'}`}></span>}
            <svg xmlns="http://www.w3.org/2000/svg" className="tickCircle hide" viewBox="0 0 512 512">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="#0a7e00" stroke="#0a7e00" strokeMiterlimit="10" strokeWidth="32"/>
              <path fill="#0a7e00" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="36" d="M352 176L217.6 336 160 272"/>
            </svg>
        </label>
      </div>

      

      
      {/* Pass the alert prop as an object only where alerts are required (default null) that contains both the message to display in the alert, and the type of alert, e.g. error, warning, success */}
      {Object.keys(alert).length > 0 &&
      // Consider adding a cross icon above in the label for visually impaired users
        <div className="alert-container" id={`${id ? id + '-alert' : name + '-alert'}`} role="alert">
          {(alert.type === 'error') && 
            (<svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--error" viewBox="0 0 512 512" width="15px">
              <path d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z" fill="none" stroke="#B60000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z" fill="none" stroke="#B60000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path fill="#B60000" d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"/>
            </svg>)
          }
          {(alert.type === 'success') && 
            (<svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--success" viewBox="0 0 512 512" width="15px">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#096600" strokeMiterlimit="10" strokeWidth="32"/>
              <path fill="none" stroke="#096600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352 176L217.6 336 160 272"/>
            </svg>)
          }
          {(alert.type === 'neutral') && 
            (<svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--neutral" viewBox="0 0 512 512" width="15px">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#014083" strokeMiterlimit="10" strokeWidth="32"/>
              <path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="none" stroke="#014083" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="#014083"/>
            </svg>)
          }

          
          <span className={`alert alert--${alert.type}`}>{alert.message}</span>
        </div>
}

      {/* SubAlert is used for a second alert either applying to the same field, or for an adjacent related field where it makes more sense to group alerts */}
      {Object.keys(subAlert).length > 0 && 
      // Consider adding a cross icon above in the label for visually impaired users
        <div className="alert-container">
          {(subAlert.type === 'error') && 
            (<svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--error" viewBox="0 0 512 512" width="16px">
              <path d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z" fill="none" stroke="#B3000F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z" fill="none" stroke="#B3000F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path fill="#B3000F" d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"/>
            </svg>)
          }
          {(subAlert.type === 'success') && 
            (<svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--success" viewBox="0 0 512 512" width="17px">
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#0a7e00" strokeMiterlimit="10" strokeWidth="32"/>
              <path fill="none" stroke="#0a7e00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352 176L217.6 336 160 272"/>
            </svg>)
          }
          {(subAlert.type === 'neutral') && 
            (<svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--neutral" viewBox="0 0 512 512" width="17px">

              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#00477A" strokeMiterlimit="10" strokeWidth="32"/>
              <path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="none" stroke="#00477A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="#014083"/>
            </svg>)
          }
          <span className={`alert alert--${subAlert.type}`}>{subAlert.message}</span>
        </div>
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

