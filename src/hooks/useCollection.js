import { db } from "../firebase/config";
import { useState, useEffect, useRef } from "react";

// Firebase imports
import { collection, onSnapshot, query, where } from "firebase/firestore";

// A hook that retrieves all documents in real time from a specifid collection. Can be upgraded to support queries at a later date
export const useCollection = (collectionName, docQuery) => {
  const [documents, setDocuments] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // Avoid an infinite loops via useRef (since query is an array)
  const docQueryCurrent = useRef(docQuery).current

  useEffect(() => {
    // This technically marks the beginning of the fetch call, so set pending state here
    setIsPending(true);
    let ref = collection(db, collectionName);

    // Query is optional in this hook
    if (docQueryCurrent) {
      ref = query(ref, where(...docQueryCurrent));
    }

    // Written as an unsub function to unsubscribe once component dismounts
    const unsub = onSnapshot(ref, 
      (snapshot) => {
        setIsPending(false);
        // In the event the user is offline, the snapshot will still return using a local cache version, and this will default to an empty docs array. 
    
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id })
        });
        setDocuments(results);
      }, 
      (error) => {
        // Error is caught with this callback syntax
        setError(error);
        setIsPending(false);
    });

    return () => unsub()

  }, [collectionName, docQueryCurrent])

  return { documents, isPending, error }
}
