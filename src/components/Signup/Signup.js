import AuthForm from "../AuthForm/AuthForm";
import { useSignup } from "../../hooks/useSignup";
import { Link } from "react-router-dom";
import { StyledSignup } from "./Signup.styled";

const Signup = () => {
  const { error, signup } = useSignup();

  return (
    <StyledSignup className="Signup">
      <h2 className="Signup__title">Sign up</h2>
      <AuthForm 
        type="signup"
        submitFunc={signup}
        buttonLabel="Sign up"
      />
      <div className="login-option">
        <Link to="/" className="home-link">Cancel</Link>
        <div className="login-group">
          <span className="login-msg">Already have an account?</span>
          <Link to="/login" className="login-link">Log in.</Link>
        </div>
      </div>
      {/* Conditionally render a UI error message */}
      {error && <p>{error}</p>}
    </StyledSignup>
  )
}

export default Signup;
