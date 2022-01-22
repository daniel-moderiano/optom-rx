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

  return { abbreviateStateName }
}
