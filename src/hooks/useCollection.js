import { db } from "../firebase/config";
import { useState, useEffect, useRef } from "react";

// Firebase imports
import { collection, onSnapshot, query, where } from "firebase/firestore";

// A hook that retrieves all documents in real time from a specifid collection. Can be upgraded to support queries at a later date
export const useCollection = (collectionName, docQuery) => {
  const [documents, setDocuments] = useState(null);
  const [isError, setIsError] = useState(false);

  // Avoid an infinite loops via useRef (since query is an array)
  const docQueryCurrent = useRef(docQuery).current

  useEffect(() => {
    let ref = collection(db, collectionName);

    // Query is optional in this hook
    if (docQueryCurrent) {
      ref = query(ref, where(...docQueryCurrent));
    }

    // Written as an unsub function to unsubscribe once component dismounts
    const unsub = onSnapshot(ref, 
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id })
        });
        setDocuments(results);
      }, 
      (error) => {
        setIsError(true);
        console.log(error);
    });

    return () => unsub()

  }, [collectionName, docQueryCurrent])

  // Reference the documents using destructuring in any component
  return { documents, isError }
}
