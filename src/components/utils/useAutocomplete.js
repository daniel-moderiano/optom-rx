/*global google*/ // Used to ignore the breaking 'google isn't defined' error
import { useState, useEffect } from "react";

// Requires DOM element reference to text input; the autocomplete functionality will be applied to this input
const useAutocomplete = (inputRef) => {
  console.log('running');
  const [data, setData] = useState(null);

  useEffect(() => {
    // First create and append Google Places API script
    const googleScript = document.createElement('script');

    // This process.env system for hiding an API key is COMPLETELY INSECURE for a deployed build. This is purely to hide on Github. In the future, this should be secured on backend
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
    googleScript.async = true;
    window.document.body.appendChild(googleScript);
    // Declare the autocomplete and input variable here; the latter of which will later be initialised to the autocomplete instance. Input gathered with useRef hook, and MUST be initialised inside useEffect, because the component will have been rendered then
    let autocomplete;
    const input = inputRef.current;

    // Using a load event listener ensures the script is loaded prior to trying to access the API
    googleScript.addEventListener('load', () => {
      autocomplete = new google.maps.places.Autocomplete(input, {
        // Restrict search to Australian addresses only
        componentRestrictions: { 'country': ['AU'] },
        // Restrict to basic data only, which includes more than the below fields, just be wary to always restrict this
        fields: ['address_components', 'name', 'formatted_address', 'adr_address'],
      });

      // Listen for the user to click on one of the suggested dropdown places
      autocomplete.addListener('place_changed', onPlaceChanged);
    });

    // When the user clicks one of the options in the autocomplete dropdown, this function should be called
    const onPlaceChanged = () => {
      // Get the information about the place that was selected, i.e. the fields specified in the Autocomplete instance
      let place = autocomplete.getPlace();
      setData(place)
      // Reset the address input (for now, in the future, use the original input as address line 1)
      input.value = "";
    }
 
  }, [inputRef]);

  return { data }
}

export default useAutocomplete;