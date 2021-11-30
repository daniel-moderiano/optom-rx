import AuthForm from "../AuthForm/AuthForm";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {
  const { error, signup } = useSignup();

  return (
    <div className="Signup">
      <h2 className="Signup__title">Sign up</h2>
      <AuthForm 
        submitFunc={signup}
        buttonLabel="Sign up"
      />
      {/* Conditionally render a UI error message */}
      {error && <p>{error}</p>}
    </div>
  )
}

export default Signup;
