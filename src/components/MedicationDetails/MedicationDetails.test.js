import { render, screen } from "@testing-library/react";
import MedicationDetails from "./MedicationDetails";

// Mock data and functions - all empty/blank mocks
const setData = () => {};
const setAlerts = () => {};
const data = {};
const alerts = {
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

// Prevent errors from clogging the console
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn());
});

test('Indications are hidden by default', () => {
  render(<MedicationDetails 
    data={data}
    alerts={alerts}
    setData={setData}
    setAlerts={setAlerts}
  />);
  const indications = screen.queryByTestId('Indications');
  expect(indications).not.toBeInTheDocument();
});

test('Indications are shown when correct conditions are met', () => {
  render(<MedicationDetails 
    data={{ verified: true, indications: ['Indications here'], pbsRx: true }}
    alerts={alerts}
    setData={setData}
    setAlerts={setAlerts}
  />);
  const indications = screen.getByTestId('Indications');
  expect(indications).toBeInTheDocument();
});

test('Indications are hidden when only some conditions are met', () => {
  render(<MedicationDetails 
    data={{ verified: false, indications: ['Indications here'], pbsRx: true }}
    alerts={alerts}
    setData={setData}
    setAlerts={setAlerts}
  />);
  const indications = screen.queryByTestId('Indications');
  expect(indications).not.toBeInTheDocument();
});
