// Custom hook that defines all commonly used string formatting functions for data such as phone numbers, addresses, and related data. 

import { useCallback } from "react";

export const useFormatting = () => {

  // Format fully written Australian state names into their abbreviated forms
  const abbreviateStateName = useCallback((fullStateName) => {
    let abbreviatedName = '';
    switch (true) {
      case (/South Australia/i).test(fullStateName):
        abbreviatedName = 'SA'
        break;
      
      case (/Queensland/i).test(fullStateName):
        abbreviatedName = 'QLD'
      break;

      case (/New South Wales/i).test(fullStateName):
        abbreviatedName = 'NSW'
        break;

      case (/Tasmania/i).test(fullStateName):
        abbreviatedName = 'TAS'
        break;

      case (/Victoria/i).test(fullStateName):
        abbreviatedName = 'VIC'
        break;

      case (/Western Australia/i).test(fullStateName):
        abbreviatedName = 'WA'
        break;

      // If there is some other issue like a typo or similar, do not attempt to adjust it
      default:
        abbreviatedName = fullStateName;
        break;
      }
    return abbreviatedName;
  }, []);

  // Create a more UI friendly summary of active ingredient +/- brand name. Requires multiple drug data parameters, hence a general script data parameter is passes that includes all of these (and more)
  const formatDrug = (script) => {
    const capitalised = script.activeIngredient[0].toUpperCase() + script.activeIngredient.substring(1);
    // Brand name only
    if (script.brandOnly) {
      if (!capitalised.includes('eye')) {
        if (capitalised.includes('spray')) {
          return `${script.brandName} ${capitalised.substr(capitalised.indexOf('spray'), 5)}`;
        } else {
          return script.brandName;
        }
      } else {
        return `${script.brandName} ${capitalised.substr(capitalised.indexOf('eye'))}`;
      }
    }    
    // Brand name NOT to be included
    if (!script.includeBrand) {
      return capitalised;
    }
    // Brand name included in addition to active ingredient
    if (!capitalised.includes('eye')) {
      if (capitalised.includes('spray')) {
        return `${capitalised.replace('spray', `(${script.brandName}) spray`)}`;
      } else {
        return `${capitalised.replace(',', ` (${script.brandName}),`)}`;
      }
    } else {
      return `${capitalised.replace('eye', `(${script.brandName}) eye`)}`;
    }
  };

  // Format to aus-friendly and typical date format, given a default HTML date input format
  const formatDate = (date) => {
    return `${date.substring(8)}/${date.substring(5, 7)}/${date.substring(0, 4)}`;
  };

  // Present a user freindly summary based on whether the user has a practice name in their prescriber details
  const formatLocation = (practice, streetAddress, suburb) => {
    if (practice === "") {
      return `${streetAddress}, ${suburb}`;
    } else {
      return `${practice}, ${suburb}`;
    }
  };

  // Present phone number in common Australian formats for print
  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.substring(0, 2) === '04') {
      // Format as mobile phone number
      return `${phoneNumber.substring(0, 4)} ${phoneNumber.substring(4, 7)} ${phoneNumber.substring(7, 10)}`;
    } else if (phoneNumber.substring(0, 2) === '13') {
      // Format as business number, depending on total length
      if (phoneNumber.length === 6) {
        // Format as 6 digit '13' number
        return `${phoneNumber.substring(0, 2)} ${phoneNumber.substring(2, 4)} ${phoneNumber.substring(4, 6)}`;
      } else {
        // Format as 1300 number
        return `${phoneNumber.substring(0, 4)} ${phoneNumber.substring(4, 7)} ${phoneNumber.substring(7, 10)}`;
      }
    } else {
      // Format as standard 10 digit landline number
      return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 6)} ${phoneNumber.substring(6, 10)}`;
    }
  };

  // No consensus exists for preferred medicare number presentation, so this may be modified as needed
  const formatMedicareNumber = (medicareNumber, medicareRefNumber) => {
    return `${medicareNumber.trim().substring(0, 4)} ${medicareNumber.trim().substring(4, 9)} ${medicareNumber.trim().substring(9, 10)}-${medicareRefNumber}`;
  }

  // Controls when to split a line to ensure the address is displayed as well as practicable
  const formatProviderAddress = (providerData) => {
    if (providerData.subpremise.length > 20) {
      return (<>
        <div className="provider__subpremise">{providerData.subpremise}</div>
        <div className="provider__streetAddress">{providerData.streetAddress}</div>
      </>);
    } else {
      return (<div className="provider__streetAddress">
        {`${providerData.subpremise} ${providerData.streetAddress}`}
      </div>);
    }
  }

  return { abbreviateStateName, formatDrug, formatDate, formatLocation, formatPhoneNumber, formatMedicareNumber, formatProviderAddress }
}
