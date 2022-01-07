import { db } from "../firebase/config";
import { useState, useEffect } from "react";

// Firebase imports
import { doc, getDoc } from "firebase/firestore";

// A hook that fetches a single one time provider from the db
export const useProvider = (providerID) => {
  const [provider, setProvider] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get reference to the intended user's user doc (which contains their scripts)
    let ref = doc(db, 'providers', providerID);

    // The user will never be able to add a script while viewing current scripts unless they are using multiple devices, which is an unrealistic use case. Hence a single getDoc function will suffice
    const fetchProvider = async () => {
      // Set loading state appropriately
      setIsPending(true);

      try {
        const docSnap = await getDoc(ref);

        // Fetch complete
        setIsPending(false);

        setProvider(docSnap.data());
        setError(null);
      } catch (error) {
        setIsPending(false);
        setError(error);
        console.log(error.message);
      }

      
    }

    fetchProvider();

  }, [providerID])

  // Reference the documents using destructuring in any component
  return { provider, isPending, error }
}

