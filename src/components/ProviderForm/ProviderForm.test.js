import ProviderForm from './ProviderForm';
import { render, screen, fireEvent } from '@testing-library/react';

// Used because of the 'google is not defined' error 
beforeEach(() => {
  jest.spyOn(console, 'error')
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockImplementation(() => null);
});

afterEach(() => {
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockRestore()
})

describe('Provider data input tests', () => {
  test('Provider data input initialises with existing data', () => {
    render(<ProviderForm existingData={{ providerData: { prescriberNumber: '7033149' } }} standalone={false} />);
    const presNo = screen.getByLabelText(/prescriber number/i);
    expect(presNo.value).toBe('7033149');
  });

  test("Provider data input updates state and therefore it's own value when user types in input", () => {
    render(<ProviderForm existingData={{}} standalone={false} />);
    const presNo = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(presNo, { target: { value: '0123456' } })
    expect(presNo.value).toBe('0123456');
  });
});

describe('Form submit testing', () => {
  // Form submission tests here
});

describe('Macro component tests', () => {
  test('Submit button not visible in integrated form', () => {
    render(<ProviderForm existingData={{}} standalone={false} />);
    const btn = screen.queryByRole('button', { name: 'Save' });
    expect(btn).not.toBeInTheDocument();
  });

  test('Submit button visible in standalone form', () => {
    render(<ProviderForm existingData={{}} standalone={true} />);
    const btn = screen.getByRole('button', { name: 'Save' });
    expect(btn).toBeInTheDocument();
  });
})