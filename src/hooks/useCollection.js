import { db } from "../firebase/config";
import { useState, useEffect, useRef } from "react";

// Firebase imports
import { collection, onSnapshot } from "firebase/firestore";

// A hook that retrieves all documents in real time from a specifid collection. Can be upgraded to support queries at a later date
export const useCollection = (collectionName) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = collection(db, collectionName)

    // Add query support 'q" here
    // if (q) {
    //   ref = query(ref, where(...q));
    // }

    // Written as an unsub function to unsubscribe once component dismounts
    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id })
      });
      setDocuments(results);
    })

    return () => unsub()

  }, [collectionName])

  // Reference the documents using destructuring in any component
  return { documents }
}
