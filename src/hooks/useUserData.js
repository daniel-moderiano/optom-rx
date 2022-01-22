import { db } from "../firebase/config";
import { useState, useEffect } from "react";

// Firebase imports
import { doc, onSnapshot } from "firebase/firestore";

// A hook that retrieves all documents in real time from a specifid collection. Can be upgraded to support queries at a later date
export const useUserData = (userID, dataName) => {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This technically marks the beginning of the fetch call, so set pending state here
    setIsPending(true);
    setError(null);
    
    // Written as an unsub function to unsubscribe once component dismounts
    const unsub = onSnapshot(doc(db, 'users', userID), 
      (snapshot) => {
        setIsPending(false);
        setError(null);

        if (snapshot.data()) {
          // If the data is retrieved this point will be reached, even if there are no scripts
          setDocuments(snapshot.data()[dataName]);
        } else {
          // The document retrieved will be null in this case, and data() undefined, so set an erro
          setError('Failed to fetch documents');
        }
      }, 
      (error) => {
        // Error is caught with this callback syntax
        setError(error);
        setIsPending(false);
    });

    return () => unsub()

  }, [userID, dataName])

  return { documents, isPending, error }
}
