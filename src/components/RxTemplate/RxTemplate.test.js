import { render, screen } from "@testing-library/react";
import RxTemplate from './RxTemplate';
import ReactRouter from 'react-router';

beforeEach(() => {
  jest.spyOn(console, 'error')
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockImplementation(() => null);
});

afterEach(() => {
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockRestore()
})

const ausDate = new Date().toLocaleString("en-CA", { timeZone: "Australia/Adelaide" }).substring(0, 10);

const dataMobile = {
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
    date: ausDate, 
    authCode: '7979',
    scriptID: '',
  },
}

const dataLandline = {
    ...dataMobile,
    "providerData": {
      "prefix":true,
      "fullName":"Sarah Smoker",
      "qualifications":"BMedSc(VisSc), MOpt",
      "practiceName":"OPSM",
      "streetAddress":"976 North East Road",
      "subpremise":"Shop 112, Westfield Tea Tree Plaza",
      "suburb":"Modbury",
      "postcode":"5092",
      "state":"SA",
      "phoneNumber":"0882345678",
      "prescriberNumber":"7033149"
  }
};

const dataBusinessSix = {
  ...dataMobile,
  "providerData": {
    "prefix":true,
    "fullName":"Sarah Smoker",
    "qualifications":"BMedSc(VisSc), MOpt",
    "practiceName":"OPSM",
    "streetAddress":"976 North East Road",
    "subpremise":"Shop 112, Westfield Tea Tree Plaza",
    "suburb":"Modbury",
    "postcode":"5092",
    "state":"SA",
    "phoneNumber":"131345",
    "prescriberNumber":"7033149"
}
};

const dataBusinessTen = {
  ...dataMobile,
  "providerData": {
    "prefix":true,
    "fullName":"Sarah Smoker",
    "qualifications":"BMedSc(VisSc), MOpt",
    "practiceName":"OPSM",
    "streetAddress":"976 North East Road",
    "subpremise":"Shop 112, Westfield Tea Tree Plaza",
    "suburb":"Modbury",
    "postcode":"5092",
    "state":"SA",
    "phoneNumber":"1300667667",
    "prescriberNumber":"7033149"
}
};

const dataDrug = {
  ...dataMobile,
  "drugData": {
      "activeIngredient":"prednisolone acetate 1% + phenylephrine hydrochloride 0.12% eye drops, 10 mL",
      "brandName":"Prednefrin forte",
      "quantity":"1",
      "repeats":"0",
      "dosage":"4x per day both eyes, for two weeks",
      "itemCode":"5552F",
      substitutePermitted: true,
      brandOnly: false,    
      includeBrand: true,   
      pbsRx: true,    
      compounded: false,
  },
  
};



describe('Data formatting tests (for print template)', () => {

  // Mock the useLocation call in RxTemplate.js, providing the state value since this is all that is used.
  const useLocation = jest.spyOn(ReactRouter, 'useLocation');

  beforeEach(() => {
    // validData must be set to true to display the template correctly
    useLocation.mockReturnValue({ state: { validData: true } })
  })
  
  test('Correctly formats mobile numbers', () => {
    
    render(<RxTemplate data={dataMobile}/>);
    const phoneNumber = screen.getByTestId(/phone/i);
    expect(phoneNumber.textContent).toBe('Phone: 0427 779 650');
  });

  test('Correctly formats landline numbers', () => {
    render(<RxTemplate data={dataLandline}/>);
    const phoneNumber = screen.getByTestId(/phone/i);
    expect(phoneNumber.textContent).toBe('Phone: (08) 8234 5678');
  });

  test('Correctly formats six digit business numbers', () => {
    render(<RxTemplate data={dataBusinessSix}/>);
    const phoneNumber = screen.getByTestId(/phone/i);
    expect(phoneNumber.textContent).toBe('Phone: 13 13 45');
  });

  test('Correctly formats 10 digit business numbers', () => {
    render(<RxTemplate data={dataBusinessTen}/>);
    const phoneNumber = screen.getByTestId(/phone/i);
    expect(phoneNumber.textContent).toBe('Phone: 1300 667 667');
  });

  test('Correctly formats drug name', () => {
    render(<RxTemplate data={dataDrug}/>);
    const drugName = screen.getByTestId(/drugName/i);
    expect(drugName.textContent).toBe('Prednisolone acetate 1% + phenylephrine hydrochloride 0.12% (Prednefrin forte) eye drops, 10 mL');
  });


});