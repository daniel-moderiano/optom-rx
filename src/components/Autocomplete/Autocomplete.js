/*global google*/ // Used to ignore the breaking 'google isn't defined' error
// Additional API resources to consider include Bing, HERE, ArcGIS

import { useEffect } from "react"

const Autocomplete = () => {

  useEffect(() => {
    const googleScript = document.createElement('script');

    // This process.env system for hiding an API key is COMPLETELY INSECURE for a deployed build. This is purely to hide on Github. In the future, this should be secured on backend
    googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
    googleScript.async = true;

    window.document.body.appendChild(googleScript);

    googleScript.addEventListener('load', () => {
      console.log('script loaded');
      let input = document.querySelector('#autocomplete');
      let autocomplete = new google.maps.places.Autocomplete(input, {
        componentRestrictions: { 'country': ['AU'] },
        fields: ['address_components'],
      });

      const onPlaceChanged = () => {
        // Autofill form here
        let place = autocomplete.getPlace();
        console.log(place);

        if (!place.geometry) {
          // User did not select a prediction; reset the input field
          input.placeholder = 'Enter a place';
        } else {
          // Do something with results
        }
      }

      autocomplete.addListener('place_changed', onPlaceChanged);
    });

  }, [])

  return (
    <fieldset>
      <label htmlFor="autocomplete">Address</label>
      <input type="text" id="autocomplete"/>
    </fieldset>
  )
}

export default Autocomplete;


