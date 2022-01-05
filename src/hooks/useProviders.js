import { db } from "../firebase/config";
import { useState, useEffect, useRef } from "react";

// Firebase imports
import { getDocs, query, collection, where } from "firebase/firestore";

// A hook that retrieves all documents in real time from a specifid collection. Can be upgraded to support queries at a later date
export const useProviders = (docQuery) => {
  const [providers, setProviders] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // Avoid an infinite loops via useRef (since query is an array)
  const docQueryCurrent = useRef(docQuery).current

  useEffect(() => {
    let ref = query(collection(db, 'providers'), where(...docQueryCurrent));

    // The user will never be able to add a script while viewing current scripts unless they are using multiple devices, which is an unrealistic use case. Hence a single getDoc function will suffice
    const fetchProviders = async () => {
      // Set loading state appropriately
      setIsPending(true);

      try {
        const docSnap = await getDocs(ref);

        let results = [];
        docSnap.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id })
        });
        setProviders(results);

        // Fetch complete
        setIsPending(false);
        setError(null);
      } catch (error) {
        setIsPending(false);
        setError('Could not fetch data');
        console.log(error.message);
      }      
    }

    fetchProviders();

  }, [docQueryCurrent])

  // Reference the documents using destructuring in any component
  return { providers, isPending, error }
}
