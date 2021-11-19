import PBSData from '../../pbs/pbsDataUnique.json'
import { useEffect, useState, useRef } from "react";
import { StyledDrugAutocomplete } from './DrugAutocompleteStyled';
import FormField from '../FormField/FormField';

const DrugAutocomplete = ({ data, setData, handleChange, toggle, alerts, setAlerts }) => {
  // useRef allows us to store the equivalent of a 'global' component variable without losing data on re-render, but avoiding the async problems that can arise with state
  const currentFocus = useRef(-1);
  // Controls the UI state of the collapsed input fields
  const [expand, setExpand] = useState(false);

  // UI error class handling
  const showErrorClass = (element) => {
    element.classList.add('error');
    element.classList.remove('success');
  }

  const showSuccessClass = (element) => {
    element.classList.remove('error');
    element.classList.add('success');
  }

  // Remove all items within the list, rather than the list itself
  const removeList = () => {
    // Must reset focus here to avoid starting halway down a list on first arrow key press
    currentFocus.current = -1;
    document.querySelectorAll('.item').forEach((item) => {
      item.remove();
    })
  };

  // Capture the selection made in the items list via event propagation
  const clickSuggestion = (event) => {
    const { classList, dataset } = event.target;
    if (classList.contains('item')) {
      // Set state onclick - do NOT set input.value as this will not work as intended. Always adjust state and have input.value set to state
      setData((prevData) => ({
        ...prevData,
        activeIngredient: dataset.activeIngredient,
        brandName: dataset.brandName,
        itemCode: dataset.code,
      }));
      removeList();
      setExpand(true);
    }
    // Remove errors
    showSuccessClass(document.querySelector('#activeIngredient'));
    // showSuccessClass(document.querySelector('#brandName'));
    setAlerts((prevAlerts) => ({
      ...prevAlerts,
      activeIngredient: {},
      brandName: {}
    }));
  };

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
      return `<strong>${string.substr(firstMatch['index'], firstMatch[0].length)}</strong>${string.substr((firstMatch['index'] + firstMatch[0].length))}`;
    } else if (secondMatch) {
      // Use a capturing group in regexSecond, which will appear as index 1 in the match array
      return `${string.substr(0, secondMatch['index'])}<strong>${string.substr(secondMatch['index'] + 2, secondMatch[1].length)}</strong>${string.substr((secondMatch['index'] + secondMatch[1].length + 2))}`;
    } else {
      // If no matches, return all non-bold
      return string;
    }
  };

  // Creates list of autocomplete items using an array of relevant suggestions (matchArr)
  const createList = (matchArr) => {
    // First remove any lists present to ensure the list if refreshed on each new input
    removeList();

    const itemsList = document.querySelector('.items-list');

    // Append each list item from the source array of matches
    matchArr.forEach((match) => {
      const boldActiveName = boldLetters(`${match['tpuu-or-mpp-pt']}`);
      const boldBrandName = boldLetters(`${match['brand-name']}`);

      const item = document.createElement('div');
      item.innerHTML = `${boldActiveName} (${boldBrandName})`;
      // Add dataset information here to update state when the user selects an item
      item.dataset.code = match['item-code'];
      item.dataset.activeIngredient = match['tpuu-or-mpp-pt'];
      item.dataset.brandName = match['brand-name'];
      item.classList.add('item');
      itemsList.appendChild(item);     
    }); 

    itemsList.addEventListener('click', clickSuggestion);
  };


  // Leave this dependency array empty to ensure this runs only once on first mount
  useEffect(() => {
    const input = document.querySelector('#activeIngredient');

    // Create the item list once only here, but it remains invisible until items are added. This ensures it will always be present for adding event listeners below
    const itemsList = document.createElement('div');
    itemsList.classList.add('items-list');
    document.querySelector('.DrugAutocomplete').appendChild(itemsList);

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

    input.addEventListener('keydown', keyItemNav);

    return () => {
      // Remove event listener on dismount
      input.removeEventListener('keydown', keyItemNav);
    }
  }, [])

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
      // TODO: error message handling in UI
      console.log(error.message);
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

  return (
    <StyledDrugAutocomplete className="autocomplete-container">
      <div className="autocomplete-group">
        <FormField 
          className="DrugAutocomplete"
          id="activeIngredient"
          name="activeIngredient"
          label="Medication" 
          placeholder="Enter active ingredient or brand name"
          value={data.activeIngredient} 
          onChange={(event) => {
            handleChange(event);
            handleSearch(event);
          }}
          alert={alerts.activeIngredient}
        />
        <button type="button" onClick={() => setExpand(true)}>Enter manually</button>
      </div>
      {/* TODO: consider an expandable menu set similar to address autocomplete that breaks up active ingredient and brand name, with a checkbox to ask if brand name should be included, and potentially a select menu on the brand input */}
      <fieldset className={`drug-collapse ${expand ? 'show' : 'hide'}`}>
        <FormField 
          id="brandName"
          name="brandName"
          label="Brand name" 
          placeholder="Enter brand name"
          value={data.brandName} 
          onChange={handleChange} 
        />

        <FormField 
          fieldType="checkbox" 
          name="includeBrand"
          label="Include brand name on the Rx" 
          onChange={() => toggle(setData, data, 'includeBrand')}
          checked={data.includeBrand}
        /> 

        <FormField 
          fieldType="checkbox" 
          name="brandOnly"
          label="Prescribe this medication by brand name only" 
          onChange={() => toggle(setData, data, 'brandOnly')}
          checked={data.brandOnly}
        />       

        <FormField 
          fieldType="checkbox" 
          name="substitutePermitted"
          label="Select to allow brand substitution" 
          onChange={() => toggle(setData, data, 'substitutePermitted')}
          checked={data.substitutePermitted}
        />     

        <FormField 
          fieldType="checkbox" 
          name="compounded"
          label="Select if this medication needs to be compounded" 
          onChange={() => toggle(setData, data, 'compounded')}
          checked={data.compounded}
        />  

        
      </fieldset>
    </StyledDrugAutocomplete>
  );
};

export default DrugAutocomplete;

