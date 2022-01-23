import { db } from "../firebase/config";
import { useCallback, useState } from "react";
import { doc, runTransaction } from "firebase/firestore";

// A hook that fetches the current script number from the backend, using a single getDoc call (as opposed to snapshot real time updates), and subsequently increments this number and updates the backend ready for subsequent calls
export const useNumbers = () => {
  const [scriptNo, setScriptNo] = useState('');
  const [authRxNo, setAuthRxNo] = useState('');
  const [numbersLoading, setNumbersLoading] = useState(false);
  const [numbersError, setNumbersError] = useState(false);

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

  const fetchData = useCallback(() => {
    // Initialise error and loading state
    setNumbersLoading(true);
    setNumbersError(false);

    // Note there will only ever be one 'current' field in each document in this collection. There are only two documents: scriptNo and authRxNo. They should never need to be called separately.
    const scriptNoRef = doc(db, 'numbers', 'scriptNo');
    const authRxNoRef = doc(db, 'numbers', 'authRxNo');

    const scriptTransaction = runTransaction(db, (transaction) => {
      // First read the database for current values of number (first step of transaction)
      return transaction.get(scriptNoRef)
        .then((response) => {
          // Once read completes, perform logic to modify value
          const newScriptNo = incrementScriptNumber(response.data().current);
          // Perform the update part of the transaction (second step)
          transaction.update(scriptNoRef, { current: newScriptNo });
          // Here return the newly generated number. Should this promise resolve, this value will become available to the app
          return newScriptNo;
        })
    }).then((newScriptNo) => {
      // Once both actions/steps are complete, the promise resolves and is captured in this function here
      setScriptNo(newScriptNo);
    })
    .catch((error) => {
      setNumbersError(error);
    })  
    .finally(() => {
      setNumbersLoading(false);
    }) 

    const authTransaction = runTransaction(db, (transaction) => {
      return transaction.get(authRxNoRef)
        .then((response) => {
          const newAuthRxNo = incrementAuthRxNumber(response.data().current);
          transaction.update(authRxNoRef, { current: newAuthRxNo });
          return newAuthRxNo;
        })
    }).then((newAuthRxNo) => {
      setAuthRxNo(generateAuthRxNumber(newAuthRxNo));
    })
    .catch((error) => {
      setNumbersError(error);
    })   
    .finally(() => {
      setNumbersLoading(false);
    }) 

    return Promise.all([scriptTransaction, authTransaction]);
  }, []);

  // Reference the documents using destructuring in any component
  return [{ scriptNo, authRxNo, numbersLoading, numbersError }, fetchData]
}
