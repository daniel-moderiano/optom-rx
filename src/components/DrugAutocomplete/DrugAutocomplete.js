import PBSData from '../../pbs/pbsDataUnique.json'
import { useEffect, useState, useCallback, useRef } from "react";
import { StyledDrugAutocomplete } from './DrugAutocompleteStyled';
import FormField from '../FormField/FormField';

const DrugAutocomplete = ({ data, setData, handleChange }) => {
  // useRef allows us to store the equivalent of a 'global' component variable without losing data on re-render, but avoiding the async problems that can arise with state
  const currentFocus = useRef(-1);

  const [expand, setExpand] = useState(false);

  // Remove any currently displayed itemLists
  const removeList = useCallback(() => {
    // const itemsList = document.querySelector('.items-list');
    currentFocus.current = -1;
    // if (itemsList) {
    //   itemsList.remove();
    // }
    document.querySelectorAll('.item').forEach((item) => {
      item.remove();
    })
  }, []);

  // Capture the selection made in the items list via event propagation
  const clickSuggestion = useCallback((event) => {
    if (event.target.classList.contains('item')) {
      // Set state onclick - do NOT set input.value as this will not work as intended. Always adjust state and have input.value set to state
      setData((prevData) => ({
        ...prevData,
        activeIngredient: event.target.dataset.activeIngredient,
        brandName: event.target.dataset.brandName,
        itemCode: event.target.dataset.code,
      }));
      // TODO: Consider adding some functionality here to pre-fill RxForm state with name/brand name etc.
      
      removeList();
      setExpand(true);
      document.querySelector('#brandName').focus();
    }
  }, [removeList, setData]);

  // Given a string, use the current search text and regex to bold the segment of text being searched for (using HTML)
  const boldLetters = useCallback((string) => {
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
  }, [data.activeIngredient])

  // Creates list of autocomplete items using an array of relevant suggestions (matchArr)
  const createList = useCallback((matchArr) => {
    // First remove any lists present to ensure the list if refreshed on each new input
    removeList();
    // Create the new list container
    // const itemsList = document.createElement('div');
    // itemsList.classList.add('items-list');
    // document.querySelector('.DrugAutocomplete').appendChild(itemsList);
    const itemsList = document.querySelector('.items-list');
    // Append each list item from the source array
    matchArr.forEach((match) => {
      // TODO: decide whether this bolding is helpful or hinders
      const boldActiveName = boldLetters(`${match['tpuu-or-mpp-pt']}`);
      const boldBrandName = boldLetters(`${match['brand-name']}`);
      const item = document.createElement('div');
      item.innerHTML = `${boldActiveName} / ${boldBrandName}`;
      item.dataset.code = match['item-code'];
      item.dataset.activeIngredient = match['tpuu-or-mpp-pt'];
      item.dataset.brandName = match['brand-name'];
      // item.textContent = `${match['tpuu-or-mpp-pt']} / ${match['brand-name']}`;    // Choose here which name to display: ;
      item.classList.add('item');
      itemsList.appendChild(item);     
    }); 

    itemsList.addEventListener('click', clickSuggestion);
  }, [removeList, clickSuggestion, boldLetters]);


  // // Perform the autocomplete logic here
  // useEffect(() => {
  //   // Must put the logic for finding matches in useEffect, or else it won't capture the first input typed in  
  //   // Two regex to match search text in different parts of the string. Split-up to allow custom ordering of matches in final UI list
  //   let regexFirst;
  //   let regexSecond;
  //   let matches;

  //   // Handle user typing in special characters, which would otherwise crash the app here
  //   try {
  //     regexFirst = new RegExp(`^${data.activeIngredient}`, 'i');
  //     regexSecond = new RegExp(`\\+ ${data.activeIngredient}`, 'i');
  //   } catch (error) {
  //     // TODO: error message handling in UI
  //     console.log(error.message);
  //   }
    
  //   if (!regexFirst || !regexSecond) {
  //     matches = [];
  //   } else {
  //     // Match first at the start of a string (e.g. 'tim' matches 'timolol' but not 'latanoprost + timolol')
  //     let firstMatches = PBSData.filter((drug) => {
  //       return drug['brand-name'].some((name) => name.match(regexFirst)) || drug['tpuu-or-mpp-pt'].match(regexFirst);
  //     });

  //     // Match a second drug (e.g. 'tim' matches 'latanoprost + timolol' but not 'timolol'). These are lower priority and should be displayed second in a list
  //     let secondMatches = PBSData.filter((drug) => {
  //       return drug['brand-name'].some((name) => name.match(regexSecond)) || drug['tpuu-or-mpp-pt'].match(regexSecond);
  //     });

  //     // Remove any duplicates (only relevant for the first typed char)
  //     let filteredSecondMatches = secondMatches.filter((drug) => !firstMatches.includes(drug))

  //     // Combine all the results into a single pseudo-ordered array
  //     matches = firstMatches.concat(filteredSecondMatches);
  //   }

  //   // Reset the search results when the user clears the field
  //   if (data.activeIngredient.length === 0) {
  //     matches = [];
  //   }

  //   createList(matches);
  // }, [data.activeIngredient, createList]);


  

  // Leave this dependency array empty to ensure this runs only once on first mount
  useEffect(() => {
    const input = document.querySelector('#activeIngredient');
    // const itemsList = document.querySelector('.items-list'); 
    const itemsList = document.createElement('div');
    itemsList.classList.add('items-list');
    document.querySelector('.DrugAutocomplete').appendChild(itemsList);
// TODO itemsList no longer defined on render so keyNav not working as intended. Need to pre-define to allow this to work properly
    console.log(itemsList);
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

  const handleSearch = (event) => {
        // Must put the logic for finding matches in useEffect, or else it won't capture the first input typed in  
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

  // const handleLocalChange = (event) => {
  //   setSearchText(event.target.value);
  // }

  return (
    <StyledDrugAutocomplete>
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
      </fieldset>
    </StyledDrugAutocomplete>
  );
};

export default DrugAutocomplete;

