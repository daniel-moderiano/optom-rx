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
});
