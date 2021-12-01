import { render, screen, fireEvent } from "@testing-library/react";
import RxForm from "./RxForm";

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

const data = {
  drugData: {
    activeIngredient: "latanoprost 0.005% eye drops, 5 mL",
    "brandName":"Xalatan",
    "quantity":"1",
    "repeats":"4",
    "dosage":"Once nightly both eyes",
    "itemCode":"5552F",
    substitutePermitted: true,
    brandOnly: false,    
    includeBrand: true,   
    pbsRx: true,    
    compounded: false,
  },
  patientData: {
    "fullName":"Daniel Moderiano",
    "streetAddress":"6 Old Tawny Close",
    "subpremise":"",
    "suburb":"Wynn Vale",
    "postcode":"5127",
    "state":"SA",
    "medicareNumber":"5151515151",
    "medicareRefNumber":"3"
  },
  providerData: {
    "prefix":true,
    "fullName":"Sarah Smoker",
    "qualifications":"BMedSc(VisSc), MOpt",
    "practiceName":"OPSM",
    "streetAddress":"976 North East Road",
    "subpremise":"Shop 112, Westfield Tea Tree Plaza",
    "suburb":"Modbury",
    "postcode":"5092",
    "state":"SA",
    "phoneNumber":"0427779650",
    "prescriberNumber":"7033149"
  },
  miscData: {
    authRxNumber: '',   
    date: '2021-10-10',
    authCode: '7979',
    scriptID: '',
  },
}

const dataNoDate = {
  drugData: {
    activeIngredient: "latanoprost 0.005% eye drops, 5 mL",
    "brandName":"Xalatan",
    "quantity":"1",
    "repeats":"4",
    "dosage":"Once nightly both eyes",
    "itemCode":"5552F",
    substitutePermitted: true,
    brandOnly: false,    
    includeBrand: true,   
    pbsRx: true,    
    compounded: false,
  },
  patientData: {
    "fullName":"Daniel Moderiano",
    "streetAddress":"6 Old Tawny Close",
    "subpremise":"",
    "suburb":"Wynn Vale",
    "postcode":"5127",
    "state":"SA",
    "medicareNumber":"5151515151",
    "medicareRefNumber":"3"
  },
  providerData: {
    "prefix":true,
    "fullName":"Sarah Smoker",
    "qualifications":"BMedSc(VisSc), MOpt",
    "practiceName":"OPSM",
    "streetAddress":"976 North East Road",
    "subpremise":"Shop 112, Westfield Tea Tree Plaza",
    "suburb":"Modbury",
    "postcode":"5092",
    "state":"SA",
    "phoneNumber":"0427779650",
    "prescriberNumber":"7033149"
  },
  miscData: {
    authRxNumber: '',   
    date: '', 
    authCode: '7979',
    scriptID: '',
  },
}

describe('Drug input tests', () => {
  test('Drug input initialises with empty string value', () => {
    render(<RxForm existingData={{}}/>);
    const drugInput = screen.getByLabelText(/active ingredient/i);
    expect(drugInput.value).toBe('');
  });

  test("Drug input updates state and therefore it's own value when user types in input", () => {
    render(<RxForm existingData={{}}/>);
    const drugInput = screen.getByLabelText(/active ingredient/i);
    fireEvent.change(drugInput, { target: { value: 'maxidex' } })
    expect(drugInput.value).toBe('maxidex');
  });

});

describe('Patient data tests', () => {
  test('Patient data input initialises with empty string value', () => {
    render(<RxForm existingData={{}}/>);
    const firstNameInput = screen.getByLabelText(/medicare number/i);
    expect(firstNameInput.value).toBe('');
  });

  test("Patient data input updates state and therefore it's own value when user types in input", () => {
    render(<RxForm existingData={{}}/>);
    const firstNameInput = screen.getByLabelText(/medicare number/i);
    fireEvent.change(firstNameInput, { target: { value: '01234567' } })
    expect(firstNameInput.value).toBe('01234567');
  });
});

describe('Provider data tests', () => {
  test('Provider data input initialises with empty string value', () => {
    render(<RxForm existingData={{}}/>);
    const firstNameInput = screen.getByLabelText(/prescriber number/i);
    expect(firstNameInput.value).toBe('');
  });

  test("Provider data input updates state and therefore it's own value when user types in input", () => {
    render(<RxForm existingData={{}}/>);
    const firstNameInput = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(firstNameInput, { target: { value: '01234567' } })
    expect(firstNameInput.value).toBe('01234567');
  });
});

describe('Parameter data tests', () => {
  test('Parameter data input initialises with empty string value', () => {
    render(<RxForm existingData={{}}/>);
    const firstNameInput = screen.getByLabelText(/quantity/i);
    expect(firstNameInput.value).toBe('');
  });

  test("Parameter data input updates state and therefore it's own value when user types in input", () => {
    render(<RxForm existingData={{}}/>);
    const firstNameInput = screen.getByLabelText(/quantity/i);
    fireEvent.change(firstNameInput, { target: { value: '3' } })
    expect(firstNameInput.value).toBe('3');
  });
});

describe('Patient data validation', () => {
  test('IRN rejects values > 1 digit long', () => {
    render(<RxForm existingData={{}}/>);
    const IRNInput = screen.getByLabelText(/irn/i);
    fireEvent.change(IRNInput, { target: { value: '35' } });
    fireEvent.focusOut(IRNInput);
    const alert = screen.getByText(/IRN must be a single digit between 1 through 9/i);
    expect(alert).toBeInTheDocument();
  });

  test('IRN rejects empty input', () => {
    render(<RxForm existingData={{}}/>);
    const IRNInput = screen.getByLabelText(/irn/i);
    fireEvent.change(IRNInput, { target: { value: '' } });
    fireEvent.focusOut(IRNInput);
    const alert = screen.getByText(/IRN must be a single digit between 1 through 9/i);
    expect(alert).toBeInTheDocument();
  });

  test("IRN field accepts single digit from 0-9 inclusive", () => {
    render(<RxForm existingData={{}}/>);
    const IRNInput = screen.getByLabelText(/irn/i);
    fireEvent.change(IRNInput, { target: { value: '2' } });
    fireEvent.focusOut(IRNInput);
    const alert = screen.queryByText(/IRN must be a single digit between 1 through 9/i);
    expect(alert).not.toBeInTheDocument();
  });

  test('Medicare number input rejects empty value', () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).toBeInTheDocument();
  });

  test('Medicare number input rejects number < 10 digits', () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '12' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).toBeInTheDocument();
  });

  test("Medicare number input rejects > 10 digits", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '111111112222222' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).toBeInTheDocument();
  });

  test("Medicare number input rejects non-digits", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '5152677a01' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).toBeInTheDocument();
  });

  test("Medicare number input accepts 10 digit valid number", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '1234567890' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Medicare number input rejects zero as leading digit", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '0234567890' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must not start with zero/i);
    expect(alert).toBeInTheDocument();
  });

  test("Prescriber number input rejects non-digits", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(input, { target: { value: '3445a67' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Prescriber number must be a seven digit number/i);
    expect(alert).toBeInTheDocument();
  });

  test("Prescriber number input rejects single digit only", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(input, { target: { value: '2' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Prescriber number must be a seven digit number/i);
    expect(alert).toBeInTheDocument();
  });
  
  test("Prescriber number input accepts 7 digit number", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(input, { target: { value: '1234567' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Prescriber number must be a seven digit number/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Phone number input validates mobile number", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '0400000000' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Please enter a valid Australian phone number/i);
    expect(alert).not.toBeInTheDocument();
  });
  
  test("Phone number input validates state-specific landline number", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '0212344321' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Please enter a valid Australian phone number/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Phone number input validates Aus wide landline number", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '1300000000' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Please provide a valid Australian phone number/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Phone number input validates Aus wide 13 number (6 digit)", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '131316' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Please provide a valid Australian phone number/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Phone number input rejects numbers < 10 digits", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '021234432' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08/i);
    expect(alert).toBeInTheDocument();
  });

  test("Phone number input rejects numbers > 10 digits", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '23133442345356' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08/i);
    expect(alert).toBeInTheDocument();
  });

  test("Phone number input rejects numbers with non-digits", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '2345ac356' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08/i);
    expect(alert).toBeInTheDocument();
  });

  test("Phone number input rejects numbers starting with neither 0 or 1", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '2345234523' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08/i);
    expect(alert).toBeInTheDocument();
  });

  test("Phone number input rejects invalid 13 numbers", () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '1324432112' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian business numbers are either 6 digits and begin with 13, or 10 digits and begin with 1300/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug name input rejects empty value', () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/active ingredient/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug repeats input rejects empty value', () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/repeats/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug repeats input rejects invalid number value', () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/repeats/i);
    fireEvent.change(input, { target: { value: '03' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Please enter a valid number of repeats \(may be zero\)/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug dosage input rejects empty value', () => {
    render(<RxForm existingData={{}}/>);
    const input = screen.getByLabelText(/dosage/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });
});

describe('Form validation on submit', () => {
  test('Identifies invalid field on submission attempt (patient section)', () => {
    render(<RxForm existingData={data}/>);
    const input = screen.getByLabelText(/medicare number/i);
    const submit = screen.getByRole('button', { name: 'Generate prescription' });
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(submit);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

  test('Identifies invalid field on submission attempt (medication section)', () => {
    render(<RxForm existingData={data}/>);
    const input = screen.getByLabelText(/active ingredient/i);
    const submit = screen.getByRole('button', { name: 'Generate prescription' });
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(submit);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

  test('Identifies invalid field on submission attempt (PBS and other section)', () => {
    render(<RxForm existingData={dataNoDate}/>);
    // const input = screen.getByLabelText(/date/i);
    const submit = screen.getByRole('button', { name: 'Generate prescription' });
    fireEvent.click(submit);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

  test('Valid form does not generate any error alerts on submit', () => {
    const handleSubmit = jest.fn();
    render(<RxForm handleSubmit={handleSubmit} existingData={data}/>);
    const submit = screen.getByRole('button', { name: 'Generate prescription' });
    fireEvent.click(submit);
    const alert = screen.queryByText(/This field cannot be left blank/i);
    expect(alert).not.toBeInTheDocument();
  });

  test('Valid form calls handleSubmit on submit', () => {
    const handleSubmit = jest.fn();
    render(<RxForm handleSubmit={handleSubmit} existingData={data}/>);
    const submit = screen.getByRole('button', { name: 'Generate prescription' });
    fireEvent.click(submit);
    expect(handleSubmit).toBeCalled();
  });
});
