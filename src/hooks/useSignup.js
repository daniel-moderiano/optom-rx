import { useState } from "react"
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from '../hooks/useAuthContext';

// Custom hook to handle user signing in
export const useSignup = () => {
  // Error can be passed to UI elements as needed
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    setError(null);
    // Firebase function to sign up user. Once resolved, confirm with a context state change
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.user })
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  return { error, signup }
}
