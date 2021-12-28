import { db } from "../firebase/config";
import { useState, useEffect } from "react";

// Firebase imports
import { doc, getDoc } from "firebase/firestore";

// A hook that retrieves all documents in real time from a specifid collection. Can be upgraded to support queries at a later date
export const useScripts = (userId) => {
  const [scripts, setScripts] = useState(null);

  useEffect(() => {
    // Get reference to the intended user's user doc (which contains their scripts)
    let ref = doc(db, 'users', userId);

    // The user will never be able to add a script while viewing current scripts unless they are using multiple devices, which is an unrealistic use case. Hence a single getDoc function will suffice
    const fetchScripts = async () => {
      const docSnap = await getDoc(ref);
      // Array to take script data
      const results = [];

      // Get the array of script IDs for this user
      const scriptIDs = docSnap.data().scripts;
      
      // Iterate through each scriptID and fetch the associated script data
      for (let i = 0; i < scriptIDs.length; i++) {
        const scriptData = await getDoc(doc(db, 'scripts', scriptIDs[i]));
        results.push(scriptData.data());
      }

      setScripts(results);
    }

    fetchScripts();

  }, [userId])

  // Reference the documents using destructuring in any component
  return { scripts }
}
