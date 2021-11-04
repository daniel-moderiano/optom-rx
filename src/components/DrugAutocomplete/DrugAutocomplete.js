import data from '../../pbs/pbsData.json'
import { useEffect, useState } from "react";
import { StyledDrugAutocomplete } from './DrugAutocompleteStyled';

const DrugAutocomplete = () => {
  const [searchText, setSearchText] = useState('');

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

    const removeList = () => {
      const list = document.querySelector('.items-list');
      if (list) {
        list.remove();
      }
    }


    const createList = () => {
      // First remove any lists preset
      removeList()
      const itemsList = document.createElement('div');
      itemsList.classList.add('items-list');
      document.querySelector('.autocomplete').appendChild(itemsList)
      matches.forEach((match) => {
        // Create and append item to itemsList div
        const item = document.createElement('div');
        item.textContent = match['mp-pt'];
        item.classList.add('item');
        itemsList.appendChild(item);
      })

      // Event propagation for items in list
      itemsList.addEventListener('click', (event) => {
        if (event.target.classList.contains('item')) {
          // Set input field value to selected item
          document.querySelector('#drugAutocomplete').value = event.target.textContent;
          removeList();
        }
      })
    }

    createList();
    console.log(matches);
  }, [searchText]);

  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
    <StyledDrugAutocomplete className="autocomplete">
      <label htmlFor="drugAutocomplete">
        <input 
          type="text" 
          id="drugAutocomplete"
          onChange={handleChange}
          value={searchText}
        />
      </label>
    </StyledDrugAutocomplete>
  );
};

export default DrugAutocomplete;

