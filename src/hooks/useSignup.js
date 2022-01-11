import { useState } from "react"
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from '../hooks/useAuthContext';
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

// Custom hook to handle user signing in
export const useSignup = () => {
  // Error can be passed to UI elements as needed
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    const errorHandling = (errorCode) => {
      switch (errorCode) {
        case 'auth/email-already-in-use':
          setError('This email is already in use. Try another.')
          break;
        
        case 'auth/invalid-email':
          setError('Please enter a valid email address.')
          break;
        case 'auth/weak-password':
          setError('Please create a password at least six characters in length.')
          break;

        case 'auth/network-request-failed':
          setError("We couldn't connect to the network. Please check your internet connection and try again.")
          break;
      
        default:
          setError('n unknown server error occured. Please try again.')
          break;

      }
    };

    try {
      
      // Firebase function to sign up user. Once resolved, confirm with a context state change
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Add display name to user
      await updateProfile(res.user, {
        displayName: displayName,
      })
  
      await setDoc(doc(db, 'users', res.user.uid), {
        // Any additional user data here
        displayName: displayName,
        scripts: [],
        favourites: [],
      });
  
      setIsPending(false);
      dispatch({ type: 'LOGIN', payload: res.user })
      
    } catch (err) {
      setIsPending(false);
      errorHandling(err.code);
    }

  }
  return { error, isPending, signup }
}
