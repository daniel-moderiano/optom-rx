import { db } from "../firebase/config";
import { useState, useEffect } from "react";

// Firebase imports
import { doc, getDoc } from "firebase/firestore";

// A hook that retrieves all documents in real time from a specifid collection. Can be upgraded to support queries at a later date
export const useScripts = (userId) => {
  const [scripts, setScripts] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get reference to the intended user's user doc (which contains their scripts)
    let ref = doc(db, 'users', userId);

    // The user will never be able to add a script while viewing current scripts unless they are using multiple devices, which is an unrealistic use case. Hence a single getDoc function will suffice
    const fetchScripts = async () => {
      // Set loading state appropriately
      setIsPending(true);

      try {
        const docSnap = await getDoc(ref);

        // Fetch complete
        setIsPending(false);

        // Get the array of script IDs for this user. Reverse the array to get most recent scripts first
        const scriptData = (docSnap.data().scripts).reverse();

        setScripts(scriptData);
        setError(null);
      } catch (error) {
        setIsPending(false);
        // Instead launch a toast here, or use a useEffect hook in the target component to launch toast

        setError(error.message);

      }

      
    }

    fetchScripts();

  }, [userId])

  // Reference the documents using destructuring in any component
  return { scripts, isPending, error }
}
