import { useState } from "react"
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from '../hooks/useAuthContext';

// Custom hook to handle user signing in
export const useLogin = () => {
  // Error can be passed to UI elements as needed
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setError(null);
    // Firebase function to login user. Once resolved, confirm with a context state change.Note the change is identical for sign up vs login
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.user })
      })
      .catch((err) => {
        setError(err.message)
      })
  }

  return { error, login }
}
