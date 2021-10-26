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
  test('Patient first name input initialises with empty string value', () => {
    render(<RxForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    expect(firstNameInput.value).toBe('');
  });

  test("Patient first name input updates state and therefore it's own value when user types in input", () => {
    render(<RxForm />);
    const firstNameInput = screen.getByLabelText(/first name/i);
    fireEvent.change(firstNameInput, { target: { value: 'john' } })
    expect(firstNameInput.value).toBe('john');
  });

});