/*global google*/ // Used to ignore the breaking 'google isn't defined' error
// Additional API resources to consider include Bing, HERE, ArcGIS
import FormField from "../FormField/FormField";
import { useCallback, useEffect } from "react"
import { StyledAddressAutocomplete } from "./AddressAutocomplete.styled";

const AddressAutocomplete = ({ data, setData, handleChange, provider }) => {
  const fillAddress = useCallback((placeDetails) => {
    let address = {
      streetAddress: '',
      subpremise: '',
      suburb: '',
      postcode: '',
      state: '',
    }

    // For now this is hard coded to address_components, but can be modified as needed
    placeDetails['address_components'].forEach(component => {
      const componentType = component.types[0];
    
      switch (componentType) {
        case "street_number": {
          address.streetAddress = component.long_name
          break;
        }
    
        case "route": {
          address.streetAddress = `${address.streetAddress} ${component.long_name}`;
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

    // MUST use the previous data to avoid resetting the state for all non-address input fields
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
    const input = document.querySelector(`#autocomplete-${provider ? 'provider' : 'patient'}`);
    const subpremiseInput = document.querySelector(`#subpremise-${provider ? 'provider' : 'patient'}`);    

    // Using a load event listener ensures the script is loaded prior to trying to access the API
    googleScript.addEventListener('load', () => {
      autocomplete = new google.maps.places.Autocomplete(input, {
        // Restrict search to Australian addresses only
        componentRestrictions: { 'country': ['AU'] },
        // Restrict to basic data only, which includes more than the below fields, just be wary to always restrict this
        fields: ['address_components', 'name', 'formatted_address', 'adr_address', 'geometry'],
      });

      // Listen for the user to click on one of the suggested dropdown places
      autocomplete.addListener('place_changed', onPlaceChanged);
    });

    // When the user clicks one of the options in the autocomplete dropdown, this function should be called
    const onPlaceChanged = () => {
      // Get the information about the place that was selected, i.e. the fields specified in the Autocomplete instance
      let place = autocomplete.getPlace();
      
      if (!place.geometry) {
        // Occurs when user hits enter without selecting an option
        console.log('Not a valid address!');
        // TODO: Show UI error here
      } else {
        console.log(place);
        fillAddress(place);
           // Focus address subpremise input here to encourage user to add additional address info
        subpremiseInput.focus();
      }
    }
  }, [fillAddress, provider])
 
  return (
    <StyledAddressAutocomplete>
      {/* Practice name is only relevant for providers */}
      {provider && <FormField 
        fieldType="text" 
        name="practiceName"
        label="Practice name" 
        placeholder="Enter practice name"
        value={data.practiceName} 
        onChange={handleChange} 
      />}

      <FormField
        fieldType="text" 
        name="streetAddress"
        label="Street Address"
        placeholder="Enter a location"
        value={data.streetAddress}
        onChange={handleChange} 
        id={ provider ? 'autocomplete-provider' : 'autocomplete-patient'}
      />

      <FormField 
        fieldType="text" 
        name="subpremise"
        label="Apartment, unit, shop, suite, or floor #" 
        placeholder="Enter"
        value={data.subpremise} 
        onChange={handleChange} 
        id={provider ? 'subpremise-provider' : 'subpremise-patient'}
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
    </StyledAddressAutocomplete>
  )
}

export default AddressAutocomplete;


