// Handle LEMI information gathered from PBS data for medications. The text set here will be used in a tooltip display

import { useCallback, useState } from "react";

export const useHandleLEMI = () => {
  const [LEMIText, setLEMIText] = useState('');

  const handleLEMIInfo = useCallback((fetchedPBSData, setFunc) => {
    // Check for lemi and/or lmbc status
    if (fetchedPBSData['lemi']) {
      // Medicine is recommended to prescribe by brand only
      setFunc((prevData) => ({
        ...prevData,
        brandOnly: true,
      }));
      setLEMIText(`<span>This item is included on the <a target="_blank" href="https://www.safetyandquality.gov.au/publications-and-resources/resource-library/list-excluded-medicinal-items-lemi">List of Excluded Medicinal Items (LEMI)</a>, and should be prescribed by brand name only for practical and safety reasons</span>`);
    } else if (fetchedPBSData['lmbc']) {
      // Medicine is recommended to have brand name included
      setFunc((prevData) => ({
        ...prevData,
        brandOnly: false,
        includeBrand: true,
      }));
      setLEMIText(`<span>This item is included on the <a target="_blank" href="https://www.safetyandquality.gov.au/publications-and-resources/resource-library/list-medicines-brand-consideration-lmbc">List of Medicines for Brand Consideration (LMBC)</a>. Prescribers should consider prescribing by brand as well as active ingredient for patient safety</span>`);
    } else {
      // Neither LEMI nor LMBC listed; prescribe by active ingredient only
      setFunc((prevData) => ({
        ...prevData,
        brandOnly: false,
        includeBrand: false,
      }));
      setLEMIText('<span>This item should be prescribed by active ingredient only</span>');
    }
  }, [])

  return { LEMIText, handleLEMIInfo }
}
