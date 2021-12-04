import { db } from "../firebase/config";
import { useState } from "react";

// Firebase imports
import { doc, getDoc, updateDoc } from "firebase/firestore";

// A hook that fetches the current script number from the backend, using a single getDoc call (as opposed to snapshot real time updates), and subsequently increments this number and updates the backend ready for subsequent calls
export const useManualUpdate = () => {
  const [scriptNo, setScriptNo] = useState('');
  const [authRxNo, setAuthRxNo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  // This could be written as a Firebase transaction, which may be more correct but equally performant. A race condition still exists with this or the transaction method. However, race conditions will not be relevant if this is restricted to 

  const fetchData = () => {
    // Note there will only ever be one 'current' field in each document in this collection. There are only two documents: scriptNo and authRxNo. They should never need to be called separately.
    const scriptNoRef = doc(db, 'numbers', 'scriptNo');
    const authRxNoRef = doc(db, 'numbers', 'authRxNo');

    // Initialise error and loading state
    setIsLoading(true);
    setIsError(false);

    // Handle the collective responses
    Promise.all([getDoc(scriptNoRef), getDoc(authRxNoRef)])
      .then(([script, auth]) => {
        const newScriptNo = incrementScriptNumber(script.data().current);
        const newAuthRxNo = incrementAuthRxNumber(auth.data().current);

        // This block will only execute once the above operations are complete, and serves to change the backend number for the next fetch request (ensuring unique scriptNo and authRxNo on each call)
        updateDoc(scriptNoRef, {
          current: newScriptNo
        }).then(() => {
          setScriptNo(newScriptNo);
        })
        updateDoc(authRxNoRef, {
          current: newAuthRxNo
        }).then(() => {
          setAuthRxNo(generateAuthRxNumber(newAuthRxNo));
        })
      })
      .catch((error) => {
        setIsError(true); 
      }) 
      // In either case (resolve or reject), the loading is done
      .finally(() => setIsLoading(false));
  };

  // Reference the documents using destructuring in any component
  return [{ scriptNo, authRxNo, isError, isLoading }, fetchData]
}