import AuthForm from "../AuthForm/AuthForm";
import { useLogin } from '../../hooks/useLogin';
import { Link } from "react-router-dom";
import { StyledLogin } from "./Login.styled";

const Login = () => {
  const { error, login } = useLogin();

  return (
    <StyledLogin className="Login">
      <h2 className="Login__title">Log in</h2>
      <AuthForm 
        type="login"
        submitFunc={login}
        buttonLabel="Log in"
      />
      <div className="signup-option">
        <Link to="/" className="home-link">Cancel</Link>
        <div className="signup-group">
          <span className="signup-msg">Don't have an account?</span>
          <Link to="/signup" className="signup-link">Sign Up.</Link>
        </div>
        
      </div>
      
      {error && <p>{error}</p>}
    </StyledLogin>
  )
}

export default Login;
