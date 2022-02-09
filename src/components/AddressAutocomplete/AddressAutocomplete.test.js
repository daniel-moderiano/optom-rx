import { render, screen, fireEvent } from "@testing-library/react";
import AddressAutocomplete from "./AddressAutocomplete";

// Mock data and functions - all empty/blank mocks
const setData = () => {};
const setAlerts = () => {};
const handleChange = () => {};
const alerts = {
  fullName: {},
  streetAddress: {},
  suburb: {},
  postcode: {},
  state: {},
  phoneNumber: {},
  prescriberNumber: {},
};

// Prevent errors from clogging the console
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn());
});

describe('General tests', () => {
  // Avoid rewriting before every single test
  beforeEach(() => {
    render(<AddressAutocomplete 
      data={{}}
      setData={setData}
      setAlerts={setAlerts}
      handleChange={handleChange}
      alerts={alerts}
      googleLoaded={false}
    />);
  });

  test('Extra fields open on "Enter Manually" button click', () => {
    const expandBtn = screen.getByRole('button', { name: 'Enter manually' });
    fireEvent.click(expandBtn);
    const hiddenField = screen.getByRole('textbox', { name: 'Suburb' });
    expect(hiddenField).toBeInTheDocument();
  });

  test('Extra fields close on "Enter Manually" button click twice', () => {
    const expandBtn = screen.getByRole('button', { name: 'Enter manually' });
    fireEvent.click(expandBtn);
    fireEvent.click(expandBtn);
    const hiddenField = screen.queryByRole('textbox', { name: 'Suburb' });
    expect(hiddenField).not.toBeInTheDocument();
  });

  test('Controlled inputs work correctly with user input', () => {
    const expandBtn = screen.getByRole('button', { name: 'Enter manually' });
    fireEvent.click(expandBtn);
    const suburbInput = screen.getByRole('textbox', { name: 'Suburb' });
    fireEvent.change(suburbInput, { target: { value: 'Wynn vale' } })
    expect(suburbInput.value).toBe('Wynn vale');
  });
});