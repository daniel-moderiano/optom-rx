/*global google*/ // Used to ignore the breaking 'google isn't defined' error
// Additional API resources to consider include Bing, HERE, ArcGIS
import FormField from "../FormField/FormField";
import { useCallback, useEffect, useState } from "react"
import { StyledAddressAutocomplete } from "./AddressAutocomplete.styled";

// TODO: Form validation; for address, only need to validate subpremise, as the rest will be validated by the Google API

const AddressAutocomplete = ({ data, setData, handleChange, provider }) => {
  // Use this to control whether the additional address fields should be expanded or not
  const [expand, setExpand] = useState(false);

  // Control field validation here (set alert with object containing alert parameters when user makes error for example)
  const [autocompleteAlert, setAutocompleteAlert] = useState({});

  const [addressAlerts, setAddressAlerts] = useState({
    suburb: {},
    postcode: {},
    state: {},
  });

  const showErrorClass = (element) => {
    element.classList.add('error');
    element.classList.remove('success');
  }

  const showSuccessClass = (element) => {
    element.classList.remove('error');
    element.classList.add('success');
  }

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
    const inputs = document.querySelector('.address-collapse').querySelectorAll('input');
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
    
    // Prevent the default action of submitting the form when enter key is pressed, but ONLY under the condition that the user is selecting an autocomplete suggestion. 
    input.addEventListener('keydown', (event) => {
      const selected = document.querySelector('.pac-item-selected');
      if (event.keyCode === 13 && selected) {
        event.preventDefault();
      }
    });

    // Add form validation for address-collapse section(s)
    // Event propagation will capture all focusout events from patient form
    const addressDataValidation = () => {
      document.querySelector('.address-collapse').addEventListener('focusout', (event) => {
        const { name, value } = event.target;
        switch (true) {
          case name === 'suburb':
            if (value.trim().length === 0) {
              setAddressAlerts((prevAlerts) => ({
                ...prevAlerts,
                suburb: {
                  message: "This field cannot be left blank",
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else {
              showSuccessClass(event.target);
              setAddressAlerts((prevAlerts) => ({
                ...prevAlerts,
                suburb: {}
              }));
            }
            break;
    
          case name === 'state':
            if (value.trim().length === 0) {
              setAddressAlerts((prevAlerts) => ({
                ...prevAlerts,
                state: {
                  message: "This field cannot be left blank",
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else {
              showSuccessClass(event.target);
              setAddressAlerts((prevAlerts) => ({
                ...prevAlerts,
                state: {}
              }));
            }
            break;
    
          case name === 'postcode':
            if (value.trim().length === 0) {
              setAddressAlerts((prevAlerts) => ({
                ...prevAlerts,
                postcode: {
                  message: "This field cannot be left blank",
                  type: 'error',
                }
              }));
              showErrorClass(event.target);
            } else {
              // Positive feedback and remove errors
              showSuccessClass(event.target);
              setAddressAlerts((prevAlerts) => ({
                ...prevAlerts,
                postcode: {}
              }));
            }
            break;
        
          default:
            break;
        }
      });
    };

    addressDataValidation();

    // Add similar validation for empty address field
    input.addEventListener('focusout', () => {
      if (input.value.trim().length === 0) {
        setAutocompleteAlert({ message: "This field cannot be left blank", type: 'error' })
        showErrorClass(input);
      } else {
        // While it is OK to remove the error alerts here, the entire address section must be validated before form is submitted (to prevent user only adding to the street address field).
        showSuccessClass(input);
        setAutocompleteAlert({});
      }
    })

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
        setAutocompleteAlert({ message: "Invalid address selection", type: 'error' })
      } else {
        console.log(place);
        input.classList.remove('error');
        input.classList.add('success');
        inputs.forEach((input) => {
          if (input.name !== 'subpremise') {
            input.classList.add('success');
          }
        });
        setAutocompleteAlert({});
        setAddressAlerts({
          suburb: {},
          postcode: {},
          state: {},
        })
        fillAddress(place);
         // Autofill, and toggle display of additional address fields
        setExpand(true);
        // Focus address subpremise input here to encourage user to add additional address info
        // Call after the setExpand function to ensure the subpremise field is set to display: block before attempting to focus
        subpremiseInput.focus();
      }
    }
  }, [fillAddress, provider])
 
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
          alert={autocompleteAlert}
          className="street-address"
        />
        <button type="button" onClick={() => setExpand(true)}>Address not listed?</button>
      </div>
      

      <fieldset className={`address-collapse ${expand ? 'show' : 'hide'}`}>
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
          alert={addressAlerts.suburb}
        />

        <FormField 
          name="state"
          label="State" 
          placeholder="Enter state"
          value={data.state} 
          onChange={handleChange} 
          alert={addressAlerts.state}
        />

        <FormField 
          name="postcode"
          label="Postcode" 
          placeholder="Enter postcode"
          value={data.postcode} 
          onChange={handleChange} 
          alert={addressAlerts.postcode}
        />
      </fieldset>
    </StyledAddressAutocomplete>
  )
}

export default AddressAutocomplete;


