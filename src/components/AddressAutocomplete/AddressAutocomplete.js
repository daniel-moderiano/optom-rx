/*global google*/ // Used to ignore the breaking 'google isn't defined' error
// Additional API resources to consider include Bing, HERE, ArcGIS
import FormField from "../FormField/FormField";
import { useCallback, useEffect, useState } from "react"
import { StyledAddressAutocomplete } from "./AddressAutocomplete.styled";

const AddressAutocomplete = ({ data, setData, handleChange, provider, alerts, setAlerts }) => {
  // Use this to control whether the additional address fields should be expanded or not
  const [expand, setExpand] = useState(false);

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
          address.state = component.short_name;
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
    const inputs = document.querySelector('.address-collapse').querySelectorAll('input');
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
    
    // Prevent the default action of submitting the form when enter key is pressed, but ONLY under the condition that the user is selecting an autocomplete suggestion. 
    input.addEventListener('keydown', (event) => {
      const selected = document.querySelector('.pac-item-selected');
      if (event.keyCode === 13 && selected) {
        event.preventDefault();
      }
    });

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
        input.classList.add('error');
        input.classList.remove('success');
        setAlerts((prevAlerts) => ({
          ...prevAlerts,
          streetAddress: {
            message: "This field cannot be left blank",
            type: 'error',
          }
        }));
      } else {
        input.classList.remove('error');
        input.classList.add('success');
        inputs.forEach((input) => {
          if (input.name !== 'subpremise') {
            input.classList.add('success');
          }
        });
        setAlerts((prevAlerts) => ({
          ...prevAlerts,
          streetAddress: {},
          suburb: {},
          postcode: {},
          state: {},
        }));
        fillAddress(place);
         // Autofill, and toggle display of additional address fields
        setExpand(true);
        // Focus address subpremise input here to encourage user to add additional address info
        // Call after the setExpand function to ensure the subpremise field is set to display: block before attempting to focus
        subpremiseInput.focus();
      }
    }
  }, [fillAddress, provider, setAlerts])
 
  return (
    <StyledAddressAutocomplete>
      {/* Practice name is only relevant for providers */}
      {provider && <FormField 
        name="practiceName"
        label="Practice name" 
        placeholder="Enter practice name"
        value={data.practiceName} 
        onChange={handleChange} 
      />}

      <div className="autocomplete-group">
        <FormField
          name="streetAddress"
          label="Street Address"
          placeholder="Enter a location"
          value={data.streetAddress}
          onChange={handleChange} 
          id={provider ? 'autocomplete-provider' : 'autocomplete-patient'}
          alert={alerts.streetAddress}
          className="street-address"
        />
        <button type="button" onClick={() => setExpand(true)}>Enter manually</button>
      </div>
      

      <fieldset className={`address-collapse ${expand ? 'show' : 'hide'} ${provider ? 'address-collapse--provider' : ''}`}>
        <FormField 
          id={provider ? 'subpremise-provider' : 'subpremise-patient'}
          name="subpremise"
          label="Apartment, unit, shop, suite, or floor #" 
          placeholder="Enter"
          value={data.subpremise} 
          onChange={handleChange} 
        />

        <FormField 
          name="suburb"
          label="Suburb" 
          placeholder="patient suburb"
          value={data.suburb} 
          onChange={handleChange} 
          alert={alerts.suburb}
        />

        <FormField 
          name="state"
          label="State" 
          placeholder="Enter state"
          value={data.state} 
          onChange={handleChange} 
          alert={alerts.state}
        />

        <FormField 
          name="postcode"
          label="Postcode" 
          placeholder="Enter postcode"
          value={data.postcode} 
          onChange={handleChange} 
          alert={alerts.postcode}
        />
      </fieldset>
    </StyledAddressAutocomplete>
  )
}

export default AddressAutocomplete;


