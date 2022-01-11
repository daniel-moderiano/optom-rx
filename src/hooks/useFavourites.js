import { db } from "../firebase/config";
import { useState, useEffect } from "react";

// Firebase imports
import { doc, onSnapshot } from "firebase/firestore";

// A hook that retrieves all documents in real time from a specifid collection. Can be upgraded to support queries at a later date
export const useFavourites = (userID) => {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This technically marks the beginning of the fetch call, so set pending state here
    setIsPending(true);

    // Written as an unsub function to unsubscribe once component dismounts
    const unsub = onSnapshot(doc(db, 'users', userID), 
      (snapshot) => {
        setIsPending(false);
        // In the event the user is offline, the snapshot will still return using a local cache version, and this will default to an empty docs array. Handle this accordingly
        // if (snapshot.metadata.fromCache && snapshot.docs.length === 0) {
        //   setError("No providers found. Please check you are connected to the internet for live data");
        // }
        // Successful result obtained here, adjust pending state

        if (snapshot.data()) {
          // If the data is retrieved this point will be reached, even if there are no scripts
          console.log(snapshot.data());
          setDocuments(snapshot.data().favourites);
        } else {
          // The document retrieved will be null in this case, and data() undefined, so set an error
    
          setError('Failed to fetch favourites');
        }
      
      }, 
      (error) => {
        // Error is caught with this callback syntax
        setError(error);
        setIsPending(false);
    });

    return () => unsub()

  }, [userID])

  // Reference the documents using destructuring in any component
  return { documents, isPending, error }
}
