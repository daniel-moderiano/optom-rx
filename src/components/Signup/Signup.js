import AuthForm from "../AuthForm/AuthForm";
import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";
import { StyledSignup } from "./Signup.styled";
import FormField from "../FormField/FormField";
import { useState } from "react";
import Dots from "../utils/Dots/Dots";
import Spinner from '../utils/Spinner/Spinner'

const Signup = () => {
  const { error, isPending, signup } = useSignup();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  return (
    <StyledSignup className="Signup">

      <div className="signup-container">
        <h2 className="Signup__title">Sign up</h2>
        {/* <AuthForm 
          type="signup"
          submitFunc={signup}
          buttonLabel="Sign up"
        /> */}

        <form onSubmit={(event) => {
          event.preventDefault();
          signup(email, password, displayName)
        }}>

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

          <button className="signup-btn">
            {isPending ? (
              <Dots color="white" />
              ) : (
            'Sign up'
            )} 
          </button>

        </form>
        <div className="login-option">
          <div className="login-group">
            <span className="login-msg">Already have an account?</span>
            <Link to="/login" className="login-link">Log in.</Link>
          </div>
        </div>
        {/* Conditionally render a UI error message */}
        {error && <p>{error}</p>}
      </div>
    </StyledSignup>
  )
}

export default Signup;
