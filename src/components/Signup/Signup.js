import AuthForm from "../AuthForm/AuthForm";

const Signup = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('User signed up');
  }

  return (
    <div className="Signup">
      <h2 className="Signup__title">Sign up</h2>
      <AuthForm 
        handleSubmit={handleSubmit}
        buttonLabel="Sign up"
      />
    </div>
  )
}

export default Signup;
