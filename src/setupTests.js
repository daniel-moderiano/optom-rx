import '@testing-library/jest-dom';

// Setup global 'google' variable to avoid the ReferenceError involing the 'google' var
window.google = {
  maps: {
    places: {
      Autocomplete: function () {
        return { addListener: jest.fn() };
      },
      event: { trigger: jest.fn() }
    }
  }
};