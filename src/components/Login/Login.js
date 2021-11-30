import AuthForm from "../AuthForm/AuthForm";

const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('User logged in');
  }

  return (
    <div className="Login">
      <h2 className="Login__title">Login</h2>
      <AuthForm 
        handleSubmit={handleSubmit}
        buttonLabel="Login"
      />
    </div>
  )
}

export default Login;
