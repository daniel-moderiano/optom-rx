import { render, screen } from "@testing-library/react";
import AuthorityDetails from "./AuthorityDetails";

// Mock data and functions - all empty/blank mocks
const setDrugData = () => {};
const setMiscData = () => {};
const numbersLoading = () => {};
const drugAlerts = {
  name: {},
  quantity: {},
  repeats: {},
  dosage: {},
  pbsRx: {},
  maxQuantity: {},
  maxRepeats: {},
  activeIngredient: {},
  authRequired: {},
};
const miscAlerts = {
  date: {},
  authRxNumber: {},
  authCode: {},
  scriptID: {},
  justification: {},
  prevAuth: {},
  age: {},
};

// Prevent errors from clogging the console
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn());
});

test('Auth fields are hidden by default', () => {
  render(<AuthorityDetails 
    drugData={{}}
    miscData={{}}
    drugAlerts={drugAlerts}
    miscAlerts={miscAlerts}
    setDrugData={setDrugData}
    setMiscData={setMiscData}
    numbersLoading={numbersLoading}
  />);
  const authNumber = screen.queryByText(/Authority script number:/i);
  expect(authNumber).not.toBeInTheDocument();
});

test('Auth fields are shown for relevant drugs', () => {
  render(<AuthorityDetails 
    drugData={{ authRequired: true, pbsRx: true }}
    miscData={{}}
    drugAlerts={drugAlerts}
    miscAlerts={miscAlerts}
    setDrugData={setDrugData}
    setMiscData={setMiscData}
    numbersLoading={numbersLoading}
  />);
  const authNumber = screen.queryByText(/Authority script number:/i);
  expect(authNumber).toBeInTheDocument();
});
