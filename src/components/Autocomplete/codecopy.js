    // function initMap() {
    //   const componentForm = [
    //     'location',
    //     'locality',
    //     'administrative_area_level_1',
    //     'country',
    //     'postal_code',
    //   ];
    //   const autocompleteInput = document.getElementById('location');
    //   const autocomplete = new google.maps.places.Autocomplete(autocompleteInput, {
    //     fields: ["address_components", "geometry", "name"],
    //     types: ["address"],
    //   });
    //   autocomplete.addListener('place_changed', function () {
    //     const place = autocomplete.getPlace();
    //     if (!place.geometry) {
    //       // User entered the name of a Place that was not suggested and
    //       // pressed the Enter key, or the Place Details request failed.
    //       window.alert('No details available for input: \'' + place.name + '\'');
    //       return;
    //     }
    //     fillInAddress(place);
    //   });

    //   function fillInAddress(place) {  // optional parameter
    //     // autofill function
    //   }
    // }