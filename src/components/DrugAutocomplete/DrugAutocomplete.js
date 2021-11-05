import data from '../../pbs/pbsData.json'
import { useEffect, useState, useCallback, useRef } from "react";
import { StyledDrugAutocomplete } from './DrugAutocompleteStyled';

const DrugAutocomplete = () => {
  const [searchText, setSearchText] = useState('');
  // const [currentFocus, setCurrentFocus] = useState(-1);
  let currentFocus = useRef(-1);

  // TODO: USE MULTIPLE useEFFECT HOOKS!!! Use one with a blank dependency array to set event listeners, as we only want this running on initial component mount. For the create list/calculate matches functions we need update on every state change/re-render, so these should be in a useEffect hook with searchText as a dependency

  const removeList = useCallback(() => {
    const list = document.querySelector('.items-list');
    // Reset the currentFocus variable
    currentFocus.current = -1;
    if (list) {
      list.remove();
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
      const item = document.createElement('div');
      item.textContent = match['mp-pt'];    // Choose here which name to display
      item.classList.add('item');
      itemsList.appendChild(item);
      // TODO: Bold letters as you type them when appending items 
    }); 

    itemsList.addEventListener('click', clickSuggestion);
  }, [removeList, clickSuggestion]);

  useEffect(() => {
    // Must put the logic for finding matches in useEffect, or else it won't capture the first input typed in
    let matches = data.filter((drug) => {
      const regex = new RegExp(`^${searchText}`, 'i');
      return drug['brand-name'].some((name) => name.match(regex)) || drug['tpuu-or-mpp-pt'].match(regex);
    });

    // Reset the search results when the user clears the field
    if (searchText.length === 0) {
      matches = [];
    }

    // Call the createList function on each user input change
    createList(matches);
    // console.log(matches);
  }, [searchText, createList]);

  // Leave this dependency array empty to ensure this runs only once on first mount
  useEffect(() => {
    const input = document.querySelector('#drug-input');
    const itemsList = document.querySelector('.items-list'); 
    // let currentFocus = -1;


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
      if (currentFocus < 0) {
        currentFocus.current = itemsArr.length - 1;
      }

      itemsArr[currentFocus.current].classList.add('active');
    };

    // The currentFocus variable will be used as an index when adding an active class to an item in the itemsList list
    const keyItemNav = (e) => {
      // Check that there is an itemsList present before allowing the user to navigate through it
      if (itemsList) {
        const items = document.querySelectorAll('.item');
        console.log(items.length);
        if (items.length > 0) {
          if (e.keyCode === 40) {
            
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus.current++;
            console.log(items.length, currentFocus.current);
            /*and and make the current item more visible:*/
            addActive(items);
          } else if (e.keyCode === 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus.current--;
            /*and and make the current item more visible:*/
            addActive(items);
          } else if (e.keyCode === 13) {
            // /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus.current > -1) {
            /*and simulate a click on the "active" item:*/
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

