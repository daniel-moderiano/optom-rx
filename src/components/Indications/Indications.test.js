import { render, screen, fireEvent } from "@testing-library/react";
import Indications from './Indications';

// Prevent errors from clogging the console
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(jest.fn());
});

const cicloData = "Chronic severe dry eye disease with keratitis Treatment Phase: Continuing treatment Clinical criteria: * Patient must have received PBS-subsidised treatment with this drug for this condition, AND * The condition must have improved to an extent that corneal fluorescein staining, using the same scale used at the time of the first authority application, shows an improvement (reduction) by at least 3 grades from baseline (the grade stated in the first authority application) - the improvement need only be demonstrated by staining once only with the first Continuing treatment authority application, AND * The condition must have improved to an extent that the patient's ocular surface disease index score at the time of this authority application, has improved (reduced) by at least 30% compared to the value stated in the first authority application (i.e. baseline). Treatment criteria: * Must be treated by an ophthalmologist or by an accredited ophthalmology registrar in consultation with an ophthalmologist; OR * Must be treated by an optometrist in accordance with Optometry Board of Australia guidelines. Prescribing instructions: State in the first continuing treatment authority application for this drug: (i) an improved corneal fluorescein staining grade (a numerical value that has improved by 3 grades from that provided in the first Initial 1 treatment authority application). State in all continuing treatment authority applications: (ii) the ocular surface disease index score at the time of this authority application (a numerical value that is at least 30% lower than that stated in the first Initial 1 treatment authority application).";

const generalData = "Elevated intra-ocular pressure Clinical criteria: * The condition must have been inadequately controlled with monotherapy, AND * Patient must have open-angle glaucoma; OR * Patient must have ocular hypertension.";

test('Indications initialises in collapsed form', () => {
  render(<Indications indicationsData={cicloData} />);
  const indications = screen.getByTestId('indications-content');
  expect(indications.classList).toContain('collapse');
});

test('Indications expands on button/div press', () => {
  render(<Indications indicationsData={cicloData} />);
  const expandBtn = screen.getByRole('button');
  fireEvent.click(expandBtn);
  const indications = screen.getByTestId('indications-content');
  expect(indications.classList).toContain('expand');
});

test('Ciclosporin is handled correctly by inserting link to PBS page', () => {
  render(<Indications indicationsData={cicloData} />);
  const link = screen.getByText('PBS listing');
  expect(link).toBeInTheDocument();
});

test('All non-ciclosporin medications are formatted appropriately', () => {
  render(<Indications indicationsData={generalData} />);
  const formattedText = screen.getByText('Patient must have open-angle glaucoma; OR');
  expect(formattedText).toBeInTheDocument();
});
