import data from '../../pbs/pbsData.json'
import { useEffect, useState, useCallback } from "react";
import { StyledDrugAutocomplete } from './DrugAutocompleteStyled';

const DrugAutocomplete = () => {
  const [searchText, setSearchText] = useState('');

  // TODO: USE MULTIPLE useEFFECT HOOKS!!! Use one with a blank dependency array to set event listeners, as we only want this running on initial component mount. For the create list/calculate matches functions we need update on every state change/re-render, so these should be in a useEffect hook with searchText as a dependency

  const removeList = useCallback(() => {
    const list = document.querySelector('.items-list');
    if (list) {
      list.remove();
    }
  }, []);

  const clickSuggestion = useCallback((event) => {
    const input = document.querySelector('#drug-input');
    console.log('firing click event');
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
    console.log(matches);
  }, [searchText, createList]);

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

