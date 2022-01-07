
import { useLogin } from '../../hooks/useLogin';
import { Link } from "react-router-dom";
import { StyledLogin } from "./Login.styled";
import FormField from "../FormField/FormField";
import { useState, useEffect } from "react";
import Dots from '../utils/Dots/Dots';

const Login = () => {
  const { error, login, isPending } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailAlert, setEmailAlert] = useState({});
  const [passwordAlert, setPasswordAlert] = useState({});

 

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

          default:
            break;
        }
      });
    };

    loginValidation();
  }, []);


  return (
    <StyledLogin className="Login">

      <div className="login-container">
        <h2 className="Login__title">Log in</h2>

        <form className='Login__form' onSubmit={(event) => {
          event.preventDefault();
          login(email, password);
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

        {error && <p>{error}</p>}
      </div>

    </StyledLogin>
  )
}

export default Login;
