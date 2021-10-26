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