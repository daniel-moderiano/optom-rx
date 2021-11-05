import data from '../../pbs/pbsData.json'
import { useEffect, useState, useCallback } from "react";
import { StyledDrugAutocomplete } from './DrugAutocompleteStyled';

const DrugAutocomplete = () => {
  const [searchText, setSearchText] = useState('');

  // Instead of relying on awkard useEffect organisation, set this bool to true whenever an item list is rendered on the page (i.e. user is using autocorrect)
  const [listActive, setListActive] = useState(false);

  // TODO: USE MULTIPLE useEFFECT HOOKS!!! Use one with a blank dependency array to set event listeners, as we only want this running on initial component mount. For the create list/calculate matches functions we need update on every state change/re-render, so these should be in a useEffect hook with searchText as a dependency

  const removeList = useCallback(() => {
    const list = document.querySelector('.items-list');
    if (list) {
      list.remove();
      setListActive(false)
    }
  }, []);

  const createList = useCallback((matchArr) => {
    // First remove any lists preset
    removeList()
    const itemsList = document.createElement('div');
    itemsList.classList.add('items-list');
    document.querySelector('.DrugAutocomplete').appendChild(itemsList);
    matchArr.forEach((match) => {
      // Create and append item to itemsList div
      const item = document.createElement('div');
      item.textContent = match['mp-pt'];
      item.classList.add('item');
      itemsList.appendChild(item);
    }); 
  }, [removeList]);

  // Dependency is the listActive bool, to avoid calling this an excessive amount of times
  // useEffect(() => {
  //   console.log('Run click effect');
  //   const input = document.querySelector('#drugAutocomplete');

  //   const clickSuggestion = (event) => {
  //     if (event.target.classList.contains('item')) {
  //       // Set input field value to selected item
  //       input.value = event.target.textContent;
  //       removeList();
  //       console.log('click');
  //     }
  //   }

  //   if (listActive) {
  //     // Event propagation for items in list
  //     const itemsList = document.querySelector('.items-list')
  //     itemsList.addEventListener('click', clickSuggestion);
  //   }
    
  //   return () => {
  //     // Remove event listeners here
  //   }
  // }, [removeList, listActive])

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

