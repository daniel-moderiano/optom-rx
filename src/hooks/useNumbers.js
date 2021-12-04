import { db } from "../firebase/config";
import { useState, useEffect } from "react";

// Firebase imports
import { doc, getDoc, updateDoc } from "firebase/firestore";

// A hook that fetches the current script number from the backend, using a single getDoc call (as opposed to snapshot real time updates), and subsequently increments this number and updates the backend ready for subsequent calls
export const useNumbers = () => {
  const [scriptNo, setScriptNo] = useState('');
  const [authRxNo, setAuthRxNo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  console.log('call useNumbers');

  // Correctly increment the base auth Rx number to be updated on the backend
  const incrementAuthRxNumber = (prevNumber) => {
    // Ensure the counter is 'reset' to 0000000 if the previous number is at the theoretical limit of 9999999
    if (prevNumber === '9999999') {
      return '0000000';
    }
    
    // First convert to base 10
    const base10 = parseInt(prevNumber, 10);
    const incremented = base10 + 1;
    let newNum = incremented.toString();

    // Ensure the length is at required seven by adding leading zeroes as needed
    while (newNum.length < 7) {
      newNum = '0' + newNum;
    }

    return newNum;
  }

  // Correctly increment the base auth Rx number to be updated on the backend
  const incrementScriptNumber = (prevNumber) => {
    // First convert to base 10
    const base10 = parseInt(prevNumber, 10);
    const incremented = base10 + 1;
    let newNum = incremented.toString();

    // Ensure the length meets the arbitrarily chosen 8 digits by adding leading zeroes until no longer applicable
    // This ensures around 800 years' worth of prescriptions before incrementing to a 9 digit number, for interest :)
    while (newNum.length < 8) {
      newNum = '0' + newNum;
    }

    return newNum;
  }

  // Take any seven digit base number and convert it to a valid PBS authority prescription number
  const generateAuthRxNumber = (baseNumber) => {
    if (typeof baseNumber === 'number') {
      baseNumber = baseNumber.toString()
    }
    // AuthNo format must be a 7 digit number followed by a check digit that is the remainder of dividing the sum of the digits of the base number by 9
    const reducer = (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue);
    const sum = baseNumber.split('').reduce(reducer)
    const checkDigit = sum % 9;

    return `${baseNumber}${checkDigit}`;
  }

  useEffect(() => {
    // Note there will only ever be one 'current' field in each document in this collection. There are only two documents: scriptNo and authRxNo. They should never need to be called separately.
    const scriptNoRef = doc(db, 'numbers', 'scriptNo');
    const authRxNoRef = doc(db, 'numbers', 'authRxNo');

    // Initialise error and loading state
    setIsLoading(true);
    setIsError(false);

    const fetchData = () => {
      // Define promises for fetching each number
      const scriptNoSnap = getDoc(scriptNoRef);
      const authRxNoSnap = getDoc(authRxNoRef); 

      // Handle the collective responses
      Promise.all([scriptNoSnap, authRxNoSnap])
        .then(([script, auth]) => {
          // Handle the data
          setScriptNo(script.data().current);
          // Convert to proper authority Rx number here and set this to state, since this is the value that should be used in forms etc
          setAuthRxNo(generateAuthRxNumber(auth.data().current));
          // However pass along the base form auth number for updating backend
          return [script.data().current, auth.data().current];
        })
        .then(([scriptNoCurrent, authRxNoCurrent]) => {
          // This block will only execute once the above operations are complete, and serves to change the backend number for the next fetch request (ensuring unique scriptNo and authRxNo on each call)
          updateDoc(scriptNoRef, {
            current: incrementScriptNumber(scriptNoCurrent)
          });
          updateDoc(authRxNoRef, {
            current: incrementAuthRxNumber(authRxNoCurrent)
          }); 
        })
        .catch((error) => {
          setIsError(true); 
        }) 
        // In either case (resolve or reject), the loading is done
        .finally(() => setIsLoading(false));
    };

    fetchData();

  }, [])

  // Reference the documents using destructuring in any component
  return { scriptNo, authRxNo, isError, isLoading }
}
