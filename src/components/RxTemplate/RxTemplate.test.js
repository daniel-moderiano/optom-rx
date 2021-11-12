import { render, screen, fireEvent } from "@testing-library/react";
import RxTemplate from './RxTemplate';

const dataMobile = {
  "drugData": {
      "activeIngredient":"latanoprost 0.005% eye drops, 2.5 mL",
      "brandName":"Xalatan",
      "quantity":"1",
      "repeats":"4",
      "dosage":"Once nightly both eyes",
      "itemCode":"5552F"
  },
    "patientData": {
      "fullName":"Daniel Moderiano",
      "streetAddress":"6 Old Tawny Close",
      "subpremise":"",
      "suburb":"Wynn Vale",
      "postcode":"5127",
      "state":"SA",
      "medicareNumber":"5151515151",
      "medicareRefNumber":"3"
  },
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
      "phoneNumber":"0427779650",
      "prescriberNumber":"7033149"
  }
};

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

const today = new Date();

describe('Data formatting tests', () => {
  test('Correctly formats mobile numbers', () => {
    render(<RxTemplate data={dataMobile} date={today}/>);
    const phoneNumber = screen.getByTestId(/phone/i);
    expect(phoneNumber.textContent).toBe('Phone: 0427 779 650');
  });

  test('Correctly formats landline numbers', () => {
    render(<RxTemplate data={dataLandline} date={today}/>);
    const phoneNumber = screen.getByTestId(/phone/i);
    expect(phoneNumber.textContent).toBe('Phone: (08) 8234 5678');
  });

  test('Correctly formats six digit business numbers', () => {
    render(<RxTemplate data={dataBusinessSix} date={today}/>);
    const phoneNumber = screen.getByTestId(/phone/i);
    expect(phoneNumber.textContent).toBe('Phone: 13 13 45');
  });

  test('Correctly formats 10 digit business numbers', () => {
    render(<RxTemplate data={dataBusinessTen} date={today}/>);
    const phoneNumber = screen.getByTestId(/phone/i);
    expect(phoneNumber.textContent).toBe('Phone: 1300 667 667');
  });



});