import data from '../../pbs/pbsDataUnique.json'
import { useEffect, useState, useCallback, useRef } from "react";
import { StyledDrugAutocomplete } from './DrugAutocompleteStyled';

const DrugAutocomplete = () => {
  const [searchText, setSearchText] = useState('');
  // useRef allows us to store the equivalent of a 'global' component variable without losing data on re-render, but avoiding the async problems that can arise with state
  const currentFocus = useRef(-1);
  // TODO: Add a 'selected drug' object state or similar that is updated when the user selects a drug. 

  // Remove any currently displayed itemLists
  const removeList = useCallback(() => {
    const itemsList = document.querySelector('.items-list');
    currentFocus.current = -1;
    if (itemsList) {
      itemsList.remove();
    }
  }, []);

  // Capture the selection made in the items list via event propagation
  const clickSuggestion = useCallback((event) => {
    const input = document.querySelector('#drug-input');
    if (event.target.classList.contains('item')) {
      // Set input field value to selected item
      input.value = event.target.textContent;
      removeList();
    }
  }, [removeList])

  // Creates list of autocomplete items using an array of relevant suggestions (matchArr)
  const createList = useCallback((matchArr) => {
    // First remove any lists present to ensure the list if refreshed on each new input
    removeList();
    // Create the new list container
    const itemsList = document.createElement('div');
    itemsList.classList.add('items-list');
    document.querySelector('.DrugAutocomplete').appendChild(itemsList);
    // Append each list item from the source array
    matchArr.forEach((match) => {
      // For those drugs with multiple brand names and the same active ingredient, instead iterate through the array of brandnames and generate a new item for each
      // if (match['brand-name'].length > 1) {
      //   match['brand-name'].forEach((name) => {
      //     const item = document.createElement('div');
      //     item.textContent = `${match['tpuu-or-mpp-pt']} / ${name}`;    // Choose here which name to display
      //     item.classList.add('item');
      //     itemsList.appendChild(item);
      //   });
      // } else {
      const item = document.createElement('div');
      item.textContent = `${match['tpuu-or-mpp-pt']} / ${match['brand-name']}`;    // Choose here which name to display: ;
      item.classList.add('item');
      itemsList.appendChild(item);     
     
      // TODO: Bold letters as you type them when appending items 
    }); 

    itemsList.addEventListener('click', clickSuggestion);
  }, [removeList, clickSuggestion]);

  // Perform the autocomplete logic here
  useEffect(() => {
    // Must put the logic for finding matches in useEffect, or else it won't capture the first input typed in  
    // Two regex to match search text in different parts of the string. Split-up to allow custom ordering of matches in final UI list
    let regexFirst;
    let regexSecond;
    let matches;

    try {
      regexFirst = new RegExp(`^${searchText}`, 'i');
      regexSecond = new RegExp(`\\+ ${searchText}`, 'i');
    } catch (error) {
      // TODO: error message handling in UI
      console.log(error.message);
    }
    
    if (!regexFirst || !regexSecond) {
      matches = [];
    } else {
      // Match first at the start of a string (e.g. 'tim' matches 'timolol' but not 'latanoprost + timolol')
      let firstMatches = data.filter((drug) => {
        return drug['brand-name'].some((name) => name.match(regexFirst)) || drug['tpuu-or-mpp-pt'].match(regexFirst);
      });

      // Match a second drug (e.g. 'tim' matches 'latanoprost + timolol' but not 'timolol'). These are lower priority and should be displayed second in a list
      let secondMatches = data.filter((drug) => {
        return drug['brand-name'].some((name) => name.match(regexSecond)) || drug['tpuu-or-mpp-pt'].match(regexSecond);
      });

      // Remove any duplicates (only relevant for the first typed char)
      let filteredSecondMatches = secondMatches.filter((drug) => !firstMatches.includes(drug))

      // Combine all the results into a single pseudo-ordered array
      matches = firstMatches.concat(filteredSecondMatches);
    }

    // TODO: Consider the current setup where if the user types 'Xalatan', search results will display all Latanoprost results due to a central brand name array. This may or may not be intended result

    // Reset the search results when the user clears the field
    if (searchText.length === 0) {
      matches = [];
    }

    createList(matches);
  }, [searchText, createList]);

  // Leave this dependency array empty to ensure this runs only once on first mount
  useEffect(() => {
    const input = document.querySelector('#drug-input');
    const itemsList = document.querySelector('.items-list'); 

    // Remove the active class from all autocomplete items
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
      // Check that there is an itemsList present before allowing the user to navigate through it
      if (itemsList) {
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
    }
    input.addEventListener('keydown', keyItemNav);

    return () => {
      // Remove event listener here
      input.removeEventListener('keydown', keyItemNav);
    }
  }, [])

  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
    <StyledDrugAutocomplete className="DrugAutocomplete">
      <label htmlFor="drug-input">
        <input 
          type="text" 
          id="drug-input"
          onChange={handleChange}
          value={searchText}
        />
      </label>
    </StyledDrugAutocomplete>
  );
};

export default DrugAutocomplete;

