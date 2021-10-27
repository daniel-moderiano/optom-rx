const mockResponse = {
  "address_components": [
      {
          "long_name": "6",
          "short_name": "6",
          "types": [
              "street_number"
          ]
      },
      {
          "long_name": "Old Tawny Close",
          "short_name": "Old Tawny Cl",
          "types": [
              "route"
          ]
      },
      {
          "long_name": "Wynn Vale",
          "short_name": "Wynn Vale",
          "types": [
              "locality",
              "political"
          ]
      },
      {
          "long_name": "City of Tea Tree Gully",
          "short_name": "Tea Tree Gully",
          "types": [
              "administrative_area_level_2",
              "political"
          ]
      },
      {
          "long_name": "South Australia",
          "short_name": "SA",
          "types": [
              "administrative_area_level_1",
              "political"
          ]
      },
      {
          "long_name": "Australia",
          "short_name": "AU",
          "types": [
              "country",
              "political"
          ]
      },
      {
          "long_name": "5127",
          "short_name": "5127",
          "types": [
              "postal_code"
          ]
      }
  ],
  "html_attributions": []
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse)
}