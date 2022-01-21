import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";
import { StyledSignup } from "./Signup.styled";
import FormField from "../FormField/FormField";
import { useState, useEffect } from "react";
import Dots from "../utils/Dots/Dots";
import Button from '../utils/Button/Button'
import PasswordContainer from "../utils/PasswordContainer/PasswordContainer";


const Signup = ({ setPage, setFirstSignIn }) => {
  const { error, isPending, signup } = useSignup();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const [emailAlert, setEmailAlert] = useState({});
  const [passwordAlert, setPasswordAlert] = useState({
    type: 'helper',
    message: 'Password must contain at least 6 characters.'
  });
  const [displayNameAlert, setDisplayNameAlert] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('signup');
  }, [setPage])

   // Ensure form is validated before calling form submission function (to generate Rx)
   const isFormValid = () => {
    let valid = true;
    let inputFocused = false;

    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const displayNameInput = document.querySelector('input[name="displayName"]');

    // Check for blank field
    if (emailInput.value.trim().length === 0) {
      if (!inputFocused) {
        emailInput.focus();
        inputFocused = true;
      }
      setEmailAlert({
          message: "Please enter an email address.",
          type: 'error',
        }
      );
      emailInput.classList.add('error');
      valid = false;
    } 

    // Check for blank field
    if (passwordInput.value.trim().length === 0) {
      if (!inputFocused) {
        passwordInput.focus();
        inputFocused = true;
      }
      setPasswordAlert({
          message: "Please enter a password.",
          type: 'error',
        }
      );
      passwordInput.classList.add('error');
      valid = false;
    } 

    // Check for blank field
    if (displayNameInput.value.trim().length === 0) {
      if (!inputFocused) {
        displayNameInput.focus();
        inputFocused = true;
      }
      setDisplayNameAlert({
          message: "Please enter a display name.",
          type: 'error',
        }
      );
      displayNameInput.classList.add('error');
      valid = false;
    } 

    return valid;
  };

  return (
    <StyledSignup className="Signup">

      <div className="Signup__container">
        <h2 className="Signup__title">Sign up</h2>

        <form className="Signup__form" noValidate onSubmit={(event) => {
          event.preventDefault();
          // Check form validity before calling submit function
          if (isFormValid()) {
            signup(email, password, displayName, setFirstSignIn);
          }
          
        }}>

        <FormField 
          fieldType="email" 
          name="email"
          label="Email" 
          value={email} 
          onChange={(event) => setEmail(event.target.value)} 
          className="auth-field form-field"
          alert={emailAlert}
          autoFocus
          required
          describedBy={Object.keys(emailAlert).length === 0 ? null : 'email-alert'}
          autocomplete="username"
        />

          <PasswordContainer showPassword={showPassword} handleClick={() => setShowPassword((prevState) => (!prevState))}>
            <FormField 
              id="new-password"
              fieldType={`${showPassword ? 'text' : 'password'}`}
              name="password"
              label="Password" 
              value={password} 
              onChange={(event) => setPassword(event.target.value)} 
              className="auth-field form-field pass-field"
              alert={passwordAlert}
              // describedBy="password-desc"
              required
              describedBy={Object.keys(passwordAlert).length === 0 ? null : 'new-password-alert'}
              autocomplete="new-password"
            />
          </PasswordContainer>

          <FormField 
            fieldType="text" 
            name="displayName"
            label="Display name" 
            value={displayName} 
            onChange={(event) => setDisplayName(event.target.value)} 
            className="auth-field form-field displayName-field"
            alert={displayNameAlert}
            // describedBy="display-desc"
            describedBy={Object.keys(displayNameAlert).length === 0 ? null : 'displayName-alert'}
            required
          />


          {error && <div className="error-container">
            <svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--error" viewBox="0 0 512 512" width="16px">
              <path d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z" fill="none" stroke="#B60000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z" fill="none" stroke="#B60000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path fill="#B60000" d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"/>
            </svg>
            <span className="alert alert--error">{error}</span>
          </div>}

          <Button classLabel="Signup__btn" type="submit">
            {isPending ? (
              <Dots color="white" />
              ) : (
            'Sign up'
            )} 
          </Button>

        </form>
        <div className="login-option">
          <div className="login-group">
            <span className="login-msg">Already have an account?</span>
            <Link to="/login" className="login-link">Log in.</Link>
          </div>
        </div>

      </div>
    </StyledSignup>
  )
}

export default Signup;
