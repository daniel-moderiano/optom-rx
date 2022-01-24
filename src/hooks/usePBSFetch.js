// This file is intended to code the logic that pushes the PBS data to firestore
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { useCallback, useState } from 'react';

export const usePBSFetch = (localPbsInfo) => {
  const [pbsInfo, setPbsInfo] = useState(localPbsInfo);
  const [pbsLoading, setPbsLoading] = useState(false);
  const [pbsError, setPbsError] = useState(null);

  // Fetch the drug data from firestore using item code as document ID
  const fetchDrug = useCallback(async (itemCode) => {
    setPbsLoading(true);
    setPbsError(null);
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
        setPbsInfo(null);
      }
    } catch (error) {
      setPbsError(error);
    }
    setPbsLoading(false); 
  }, []);

  return [{ pbsInfo, pbsLoading, pbsError }, fetchDrug, setPbsInfo];
}
