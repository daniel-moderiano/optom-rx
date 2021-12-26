import { useState } from "react";
import FormField from "../FormField/FormField";

const AuthForm = ({ type, submitFunc, buttonLabel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === 'login') {
      submitFunc(email, password);
    } else {
      submitFunc(email, password, displayName)
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>

      <FormField 
        fieldType="email" 
        name="email"
        label="Email" 
        value={email} 
        onChange={(event) => setEmail(event.target.value)} 
        className="auth-field form-field"
      />

      <FormField 
        fieldType="password" 
        name="password"
        label="Password" 
        value={password} 
        onChange={(event) => setPassword(event.target.value)} 
        className="auth-field form-field"
      />

      {(type === 'signup') && 
        <div className="displayName-group">
          <FormField 
            fieldType="text" 
            name="displayName"
            label="Display name" 
            value={displayName} 
            onChange={(event) => setDisplayName(event.target.value)} 
            className="auth-field form-field displayName-field"
          />
          <span className="displayName-msg">This name will be visible only to you when logged in</span>
        </div>
        
      }

      <button>{buttonLabel}</button>

    </form>
  )
}

export default AuthForm;
