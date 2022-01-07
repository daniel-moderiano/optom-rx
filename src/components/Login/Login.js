
import { useLogin } from '../../hooks/useLogin';
import { Link } from "react-router-dom";
import { StyledLogin } from "./Login.styled";
import FormField from "../FormField/FormField";
import { useState } from "react";
import Dots from '../utils/Dots/Dots';

const Login = () => {
  const { error, login, isPending } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <StyledLogin className="Login">

      <div className="login-container">
        <h2 className="Login__title">Log in</h2>

        <form onSubmit={(event) => {
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
          />

          <FormField 
            fieldType="password" 
            name="password"
            label="Password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
            className="auth-field form-field"
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
