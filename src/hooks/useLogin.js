import { useState } from "react"
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from '../hooks/useAuthContext';

// Custom hook to handle user signing in
export const useLogin = () => {
  // Error can be passed to UI elements as needed
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const errorHandling = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        setError('Please enter a valid email address.')
        break;
      case 'auth/wrong-password':
        setError("That's an incorrect password. Try again.")
        break;
      case 'auth/user-not-found':
        setError("We couldn't find an account with that email address. Check for typos and try again.")
        break;
      case 'auth/too-many-requests':
        setError('Failed to login too many times. Please wait a few minutes before trying again.')
        break;
      case 'auth/network-request-failed':
        setError("We couldn't connect to the network. Please check your internet connection and try again.")
        break;
    
      default:
        setError('An unknown server error occured. Please try again.')
        break;
    }
  };

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
        errorHandling(err.code);
      })
  }

  return { error, login, isPending }
}
