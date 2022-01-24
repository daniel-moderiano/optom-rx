import PBSData from '../../pbs/drugAutocompleteData.json'
import { useEffect, useState, useRef, useCallback } from "react";
import { StyledDrugAutocomplete } from './DrugAutocompleteStyled';
import FormField from '../FormField/FormField';

const DrugAutocomplete = ({ data, setData, handleChange, toggle, alerts, setAlerts, fetchDrug, showTooltip, tooltipText }) => {
  // useRef allows us to store the equivalent of a 'global' component variable without losing data on re-render, but avoiding the async problems that can arise with state
  const currentFocus = useRef(-1);
  // Controls the UI state of the collapsed input fields
  const [expand, setExpand] = useState(false);

  const showSuccessClass = (element) => {
    element.classList.remove('error');
    element.classList.add('success');
  }

  // Toggle the checkboxes in the form on enter keypress, but don't submit the form
  const changeOnEnter = (event, setFunc, data) => {
    // If the enter key is pressed
    if (event.keyCode === 13) {
      event.preventDefault();
      toggle(setFunc, data, event.target.name);
    }
  }

  // Hide the items list but don't alter the items on the list
  const hideItemsList = () => {
    // Check for null in cases where component is dismounting/ed
    if (document.querySelector('.items-list')) {
      document.querySelector('.items-list').classList.add('hide');
      document.querySelector('.items-list').classList.remove('show-list');
    }
  };

  // Show the items list but don't alter the items on the list
  const showItemsList = () => {
    document.querySelector('.items-list').classList.remove('hide');
    document.querySelector('.items-list').classList.add('show-list');
  };

  // Remove all items within the list, rather than the list itself
  const removeList = () => {
    // Must reset focus here to avoid starting halway down a list on first arrow key press
    currentFocus.current = -1;
    document.querySelectorAll('.item').forEach((item) => {
      item.remove();
    })
  };

  // Used to set verification status of drug to false. Useful in scenarios where user is modifying auto-fill data and thus inputs can no longer be trusted
  const removeVerification = (field) => {
    setData((prevData) => ({
      ...prevData,
      verified: false,
    }));
  }

  // Capture the selection made in the items list via event propagation
  // All child spans have pointer events set to none, so the parent item element will ALWAYS capture the even here
  const clickSuggestion = useCallback((event) => {
    const { dataset } = event.target;
    // Set state on click - do NOT set input.value as this will not work as intended. Always adjust state and have input.value set to state
    setData((prevData) => ({
      ...prevData,
      activeIngredient: dataset.activeIngredient,
      brandName: dataset.brandName,
      itemCode: dataset.code,
      verified: true,
    }));
    removeList();
    setExpand(true);
    fetchDrug(dataset.code);
  
    // Remove errors
    showSuccessClass(document.querySelector('#activeIngredient'));
    setAlerts((prevAlerts) => ({
      ...prevAlerts,
      activeIngredient: {},
      brandName: {}
    }));

    // Finally, set focus to next typable field (currently dosage)
    document.querySelector('[name="dosage"]').focus();
  }, [setAlerts, setData, fetchDrug]);

  // Given a string, use the current search text and regex to bold the segment of text being searched for (using HTML)
  const boldLetters = (string) => {
    const currentSearchTerm = document.querySelector('#activeIngredient').value;
    let regexFirst = new RegExp(`^${currentSearchTerm}`, 'i');
    // Must add capturing group to this regex for later extraction
    let regexSecond = new RegExp(`\\+ (${currentSearchTerm})`, 'i');

    let firstMatch = string.match(regexFirst);
    let secondMatch = string.match(regexSecond);
    let matches = [];
    
    // If there is a regex match, the match function returns an array, otherwise is null
    if (firstMatch) {
      // Oth index returns the subtring that matches
      matches.push([firstMatch[0], { 'index': firstMatch['index'] }])
      return `<strong class="item-bold item-click">${string.substr(firstMatch['index'], firstMatch[0].length)}</strong>${string.substr((firstMatch['index'] + firstMatch[0].length))}`;
    } else if (secondMatch) {
      // Use a capturing group in regexSecond, which will appear as index 1 in the match array
      return `${string.substr(0, secondMatch['index'])}<strong class="item-bold item-click">${string.substr(secondMatch['index'] + 2, secondMatch[1].length)}</strong>${string.substr((secondMatch['index'] + secondMatch[1].length + 2))}`;
    } else {
      // If no matches, return all non-bold
      return string;
    }
  };

  // Runs on every input change, which provides a better solution than running within useEffect hook
  const handleSearch = (event) => {
    // Two regex to match search text in different parts of the string. Split-up to allow custom ordering of matches in final UI list
    let regexFirst;
    let regexSecond;
    let matches;

    // Handle user typing in special characters, which would otherwise crash the app here
    try {
      regexFirst = new RegExp(`^${event.target.value}`, 'i');
      regexSecond = new RegExp(`\\+ ${event.target.value}`, 'i');
    } catch (error) {
      // No further handling required, it will not serve any purpose to bring up UI errors
    }
    
    // At least one regEx should match, otherwise there are no medications under the searched term
    if (!regexFirst || !regexSecond) {
      matches = [];
    } else {
      // Match first at the start of a string (e.g. 'tim' matches 'timolol' but not 'latanoprost + timolol')
      let firstMatches = PBSData.filter((drug) => {
        return drug['brand-name'].some((name) => name.match(regexFirst)) || drug['tpuu-or-mpp-pt'].match(regexFirst);
      });

      // Match a second drug (e.g. 'tim' matches 'latanoprost + timolol' but not 'timolol'). These are lower priority and should be displayed second in a list
      let secondMatches = PBSData.filter((drug) => {
        return drug['brand-name'].some((name) => name.match(regexSecond)) || drug['tpuu-or-mpp-pt'].match(regexSecond);
      });

      // Remove any duplicates (only relevant for the first typed char)
      let filteredSecondMatches = secondMatches.filter((drug) => !firstMatches.includes(drug))

      // Combine all the results into a single pseudo-ordered array
      matches = firstMatches.concat(filteredSecondMatches);
    }

    // Reset the search results when the user clears the field
    if (event.target.value === "") {
      matches = [];
    }
    createList(matches);
  }

  // Creates list of autocomplete items using an array of relevant suggestions (matchArr)
  const createList = useCallback((matchArr) => {
    // First remove any lists present to ensure the list if refreshed on each new input
    removeList();
    // Also ensure the list does not have a hide class active
    showItemsList();
    const itemsList = document.querySelector('.items-list');

    // Limit the autocomplete list to a specified amount of items
    const maxListItems = 6;
 
    for (let i = 0; i < maxListItems; i++) {
      // Don't attempt to iterate beyond the number of matches returned, which may be less than maxListItems
      if (i >= matchArr.length) {
        break;
      }

      let match = matchArr[i];
      // Operation in template literal is capitalising first letter
      const boldActiveName = boldLetters(`${(match['tpuu-or-mpp-pt'][0].toUpperCase() + match['tpuu-or-mpp-pt'].substring(1))}`);
      const boldBrandName = boldLetters(`${match['brand-name']}`);

      const item = document.createElement('div');
      // Using spans will allow alternate styling of active ingredient and brand name if desired
      item.innerHTML = `<span class="item-active item-click">${boldActiveName}</span> <span class="item-brand item-click">(${boldBrandName})</span>`;
      // Add dataset information here to update state when the user selects an item
      item.dataset.code = match['item-code'];
      item.dataset.activeIngredient = match['tpuu-or-mpp-pt'];
      item.dataset.brandName = match['brand-name'];
      item.classList.add('item');
      item.classList.add('item-click');
      itemsList.appendChild(item);  
    }
  }, []);

  // Make absolutely sure any dependency functions in this hook are wrapped in useCallback 
  useEffect(() => {
    const input = document.querySelector('#activeIngredient');
    // add item-click class to disable hiding of items list on outside click
    input.classList.add('item-click');

    // Create the item list once only here, but it remains invisible until items are added. This ensures it will always be present for adding event listeners below
    const itemsList = document.createElement('div');
    itemsList.classList.add('items-list');
    itemsList.classList.add('item-click');
    document.querySelector('.activeIngredient').appendChild(itemsList);
    itemsList.addEventListener('click', clickSuggestion);

    // Removes the active class from all autocomplete items
    const removeActive = (itemsArr) => {
      itemsArr.forEach((item) => {
        item.classList.remove('active');
      })
    }

    // Add the active class to a specified item in the autocomplete list
    const addActive = (itemsArr) => {
      // First remove any active classes
      removeActive(itemsArr);
      // If the user has pressed down more than the current length of the autocomplete list, or presses down on the last item, cycle back to the top of the list
      if (currentFocus.current >= itemsArr.length) {
        currentFocus.current = 0;
      }
      // Similarly, if the user presses up too many times, cycle to the bottom of the list
      if (currentFocus.current < 0) {
        currentFocus.current = itemsArr.length - 1;
      }
      itemsArr[currentFocus.current].classList.add('active');
    };

    // The currentFocus variable will be used as an index when adding an active class to an item in the itemsList list
    const keyItemNav = (e) => {
      // This is the array of list items that will be moved through using the currentFocus variable
      const items = document.querySelectorAll('.item');
      if (items.length > 0) {
        if (e.keyCode === 40) {  
          currentFocus.current++;
          /*and and make the current item more visible:*/
          addActive(items);
        } else if (e.keyCode === 38) { //up
          // Decrease the currentFocus variable when the DOWN key is pressed
          currentFocus.current--;
          /*and and make the current item more visible:*/
          addActive(items);
        } else if (e.keyCode === 13) {
          // Ensure the form isn't submitted when simply selecting an option
          e.preventDefault();
          if (currentFocus.current > -1) {
            // Simulated a click on the currently 'focused' item
            items[currentFocus.current].click();
          }
        }
      }
    }
 
    // Ensure the items list closes on outside click
    const itemsListOutsideClick = (e) => {
      // All items within the autocomplete input and items list will contain this class as a marker of sorts
      if (!e.target.classList.contains('item-click')) {
        hideItemsList();
      }      
    };

    // Check for non-whitespace character to indicate a valid value to create an autocomplete list from. Note this will only occur if the user performs tab out of the input, or an outside click
    const checkForListCreate = () => {
      if (input.value.trim().length > 0) {
        showItemsList();
      }
    }

    // Listen for tab out specficially, and hide the itemsList in response
    const tabOut = (e) => {
      if (e.keyCode === 9) {
        hideItemsList();
      }
    }

    input.addEventListener('focus', checkForListCreate);
    input.addEventListener('keydown', keyItemNav);
    input.addEventListener('keydown', tabOut);
    window.addEventListener('click', itemsListOutsideClick);

    return () => {
      // Remove event listeners on dismount
      input.removeEventListener('focus', checkForListCreate);
      input.removeEventListener('keydown', keyItemNav);
      input.removeEventListener('keydown', tabOut);
      window.removeEventListener('click', itemsListOutsideClick);
      itemsList.removeEventListener('click', clickSuggestion);
    }
  }, [clickSuggestion, createList])


  return (
    <StyledDrugAutocomplete className="autocomplete-container">
      <FormField 
        id="activeIngredient"
        name="activeIngredient"
        label="Active ingredient" 
        placeholder="Enter active ingredient or brand name"
        value={data.activeIngredient} 
        onChange={(event) => {
          removeVerification();
          handleChange(event);
          handleSearch(event);
        }}
        alert={alerts.activeIngredient}
        className="activeIngredient form-field"
        required
      />
      <button type="button" className='drug-expand' onClick={() => setExpand(true)}>Enter manually</button>

      <div className={`drug-collapse ${expand ? 'show' : 'hide'}`}>
        <FormField 
          id="brandName"
          name="brandName"
          label="Brand name" 
          value={data.brandName} 
          onChange={(event) => {
            removeVerification();
            handleChange(event);
          }}
          alert={alerts.brandName}
        />

        <FormField 
          fieldType="checkbox" 
          name="includeBrand"
          label="Include brand name on prescription" 
          onChange={() => toggle(setData, data, 'includeBrand')}
          checked={data.includeBrand}
          className="checkbox brand-checkbox"
          enterFunc={(event) => changeOnEnter(event, setData, data)}
        /> 

        <div className="brandOnly-container">
          <FormField 
            fieldType="checkbox" 
            name="brandOnly"
            label="Prescribe by brand name only" 
            onChange={() => toggle(setData, data, 'brandOnly')}
            checked={data.brandOnly}
            className="checkbox"
            enterFunc={(event) => changeOnEnter(event, setData, data)}
          /> 

          <div className={`tooltip ${showTooltip ? 'show' : 'hide'}`} aria-label="Show more information on brand name vs active ingredient prescribing for this medication">
            <svg xmlns="http://www.w3.org/2000/svg" className="question-icon" viewBox="0 0 512 512" >
              <path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
              <path d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="28"/>
              <circle cx="250" cy="348" r="20"/>
            </svg>
            <div className="tooltip-text" dangerouslySetInnerHTML={{ __html: tooltipText }}></div>
          </div>          
        </div>
           
        <FormField 
          fieldType="checkbox" 
          name="substitutePermitted"
          label="Brand substitution not permitted" 
          onChange={() => toggle(setData, data, 'substitutePermitted')}
          checked={!data.substitutePermitted}
          className="checkbox"
          enterFunc={(event) => changeOnEnter(event, setData, data)}
        />     

        <FormField 
          fieldType="checkbox" 
          name="compounded"
          label="To be compounded" 
          onChange={() => toggle(setData, data, 'compounded')}
          checked={data.compounded}
          className="checkbox compounded"
          enterFunc={(event) => changeOnEnter(event, setData, data)}
        />  
      </div>
    </StyledDrugAutocomplete>
  );
};

export default DrugAutocomplete;

