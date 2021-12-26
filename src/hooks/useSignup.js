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
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    try {
      // Firebase function to sign up user. Once resolved, confirm with a context state change
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Add display name to user
      await updateProfile(res.user, {
        displayName: displayName,
      })
  
      await setDoc(doc(db, 'users', res.user.uid), {
        // Any additional user data here
        scripts: [],
      });
  
      dispatch({ type: 'LOGIN', payload: res.user })
      
    } catch (error) {
      setError(error.message)
    }
  }
  return { error, signup }
}
