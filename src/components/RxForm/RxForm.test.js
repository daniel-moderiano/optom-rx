import { render, screen, fireEvent } from "@testing-library/react";
import RxForm from "./RxForm";
import { AuthContext } from '../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

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
    authRequired: false,
    verified: true,
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

const dataPbs = {
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
    authRequired: true,
    verified: true,
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
  pbsData: {
    "fee-code": "RP",
    "mp2p": "0.00",
    "pack-size": "1",
    "brand-name": [
        "Hylo-Fresh"
    ],
    "indications": {
        "misc-res-code": "0",
        "description": "Severe dry eye syndrome Clinical criteria: * Patient must be sensitive to preservatives in multi-dose eye drops.",
        "date-req": "N",
        "text-req": "N"
    },
    "atc": "S01XA20",
    "item-code": "2184Y",
    "increase-code": "2",
    "cautions": [],
    "ldpmq": "0.00",
    "cdpmq": "34.55",
    "markup-band": "C",
    "atc-level-code": "",
    "bioequivalence": "",
    "notes": [
        "The in-use shelf life of Hylo-Fresh and Hylo-Forte is 6 months from the date of opening."
    ],
    "lp2p": "0.00",
    "note-ids": [
        "7873"
    ],
    "streamline-code": "4105",
    "program-code": "GE",
    "therapeutic-premium": "0.00",
    "indication-id": "4105",
    "dangerous-drug-code": "",
    "repeats": "5",
    "atc-print-option": "1",
    "mrvsn": "35.85",
    "brand-premium": "0.00",
    "mp-pt": "hyaluronate sodium",
    "restriction-flag": "A",
    "manufacturer-code": "AE",
    "has-caution": "",
    "tpuu-or-mpp-pt": "hyaluronate sodium 0.1% eye drops, 10 mL",
    "mdpmq": "0.00",
    "caution-ids": [],
    "cp2p": "22.47",
    "mq": "1",
    "atc-type": "P",
    "has-note": "N",
    "caution_ids": []
  }
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
  pbsData: null,
}


describe('Drug input tests', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ user: { uid: '1' } }}>
          <RxForm existingData={{}}/>
        </AuthContext.Provider>
      </BrowserRouter>
      
    );
  })
  
  test('Drug input initialises with empty string value', () => {
    const drugInput = screen.getByLabelText(/active ingredient/i);
    expect(drugInput.value).toBe('');
  });

  test("Drug input updates state and therefore it's own value when user types in input", () => {
    const drugInput = screen.getByLabelText(/active ingredient/i);
    fireEvent.change(drugInput, { target: { value: 'maxidex' } })
    expect(drugInput.value).toBe('maxidex');
  });

});

describe('Patient data tests', () => {
  test('Patient data input initialises with existing data', () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={{ patientData: { medicareNumber: '5151515151' } }}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );  
    const medicare = screen.getByLabelText(/medicare number/i);
    expect(medicare.value).toBe('5151515151');
  });

  test("Patient data input updates state and therefore it's own value when user types in input", () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={{}}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );  
    const firstNameInput = screen.getByLabelText(/medicare number/i);
    fireEvent.change(firstNameInput, { target: { value: '01234567' } })
    expect(firstNameInput.value).toBe('01234567');
  });
});

describe('Provider data input tests', () => {
  test('Provider data input initialises with existing data', () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={{ providerData: { prescriberNumber: '7033149' } }}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );  
    const editBtn = screen.getByText(/edit selected provider/i);
    fireEvent.click(editBtn);
    const presNo = screen.getByLabelText(/prescriber number/i);
    expect(presNo.value).toBe('7033149');
  });

  test("Provider data input updates state and therefore it's own value when user types in input", () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={{}}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );  
    const editBtn = screen.getByText(/edit selected provider/i);
    fireEvent.click(editBtn);
    const firstNameInput = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(firstNameInput, { target: { value: '01234567' } })
    expect(firstNameInput.value).toBe('01234567');
  });
});

describe('Parameter data tests', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={{}}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
  })

  test('Parameter data input initialises with existing data', () => {
    const firstNameInput = screen.getByLabelText(/quantity/i);
    expect(firstNameInput.value).toBe('');
  });

  test("Parameter data input updates state and therefore it's own value when user types in input", () => {
    const firstNameInput = screen.getByLabelText(/quantity/i);
    fireEvent.change(firstNameInput, { target: { value: '3' } })
    expect(firstNameInput.value).toBe('3');
  });
});

describe('Inline data validation', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={{}}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
    // Must ensure the provider form is visible with this button press
    const editBtn = screen.getByText(/edit selected provider/i);
    fireEvent.click(editBtn);
  })

  test('IRN rejects values > 1 digit long', () => {
    const IRNInput = screen.getByLabelText(/irn/i);
    fireEvent.change(IRNInput, { target: { value: '35' } });
    fireEvent.focusOut(IRNInput);
    const alert = screen.getByText(/IRN must be a single digit between 1 through 9/i);
    expect(alert).toBeInTheDocument();
  });

  test('IRN rejects empty input', () => {
    const IRNInput = screen.getByLabelText(/irn/i);
    fireEvent.change(IRNInput, { target: { value: '' } });
    fireEvent.focusOut(IRNInput);
    const alert = screen.getByText(/IRN must be a single digit between 1 through 9/i);
    expect(alert).toBeInTheDocument();
  });

  test("IRN field accepts single digit from 0-9 inclusive", () => {
    const IRNInput = screen.getByLabelText(/irn/i);
    fireEvent.change(IRNInput, { target: { value: '2' } });
    fireEvent.focusOut(IRNInput);
    const alert = screen.queryByText(/IRN must be a single digit between 1 through 9/i);
    expect(alert).not.toBeInTheDocument();
  });

  test('Medicare number input rejects empty value', () => {
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).toBeInTheDocument();
  });

  test('Medicare number input rejects number < 10 digits', () => {
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '12' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).toBeInTheDocument();
  });

  test("Medicare number input rejects > 10 digits", () => {
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '111111112222222' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).toBeInTheDocument();
  });

  test("Medicare number input rejects non-digits", () => {
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '5152677a01' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).toBeInTheDocument();
  });

  test("Medicare number input accepts 10 digit valid number", () => {
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '1234567890' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Medicare number must be exactly 10 digits long/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Medicare number input rejects zero as leading digit", () => {
    const input = screen.getByLabelText(/medicare number/i);
    fireEvent.change(input, { target: { value: '0234567890' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Medicare number must not start with zero/i);
    expect(alert).toBeInTheDocument();
  });

  test("Prescriber number input rejects non-digits", () => {
    const input = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(input, { target: { value: '3445a67' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Prescriber number must be a seven digit number/i);
    expect(alert).toBeInTheDocument();
  });

  test("Prescriber number input rejects single digit only", () => {
    const input = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(input, { target: { value: '2' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Prescriber number must be a seven digit number/i);
    expect(alert).toBeInTheDocument();
  });
  
  test("Prescriber number input accepts 7 digit number", () => {
    const input = screen.getByLabelText(/prescriber number/i);
    fireEvent.change(input, { target: { value: '1234567' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Prescriber number must be a seven digit number/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Phone number input validates mobile number", () => {
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '0400000000' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Please enter a valid Australian phone number/i);
    expect(alert).not.toBeInTheDocument();
  });
  
  test("Phone number input validates state-specific landline number", () => {
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '0212344321' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Please enter a valid Australian phone number/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Phone number input validates Aus wide landline number", () => {
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '1300000000' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Please provide a valid Australian phone number/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Phone number input validates Aus wide 13 number (6 digit)", () => {
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '131316' } });
    fireEvent.focusOut(input);
    const alert = screen.queryByText(/Please provide a valid Australian phone number/i);
    expect(alert).not.toBeInTheDocument();
  });

  test("Phone number input rejects numbers < 10 digits", () => {
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '021234432' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08/i);
    expect(alert).toBeInTheDocument();
  });

  test("Phone number input rejects numbers > 10 digits", () => {
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '23133442345356' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08/i);
    expect(alert).toBeInTheDocument();
  });

  test("Phone number input rejects numbers with non-digits", () => {
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '2345ac356' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08/i);
    expect(alert).toBeInTheDocument();
  });

  test("Phone number input rejects numbers starting with neither 0 or 1", () => {
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '2345234523' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian phone numbers contain 10 digits and begin with 02, 03, 04, 07 or 08/i);
    expect(alert).toBeInTheDocument();
  });

  test("Phone number input rejects invalid 13 numbers", () => {
    const input = screen.getByLabelText(/phone number/i);
    fireEvent.change(input, { target: { value: '1324432112' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Australian business numbers are either 6 digits and begin with 13, or 10 digits and begin with 1300/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug name input rejects empty value', () => {
    const input = screen.getByLabelText(/active ingredient/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug repeats input rejects empty value', () => {
    const input = screen.getByLabelText(/repeats/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug repeats input rejects invalid number value', () => {
    const input = screen.getByLabelText(/repeats/i);
    fireEvent.change(input, { target: { value: '03' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/Please enter a valid number \(no leading zeroes\)/i);
    expect(alert).toBeInTheDocument();
  });

  test('Drug dosage input rejects empty value', () => {
    const input = screen.getByLabelText(/dosage/i);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });
});

describe('Form validation on submit', () => {
  test('Identifies invalid field on submission attempt (provider section)', () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={data}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
    const editBtn = screen.getByText(/edit selected provider/i);
    fireEvent.click(editBtn);
    const input = screen.getByLabelText(/prescriber number/i);
    const submit = screen.getByRole('button', { name: 'Generate prescription' });
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(submit);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

  test('Identifies invalid field on submission attempt (patient section)', () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={data}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
    const editBtn = screen.getByText(/edit selected provider/i);
    fireEvent.click(editBtn);
    const input = screen.getByLabelText(/medicare number/i);
    const submit = screen.getByRole('button', { name: 'Generate prescription' });
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(submit);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

  test('Identifies invalid field on submission attempt (medication section)', () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={data}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
    const editBtn = screen.getByText(/edit selected provider/i);
    fireEvent.click(editBtn);
    const input = screen.getByLabelText(/active ingredient/i);
    const submit = screen.getByRole('button', { name: 'Generate prescription' });
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(submit);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

  test('Identifies invalid field on submission attempt (PBS and other section)', () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={dataNoDate}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
    const editBtn = screen.getByText(/edit selected provider/i);
    fireEvent.click(editBtn);
    const submit = screen.getByRole('button', { name: 'Generate prescription' });
    fireEvent.click(submit);
    const alert = screen.getByText(/This field cannot be left blank/i);
    expect(alert).toBeInTheDocument();
  });

  test('Valid form does not generate any error alerts on submit', () => {
    const handleSubmit = jest.fn();
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={data} handleSubmit={handleSubmit}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
    const editBtn = screen.getByText(/edit selected provider/i);
    fireEvent.click(editBtn);
    const submit = screen.getByRole('button', { name: 'Generate prescription' });
    fireEvent.click(submit);
    const alert = screen.queryByText(/This field cannot be left blank/i);
    expect(alert).not.toBeInTheDocument();
  });

  test('Valid form calls handleSubmit on submit', () => {
    const handleSubmit = jest.fn();
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={data} handleSubmit={handleSubmit}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
    const editBtn = screen.getByText(/edit selected provider/i);
    fireEvent.click(editBtn);
    const submit = screen.getByRole('button', { name: 'Generate prescription' });
    fireEvent.click(submit);
    expect(handleSubmit).toBeCalled();
  });
});

describe('Provider select tests', () => {
  // Instead of the preset AuthContextProvider, use AuthContext export, then recreate as provider by appending '.Proivider'. This allows us to inject manual values for testing
  beforeEach(() => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={data}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
  })

  test('Provider select element initialises with "---Select provider--- option"', () => {
    const input = screen.getByLabelText(/select provider/i);
    expect(input.value).toBe('---Select provider---');
  });
});

describe('Authority Rx No. and script No. display tests', () => {

  test('Script number is always present on initialised Rx form', () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={data}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
    
    const scriptNo = screen.getByTestId(/scriptNo/i);
    expect(scriptNo).toBeInTheDocument();
  });

  test('Auth Rx number is not included on non-authority Rx form', () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={data}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
    const authRxNo = screen.queryByTestId(/authRxNo/i);
    expect(authRxNo).not.toBeInTheDocument();
  });
});

describe('PBS data tests', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={dataPbs}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
  })

  test('Auth Rx number is visible on auth required Rx form', () => {
    const authRxNo = screen.getByTestId(/authRxNo/i);
    expect(authRxNo).toBeInTheDocument();
  });

  test('PBS data sets quantity alerts', () => {
    const quantityAlert = screen.getByText(/Maximum allowed quantity under the PBS is 1/i);
    expect(quantityAlert).toBeInTheDocument();
  });

  test('PBS data sets repeats alerts', () => {
    const repeatsAlert = screen.getByText(/Maximum allowed repeats under the PBS is 5/i);
    expect(repeatsAlert).toBeInTheDocument();
  });

  test('PBS data sets authority/restriction message', () => {
    const resAlert = screen.getByText(/This is an Authority Required item/i);
    expect(resAlert).toBeInTheDocument();
  });

  test('PBS data sets indications where appropriate', () => {
    const indication = screen.getByText(/Severe dry eye syndrome/i);
    expect(indication).toBeInTheDocument();
  });

  test('PBS data sets streamline code if available', () => { 
    const authCodeInput = screen.getByLabelText(/Authority code \(where applicable\)/i);
    expect(authCodeInput.value).toBe('4105');
  });

  test('PBS data sets auth code message', () => {
    const authMsg = screen.getByText(/This medication is available using the streamline code above/i);
    expect(authMsg).toBeInTheDocument();
  });
});

describe('Empty PBS and non-PBS data tests', () => {
  test("Empty PBS notifies informs user the information isn't verified yet", () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={dataNoDate}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
    const pbsMsg = screen.getByText(/Unable to verify drug information on PBS, please select a drug from the dropdown list/i);
    expect(pbsMsg).toBeInTheDocument();
  });

  test("Empty PBS but verified drug informs user the drug is not on PBS", () => {
    render(
      <BrowserRouter>
      <AuthContext.Provider value={{ user: { uid: '1' } }}>
        <RxForm existingData={data}/>
      </AuthContext.Provider>
      </BrowserRouter>
    );
    const pbsMsg = screen.getByText(/This item is not on the PBS/i);
    expect(pbsMsg).toBeInTheDocument();
  });
});
