// This file is intended to code the logic that pushes the PBS data to firestore
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { useCallback, useState } from 'react';

export const usePBSFetch = (localPbsInfo) => {
  const [pbsInfo, setPbsInfo] = useState(localPbsInfo);
  const [pbsLoading, setPbsLoading] = useState(false);
  const [pbsError, setPbsError] = useState(false);

  // Fetch the drug data from firestore using item code as document ID
  const fetchDrug = useCallback(async (itemCode, verified) => {
    setPbsLoading(true);
    setPbsError(false);
    // Item code will not exist for non-PBS medication, no state update
    if (itemCode === "") {
      setPbsInfo(null);
      return;
    }

    // Initialise reference to doc using provided itemCode
    const docRef = doc(db, 'pbs', itemCode);

    // Use try/catch for error handling
    try {
      const docSnap = await getDoc(docRef);
      // Check if the drug is on the PBS. All non-PBS drugs will not have an item code on PBS
      if (docSnap.exists()) {
        // Pass all info into state object
        setPbsInfo({ ...docSnap.data() })
      } else {
        // doc.data() will be undefined in this case, no state update
        console.log('No such document, check for PBS updates');
        setPbsInfo(null);
      }
    } catch (error) {
      setPbsError(true);
      console.log(error);
    }

    setPbsLoading(false);
    
  }, []);

  const clearPbsState = useCallback(() => {
    setPbsInfo(null);
  }, [])

  return [{ pbsInfo, pbsLoading, pbsError }, fetchDrug, clearPbsState];
}
