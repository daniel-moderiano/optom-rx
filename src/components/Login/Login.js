
import { useLogin } from '../../hooks/useLogin';
import { Link } from "react-router-dom";
import { StyledLogin } from "./Login.styled";
import FormField from "../FormField/FormField";
import { useState, useEffect } from "react";
import Dots from '../utils/Dots/Dots';

const Login = ({ setPage }) => {
  const { error, login, isPending } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailAlert, setEmailAlert] = useState({});
  const [passwordAlert, setPasswordAlert] = useState({});

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('login');
  }, [setPage])

  // Inline form validation
  useEffect(() => {
    // Event propagation will capture all focusout events from login form
    const loginValidation = () => {
      document.querySelector('.Login__form').addEventListener('focusout', (event) => {
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

          default:
            break;
        }
      });
    };

    loginValidation();
  }, []);

   // Ensure form is validated before calling form submission function
   const isFormValid = () => {
    let valid = true;

    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    // Check for blank field
    if (emailInput.value.trim().length === 0) {
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
      setPasswordAlert({
          message: "Please enter an password.",
          type: 'error',
        }
      );
      passwordInput.classList.add('error');
      valid = false;
    } 
    return valid;
  }

  return (
    <StyledLogin className="Login">

      <div className="login-container">
        <h2 className="Login__title">Log in</h2>

        <form className='Login__form' noValidate onSubmit={(event) => {
          event.preventDefault();
          // Ensure form validation passes
          if (isFormValid()) {
            login(email, password);
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
          />

          <FormField 
            fieldType="password" 
            name="password"
            label="Password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
            className="auth-field form-field"
            alert={passwordAlert}
            required
            describedBy={Object.keys(passwordAlert).length === 0 ? null : 'password-alert'}
          />

          {error && <div className="error-container">
            <svg xmlns="http://www.w3.org/2000/svg" className="alert-icon alert-icon--error" viewBox="0 0 512 512" width="16px">
              <path d="M85.57 446.25h340.86a32 32 0 0028.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0028.17 47.17z" fill="none" stroke="#B60000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path d="M250.26 195.39l5.74 122 5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 5.95z" fill="none" stroke="#B60000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
              <path fill="#B60000" d="M256 397.25a20 20 0 1120-20 20 20 0 01-20 20z"/>
            </svg>
            <span className="alert alert--error">{error}</span>
          </div>}

          <button className="login-btn">
            
            {isPending ? (
              <Dots color="white" />
              ) : (
            'Log in'
            )} 
          </button>

        </form>

        <div className="signup-option">
          <span className="signup-msg">Don't have an account?</span>
          <Link to="/signup" className="signup-link">Sign Up.</Link>
        </div>

        
       
      </div>

    </StyledLogin>
  )
}

export default Login;
