import { db } from "../firebase/config";
import { useState, useEffect } from "react";

// Firebase imports
import { doc, onSnapshot } from "firebase/firestore";

// A hook that retrieves all documents in real time from a specifid collection. Can be upgraded to support queries if needed
export const useScripts = (userID) => {
  const [scripts, setScripts] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This technically marks the beginning of the fetch call, so set pending state here
    setIsPending(true);
    setError(null);
    // Get reference to the intended user's user doc (which contains their scripts)
    let ref = doc(db, 'users', userID);

    // Written as an unsub function to unsubscribe once component dismounts
    const unsub = onSnapshot(ref, 
      (snapshot) => {
        setIsPending(false);
        setError(null);
        if (snapshot.data()) {
          // If the data is retrieved this point will be reached, even if there are no scripts

          // Ensure newest scripts are displayed at the top of the list
          const scriptData = (snapshot.data().scripts).reverse();
          setScripts(scriptData);
        } else {
          // The document retrieved will be null in this case, and data() undefined, so set an error
          setError('Failed to fetch scripts');
        }
      }, 
      (error) => {
        // Error is caught with this callback syntax
        setError(error);
        setIsPending(false);
    });

    return () => unsub()

  }, [userID])

  return { scripts, isPending, error }
}
