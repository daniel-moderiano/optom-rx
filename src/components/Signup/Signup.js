import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";
import { StyledSignup } from "./Signup.styled";
import FormField from "../FormField/FormField";
import { useState, useEffect } from "react";
import Dots from "../utils/Dots/Dots";
import Button from '../utils/Button/Button'


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
                  message: "Please enter an email address.",
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
                  message: "Please enter a password.",
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
                  message: "Please enter a display name.",
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

          <div className="password-group">
            

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
            
            <button className="toggle-password" type="button" aria-label={`${showPassword ? 'Show password as plain text. Warning: this will display your password on the screen.' : 'Hide password.'}`} onClick={() => setShowPassword((prevState) => (!prevState))}>
              <div className="overlay"></div>
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z"/><path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="256" cy="256" r="80" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="32"/></svg>
              )}
            </button>

          </div>


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

          <Button classLabel="Signup__btn">
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
