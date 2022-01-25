/*global google*/ // Used to ignore the breaking 'google isn't defined' error
import FormField from "../FormField/FormField";
import { useCallback, useEffect, useState } from "react"
import { StyledAddressAutocomplete } from "./AddressAutocomplete.styled";

const AddressAutocomplete = ({ data, setData, handleChange, provider, alerts, setAlerts, googleLoaded }) => {
  // Use this to control whether the additional address fields should be expanded or not
  const [expand, setExpand] = useState(false);

  // Ensure the address field is expanded if the user attempts to submit by entering only street address and leaving other fields untouched
  useEffect(() => {
    if (Object.keys(alerts.suburb).length !== 0 || Object.keys(alerts.state).length !== 0 || Object.keys(alerts.postcode).length !== 0) {
      setExpand(true);
    }
  }, [alerts.suburb, alerts.state, alerts.postcode]);

  // Used to fill in the form fields with place details returned from the google autocomplete API
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
  }, [setData]);

  // Add all the autocomplete functionality to the autocomplete input
  useEffect(() => {
    const inputs = document.querySelector(`.address-collapse${provider ? '--provider' : '--patient'}`).querySelectorAll('input');
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
            input.classList.remove('error');
            input.classList.add('success');

            // Add the tick icon
            const tick = input.parentNode.querySelector('.tickCircle');
            tick.classList.remove('hide');
            tick.classList.add("show");
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

    if (googleLoaded) {
      // Add new autocomplete capability/session to input
      autocomplete = new google.maps.places.Autocomplete(input, {
        // Restrict search to Australian addresses only
        componentRestrictions: { 'country': ['AU'] },
        // Restrict to basic data only, which includes more than the below fields, just be wary to always restrict this
        fields: ['address_components', 'name', 'formatted_address', 'adr_address', 'geometry'],
      });
      // Listen for the user to click on one of the suggested dropdown places
      autocomplete.addListener('place_changed', onPlaceChanged);
    }

    return  () => {
      google.maps.event.clearInstanceListeners(input);
      document.querySelectorAll('.pac-container').forEach((container) => container.remove())
    }
  }, [fillAddress, provider, setAlerts, googleLoaded])
 

  return (
    <StyledAddressAutocomplete className={`${expand ? 'AddressAutocomplete expanded' : 'AddressAutocomplete collapsed'}`}>
      <legend className="visually-hidden">Patient Address</legend>
      <FormField
        name="streetAddress"
        label="Street address"
        placeholder="Enter a location"
        value={data.streetAddress}
        onChange={handleChange} 
        id={provider ? 'autocomplete-provider' : 'autocomplete-patient'}
        alert={alerts.streetAddress}
        className="street-address form-field"
        required
      />

      <button type="button" className="address-expand" onClick={() => setExpand(prevState => (!prevState))}>{expand ? 'Hide extra fields' : 'Enter manually'}</button>

      <div className={`address-collapse ${expand ? 'show' : 'hide'} ${provider ? 'address-collapse--provider' : 'address-collapse--patient'}`}>
        <FormField 
          id={provider ? 'subpremise-provider' : 'subpremise-patient'}
          name="subpremise"
          label="Apartment, unit, shop, suite, or floor #" 
          value={data.subpremise} 
          onChange={handleChange} 
        />

        <FormField 
          name="suburb"
          label="Suburb" 
          value={data.suburb} 
          onChange={handleChange} 
          alert={alerts.suburb}
          required
        />

        <FormField 
          name="state"
          label="State" 
          value={data.state} 
          onChange={handleChange} 
          alert={alerts.state}
          className="form-field"
          required
        />

        <FormField 
          name="postcode"
          label="Postcode" 
          value={data.postcode} 
          onChange={handleChange} 
          alert={alerts.postcode}
          className="postcode-field"
          maxlength="4"
          required
        />
      </div>
    </StyledAddressAutocomplete>
  )
}

export default AddressAutocomplete;


