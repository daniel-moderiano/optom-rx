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

  return { abbreviateStateName, formatDrug }
}
