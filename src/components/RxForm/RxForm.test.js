import { render, screen, fireEvent } from "@testing-library/react";
import RxForm from "./RxForm";

describe('Drug input tests', () => {
  test('Drug input initialises with empty string value', () => {
    render(<RxForm />);
    const drugInput = screen.getByLabelText(/medication/i);
    expect(drugInput.value).toBe('');
  });

  test("Drug input updates state and therefore it's own value when user types in input", () => {
    render(<RxForm />);
    const drugInput = screen.getByLabelText(/medication/i);
    fireEvent.change(drugInput, { target: { value: 'maxidex' } })
    expect(drugInput.value).toBe('maxidex');
  });

});

describe('Patient data tests', () => {
  test('Patient data input initialises with empty string value', () => {
    render(<RxForm />);
    const firstNameInput = screen.getByLabelText(/medicare number/i);
    expect(firstNameInput.value).toBe('');
  });

  test("Patient data input updates state and therefore it's own value when user types in input", () => {
    render(<RxForm />);
    const firstNameInput = screen.getByLabelText(/medicare number/i);
    fireEvent.change(firstNameInput, { target: { value: '01234567' } })
    expect(firstNameInput.value).toBe('01234567');
  });
});

describe('Provider data tests', () => {
  test('Provider data input initialises with empty string value', () => {
    render(<RxForm />);
    const firstNameInput = screen.getByLabelText(/prescriber number/i);
    expect(firstNameInput.value).toBe('');
  });

  test("Provider data input updates state and therefore it's own value when user types in input", () => {
    render(<RxForm />);
    const firstNameInput = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(firstNameInput, { target: { value: '01234567' } })
    expect(firstNameInput.value).toBe('01234567');
  });
});

describe('Parameter data tests', () => {
  test('Parameter data input initialises with empty string value', () => {
    render(<RxForm />);
    const firstNameInput = screen.getByLabelText(/quantity/i);
    expect(firstNameInput.value).toBe('');
  });

  test("Parameter data input updates state and therefore it's own value when user types in input", () => {
    render(<RxForm />);
    const firstNameInput = screen.getByLabelText(/quantity/i);
    fireEvent.change(firstNameInput, { target: { value: '3' } })
    expect(firstNameInput.value).toBe('3');
  });
});


describe('Patient data validation', () => {
  test('IRN rejects values > 1 digit long', () => {
    render(<RxForm />);
    const IRNInput = screen.getByLabelText(/irn/i);
    fireEvent.change(IRNInput, { target: { value: '35' } });
    fireEvent.focusOut(IRNInput);
    const alert = screen.getByText(/IRN must be a single digit between 1 through 9/i);
    expect(alert).toBeInTheDocument();
  });

  test('IRN rejects empty input', () => {
    render(<RxForm />);
    const IRNInput = screen.getByLabelText(/irn/i);
    fireEvent.change(IRNInput, { target: { value: '' } });
    fireEvent.focusOut(IRNInput);
    const alert = screen.getByText(/IRN must be a single digit between 1 through 9/i);
    expect(alert).toBeInTheDocument();
  });

  test("IRN field accepts single digit from 0-9 inclusive", () => {
    render(<RxForm />);
    const IRNInput = screen.getByLabelText(/irn/i);
    fireEvent.change(IRNInput, { target: { value: '2' } });
    fireEvent.focusOut(IRNInput);
    const alert = screen.queryByText(/IRN must be a single digit between 1 through 9/i);
    expect(alert).not.toBeInTheDocument();
  });

  test('Medicare number input rejects empty value', () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).toBeInTheDocument();
  });

  test('Medicare number input rejects number < 10 digits', () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '12' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).toBeInTheDocument();
  });

  test("Medicare number input rejects > 10 digits", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '111111112222222' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).toBeInTheDocument();
  });

  test("Medicare number input rejects non-digits", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '5152677a01' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).toBeInTheDocument();
  });

  test("Medicare number input accepts 10 digit valid number", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '1234567890' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Medicare number input rejects zero as leading digit", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '0234567890' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must not start with zero/i);
    expect(alert).toBeInTheDocument();
  });

  test("Prescriber number input rejects non-digits", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(input, { target: { value: '3445a67' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Prescriber number must be a seven digit number/i);
    expect(alert).toBeInTheDocument();
  });

  test("Prescriber number input rejects single digit only", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(input, { target: { value: '2' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Prescriber number must be a seven digit number/i);
    expect(alert).toBeInTheDocument();
  });
  
  test("Prescriber number input accepts 7 digit number", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(input, { target: { value: '1234567' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Prescriber number must be a seven digit number/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Phone number input validates mobile number", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '0400000000' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Please enter a valid Australian phone number/i);
    expect(alert).not.toBeInTheDocument();
  });
  
  test("Phone number input validates state-specific landline number", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '0212344321' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Please enter a valid Australian phone number/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Phone number input validates Aus wide landline number", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '1300000000' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Please provide a valid Australian phone number/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Phone number input validates Aus wide 13 number (6 digit)", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '131316' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Please provide a valid Australian phone number/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Phone number input rejects numbers < 10 digits", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '021234432' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08/i);
    expect(alert).toBeInTheDocument();
  });

  test("Phone number input rejects numbers > 10 digits", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '23133442345356' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08/i);
    expect(alert).toBeInTheDocument();
  });

  test("Phone number input rejects numbers with non-digits", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '2345ac356' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08/i);
    expect(alert).toBeInTheDocument();
  });

  test("Phone number input rejects numbers starting with neither 0 or 1", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '2345234523' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08/i);
    expect(alert).toBeInTheDocument();
  });

  test("Phone number input rejects invalid 13 numbers", () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '1324432112' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian business numbers are either 6 digits and begin with 13, or 10 digits and begin with 1300/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug name input rejects empty value', () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/medication/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug quantity input rejects empty value', () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/quantity/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Please enter a single digit medication quantity/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug quantity input rejects input of 0', () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/quantity/i);
    fireEvent.change(input, { target: { value: '0' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Please enter a single digit medication quantity/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug quantity input rejects value > 9', () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/quantity/i);
    fireEvent.change(input, { target: { value: '34' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Please enter a single digit medication quantity/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug repeats input rejects empty value', () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/repeats/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug dosage input rejects empty value', () => {
    render(<RxForm />);
    const input = screen.getByLabelText(/dosage/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

});
