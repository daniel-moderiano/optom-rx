import { db } from "../firebase/config";
import { useState, useEffect } from "react";

// Firebase imports
import { doc, getDoc } from "firebase/firestore";

// A hook that fetches the current script number from the backend, using a single getDoc call (as opposed to snapshot real time updates), and subsequently increments this number and updates the backend ready for subsequent calls
export const useNumbers = () => {
  const [scriptNo, setScriptNo] = useState('');
  const [authRxNo, setAuthRxNo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  console.log('call useNumbers');

  useEffect(() => {
    // Note there will only ever be one 'current' field in each document in this collection. There are only two documents: scriptNo and authRxNo. They should never need to be called separately.
    const scriptNo = doc(db, 'numbers', 'scriptNo');
    const authRxNo = doc(db, 'numbers', 'authRxNo');

    // Initialise error and loading state
    setIsLoading(true);
    setIsError(false);

    // Async within useEffect should be applied using the commented code below. Because there are two similar numbers being fetched, Promise.all() syntax is used in this hook currently
    // const fetchData = async () => {
    //   // Initialise error and loading state
    //   setIsLoading(true);
    //   setIsError(false);

    //   try {
    //     const scriptNoSnap = await getDoc(scriptNo);
    //     const authRxNoSnap = await getDoc(authRxNo);
    //     setScriptNo(scriptNoSnap.data().current);
    //     setAuthRxNo(authRxNoSnap.data().current);
    //   } catch (error) {
    //     setIsError(true);
    //   }
    //   setIsLoading(false);
    // };

    const fetchData = () => {
      // Define promises for each doc
      const scriptNoSnap = getDoc(scriptNo);
      const authRxNoSnap = getDoc(authRxNo); 

      // Handle the collective responses
      Promise.all([scriptNoSnap, authRxNoSnap])
        .then(([script, auth]) => {
          // Handle the data
          setScriptNo(script.data().current);
          setAuthRxNo(auth.data().current);
          setIsLoading(false);
          console.log('done');
        })
        .catch((error) => {
          setIsError(true);
          setIsLoading(false);
        }) 
      
    };

    fetchData();

  }, [])

  // Reference the documents using destructuring in any component
  return { scriptNo, authRxNo, isError, isLoading }
}
