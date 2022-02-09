import { render, screen, fireEvent } from "@testing-library/react";
import DrugAutocomplete from "./DrugAutocomplete";

// Mock data and functions - all empty/blank mocks
const setData = () => {};
const setAlerts = () => {};
const handleChange = () => {};
// Used for testing calls to this function later
const toggleBoolean = jest.fn();
const data = {}
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
    render(<DrugAutocomplete 
      data={data}
      setData={setData}
      setAlerts={setAlerts}
      handleChange={handleChange}
      alerts={alerts}
      googleLoaded={false}
      toggle={toggleBoolean}
    />);
  });

  test('Extra fields open on "Enter Manually" button click', () => {
    const expandBtn = screen.getByRole('button', { name: 'Enter manually' });
    fireEvent.click(expandBtn);
    const hiddenField = screen.getByRole('textbox', { name: 'Brand name' });
    expect(hiddenField).toBeInTheDocument();
  });

  test('Extra fields close on "Enter Manually" button click twice', () => {
    const expandBtn = screen.getByRole('button', { name: 'Enter manually' });
    fireEvent.click(expandBtn);
    fireEvent.click(expandBtn);
    const hiddenField = screen.queryByRole('textbox', { name: 'Brand name' });
    expect(hiddenField).not.toBeInTheDocument();
  });

  test('Controlled checkbox inputs call toggle function on click', () => {
    const expandBtn = screen.getByRole('button', { name: 'Enter manually' });
    fireEvent.click(expandBtn);
    const brandInput = screen.getByRole('checkbox', { name: 'Prescribe by brand name only' });
    fireEvent.click(brandInput);
    expect(toggleBoolean).toBeCalled();
  });

  test('Controlled checkbox inputs call toggle function on enter press', () => {
    const expandBtn = screen.getByRole('button', { name: 'Enter manually' });
    fireEvent.click(expandBtn);
    const brandInput = screen.getByRole('checkbox', { name: 'Prescribe by brand name only' });
    fireEvent.keyDown(brandInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(toggleBoolean).toBeCalled();
  });
});



