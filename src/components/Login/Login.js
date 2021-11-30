import AuthForm from "../AuthForm/AuthForm";
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
  const { error, login } = useLogin();

  return (
    <div className="Login">
      <h2 className="Login__title">Login</h2>
      <AuthForm 
        submitFunc={login}
        buttonLabel="Login"
      />
      {error && <p>{error}</p>}
    </div>
  )
}

export default Login;
