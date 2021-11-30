import { useState } from "react";
import FormField from "../FormField/FormField";

const AuthForm = ({ submitFunc, buttonLabel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFunc(email, password);
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

      <button>{buttonLabel}</button>

    </form>
  )
}

export default AuthForm;
