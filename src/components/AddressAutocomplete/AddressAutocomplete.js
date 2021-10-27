/*global google*/ // Used to ignore the breaking 'google isn't defined' error
// Additional API resources to consider include Bing, HERE, ArcGIS
import FormField from "../FormField/FormField";
import { useCallback, useEffect, useRef } from "react"
import useAutocomplete from "../utils/useAutocomplete";

const AddressAutocomplete = ({ data, setData, handleChange }) => {

  const fillAddress = useCallback((placeDetails) => {
    let address = {
      streetNumber: '',
      streetName: '',
      suburb: '',
      postcode: '',
      state: '',
    }

    placeDetails['address_components'].forEach(component => {
      const componentType = component.types[0];
    
      switch (componentType) {
        case "street_number": {
          address.streetNumber = component.long_name
          break;
        }
    
        case "route": {
          address.streetName = component.long_name;
          break;
        }
    
        case "postal_code": {
          address.postcode = component.long_name;
          break;
        }
    
        case "locality": {
          address.suburb = component.long_name;
          break;
        }
    
        case "administrative_area_level_1": {
          address.state = component.long_name;
          break;
        }
    
        default: {
          break;
        }
      }
    });

    setData((prevData) => ({
      ...prevData,
      ...address,
    }));

  }, [setData])

  useEffect(() => {
    console.log('Running use-effect');
    // Check for an exisitng API script on the page to avoid duplicating
    let googleScript = document.querySelector('#google-script')

    if (!googleScript) {
      console.log('Require script');
      // First create and append Google Places API script
      googleScript = document.createElement('script');
      googleScript.id = 'google-script';

      // This process.env system for hiding an API key is COMPLETELY INSECURE for a deployed build. This is purely to hide on Github. In the future, this should be secured on backend
      googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
      googleScript.async = true;
      window.document.body.appendChild(googleScript);
    } 

    // Declare the autocomplete and input variable here; the latter of which will later be initialised to the autocomplete instance. Input gathered with useRef hook, and MUST be initialised inside useEffect, because the component will have been rendered then
    let autocomplete;
    const input = document.querySelector('#autocomplete')

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
      fillAddress(place);
      // Reset the address input (for now, in the future, use the original input as address line 1)
      input.value = "";
    }
 
    // const googleScript = document.createElement('script');

  //   // This process.env system for hiding an API key is COMPLETELY INSECURE for a deployed build. This is purely to hide on Github. In the future, this should be secured on backend
  //   googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
  //   googleScript.async = true;

  //   window.document.body.appendChild(googleScript);

  //   googleScript.addEventListener('load', () => {
  //     let input = document.querySelector('#autocomplete');
  //     let autocomplete = new google.maps.places.Autocomplete(input, {
  //       componentRestrictions: { 'country': ['AU'] },
  //       fields: ['address_components', 'name', 'formatted_address', 'adr_address'],
  //     });
  //     console.log('in func');
  //     autocomplete.addListener('place_changed', () => {
  //       let place = autocomplete.getPlace();
  //       console.log(place);
  //       fillAddress(place);
  //       input.value = "";
  //       console.log('address filled');
  //     });
  //     return autocomplete;
  //   });

  }, [fillAddress])
 

  return (
    <fieldset>
      <label htmlFor="autocomplete">Address</label>
      <input type="text" id="autocomplete"/>

      <FormField 
        fieldType="text" 
        name="streetNumber"
        label="Street number" 
        placeholder="Enter street number"
        value={data.streetNumber} 
        onChange={handleChange} 
      />

      <FormField 
        fieldType="text" 
        name="streetName"
        label="Street name" 
        placeholder="Enter street name"
        value={data.streetName} 
        onChange={handleChange} 
      />

      <FormField 
        fieldType="text" 
        name="suburb"
        label="Suburb" 
        placeholder="patient suburb"
        value={data.suburb} 
        onChange={handleChange} 
        data-testid="address"
      />

      <FormField 
        fieldType="text" 
        name="state"
        label="State" 
        placeholder="Enter state"
        value={data.state} 
        onChange={handleChange} 
      />

      <FormField 
        fieldType="text" 
        name="postcode"
        label="Postcode" 
        placeholder="Enter postcode"
        value={data.postcode} 
        onChange={handleChange} 
      />
    </fieldset>
  )
}

export default AddressAutocomplete;


