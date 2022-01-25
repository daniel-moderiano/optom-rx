import { useState } from "react"
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from '../hooks/useAuthContext';
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { useErrorHandling } from "./useErrorHandling";

// Custom hook to handle user signing in
export const useSignup = () => {
  // Error can be passed to UI elements as needed
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const { handleLoginSignupError } = useErrorHandling();

  const signup = async (email, password, displayName, setFirstSignIn) => {
    setError(null);
    setIsPending(true);

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
      dispatch({ type: 'LOGIN', payload: res.user });
      // Ensure a first time user receives any relevant first time user features (like email verification)
      setFirstSignIn(true);
    } catch (err) {
      setIsPending(false);
      handleLoginSignupError(err.code, setError);
    }
  }
  return { error, isPending, signup }
}
