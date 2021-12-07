// This file is intended to code the logic that pushes the PBS data to firestore
import { db } from '../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import PBSData from "../pbs/pbsData";

export const usePBSUpload = () => {
  const itemCodes = Object.keys(PBSData);

  // Add a new document to collection 'pbs'
  const addDrug = async (itemCode) => {
    await setDoc(doc(db, 'pbs', itemCode), {
      ...PBSData[itemCode],
    });
  }

  itemCodes.forEach((item) => {
    addDrug(item);
  });

  // ! Call usePBSUpload in App.js to run this logic. It will overwrite existing data for the item codes to ensure up to date data. Run as follows in App.js
  // import { usePBSUpload } from ...
  // usePBSUpload();
  
}
