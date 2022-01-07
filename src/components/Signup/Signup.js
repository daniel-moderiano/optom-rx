import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";
import { StyledSignup } from "./Signup.styled";
import FormField from "../FormField/FormField";
import { useState, useEffect } from "react";
import Dots from "../utils/Dots/Dots";

const Signup = () => {
  const { error, isPending, signup } = useSignup();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const [emailAlert, setEmailAlert] = useState({});
  const [passwordAlert, setPasswordAlert] = useState({});
  const [displayNameAlert, setDisplayNameAlert] = useState({});


  // Inline form validation
  useEffect(() => {
    // Event propagation will capture all focusout events from login form
    const signupValidation = () => {
      document.querySelector('.Signup__form').addEventListener('focusout', (event) => {
        const { name, value } = event.target;
        switch (true) {
          case name === 'email':
            // Check for blank field
            if (value.trim().length === 0) {
              setEmailAlert({
                  message: "This field cannot be left blank",
                  type: 'error',
                }
              );
              event.target.classList.add('error');
            } else {
              event.target.classList.remove('error');
              setEmailAlert({});
            }
            break;

          case name === 'password':
            // Check for blank field
            if (value.trim().length === 0) {
              setPasswordAlert({
                  message: "This field cannot be left blank",
                  type: 'error',
                }
              );
              event.target.classList.add('error');
            } else {
              event.target.classList.remove('error');
              setPasswordAlert({});
            }
            break;

          case name === 'displayName':
            // Check for blank field
            if (value.trim().length === 0) {
              setDisplayNameAlert({
                  message: "This field cannot be left blank",
                  type: 'error',
                }
              );
              event.target.classList.add('error');
            } else {
              event.target.classList.remove('error');
              setDisplayNameAlert({});
            }
            break;

          default:
            break;
        }
      });
    };

    signupValidation();
  }, []);

  return (
    <StyledSignup className="Signup">

      <div className="signup-container">
        <h2 className="Signup__title">Sign up</h2>
        {/* <AuthForm 
          type="signup"
          submitFunc={signup}
          buttonLabel="Sign up"
        /> */}

        <form className="Signup__form" onSubmit={(event) => {
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
          alert={emailAlert}
        />

        <FormField 
          fieldType="password" 
          name="password"
          label="Password" 
          value={password} 
          onChange={(event) => setPassword(event.target.value)} 
          className="auth-field form-field"
          alert={passwordAlert}
        />

          <div className="displayName-group">
            <FormField 
              fieldType="text" 
              name="displayName"
              label="Display name" 
              value={displayName} 
              onChange={(event) => setDisplayName(event.target.value)} 
              className="auth-field form-field displayName-field"
              alert={displayNameAlert}
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
