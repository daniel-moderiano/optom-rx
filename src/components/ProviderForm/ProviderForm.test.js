import ProviderForm from './ProviderForm';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthContextProvider } from '../../context/AuthContext';

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
  test('Provider data input initialises with blank values', () => {
    render(
      <AuthContextProvider>
        <ProviderForm standalone={true} />
      </AuthContextProvider>  
    );
    const presNo = screen.getByLabelText(/prescriber number/i);
    expect(presNo.value).toBe('');
  });

  test("Provider data input updates state and therefore it's own value when user types in input", () => {
    render(
      <AuthContextProvider>
        <ProviderForm standalone={true} />
      </AuthContextProvider>  
    );
    const presNo = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(presNo, { target: { value: '0123456' } })
    expect(presNo.value).toBe('0123456');
  });
});

describe('Form submit testing (standalone)', () => {
  // Form submission tests here
  test('Identifies invalid field on submission attempt (provider section)', () => {
    render(
      <AuthContextProvider>
        <ProviderForm standalone={true} />
      </AuthContextProvider>  
    );
    const input = screen.getByLabelText(/prescriber number/i);
    const submit = screen.getByRole('button', { name: 'Save' });
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(submit);
    const alert = screen.queryAllByText(/This field cannot be left blank/i);
    expect(alert.length).toBeGreaterThan(0);
  });

  test('Valid form does not generate any error alerts on submit', () => {
    render(
      <AuthContextProvider>
        <ProviderForm standalone={true} />
      </AuthContextProvider>  
    );

    const fullName = screen.getByLabelText(/full name/i)
    const street = screen.getByLabelText(/street address/i)
    const suburb = screen.getByLabelText(/suburb/i)
    const postcode = screen.getByLabelText(/postcode/i)
    const state = screen.getByLabelText(/state/i)
    const phone = screen.getByLabelText(/phone number/i)
    const prescriber = screen.getByLabelText(/prescriber number/i)

    fireEvent.change(fullName, { target: { value: 'Daniel' } });
    fireEvent.change(street, { target: { value: 'Port Road' } });
    fireEvent.change(suburb, { target: { value: 'Wynn Vale' } });
    fireEvent.change(postcode, { target: { value: '5555' } });
    fireEvent.change(state, { target: { value: 'SA' } });
    fireEvent.change(phone, { target: { value: '0427779730' } });
    fireEvent.change(prescriber, { target: { value: '1234567' } });

    const submit = screen.getByRole('button', { name: 'Save' });
    fireEvent.click(submit);

    const alert = screen.queryByText(/This field cannot be left blank/i);
    expect(alert).not.toBeInTheDocument();
  });


});

