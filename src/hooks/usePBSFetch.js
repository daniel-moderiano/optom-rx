// This file is intended to code the logic that pushes the PBS data to firestore
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { useCallback } from 'react';

export const usePBSFetch = () => {

  // Fetch the drug data from firestore using item code as document ID
  const fetchDrug = useCallback(async (itemCode) => {
    // Item code will not exist for non-PBS medication
    if (itemCode === "") {
      console.log('Drug is not listed on PBS');
      return;
    }

    const docRef = doc(db, 'pbs', itemCode);
    const docSnap = await getDoc(docRef);

    // Check if the drug is on the PBS. All non-PBS drugs will not have an item code on PBS
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document, check for PBS updates');
    }
  }, []);

  return fetchDrug;
}
