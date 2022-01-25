import { useState } from "react"
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from '../hooks/useAuthContext';
import { useErrorHandling } from "./useErrorHandling";

// Custom hook to handle user signing in
export const useLogin = () => {
  // Error can be passed to UI elements as needed
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const { handleLoginSignupError } = useErrorHandling();

  const login = (email, password) => {
    setError(null);
    setIsPending(true);
    // Firebase function to login user. Once resolved, confirm with a context state change.Note the change is identical for sign up vs login
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setIsPending(false);
        dispatch({ type: 'LOGIN', payload: res.user })
      })
      .catch((err) => {
        setIsPending(false);
        handleLoginSignupError(err.code, setError);
      })
  }

  return { error, login, isPending }
}
