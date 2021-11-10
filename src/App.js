// import { Switch, Route } from "react-router";
import Header from "./components/Header/Header";
import GlobalStyles from "./components/utils/globalStyles";
import RxForm from './components/RxForm/RxForm'
import RxTemplate from "./components/RxTemplate/RxTemplate";
import { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [data, setData] = useState({
    drugData: {},
    patientData: {},
    providerData: {},
  });

  const handleSubmit = (drugData, patientData, providerData) => {
    setData((prevData) => ({
      ...prevData,
      drugData: {
        ...drugData
      },
      patientData: {
        ...patientData
      },
      providerData: {
        ...providerData
      },
    }));
  }

  useEffect(() => {
    setData({
      "drugData": {
          "activeIngredient":"latanoprost 0.005% eye drops, 2.5 mL",
          "brandName":"Xalatan",
          "quantity":"1",
          "repeats":"4",
          "dosage":"Once nightly both eyes",
          "itemCode":"5552F"
      },
        "patientData": {
          "fullName":"Sarah Smoker",
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
          "fullName":"Daniel Moderiano",
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
    });
    
  }, [])
  

  return (
    <div className="App">
      <RxTemplate data={data}/>
      {/* <GlobalStyles />
      <Header /> */}
      {/* Note prescriptions must contain date of issue, and prescriber signature */}
      {/* <main>
        <section className="rx-form">
          <RxForm handleSubmit={handleSubmit}/>
        </section>
        <section className="rx-template">
          <RxTemplate data={data}/>
        </section>
      </main>
      <footer className="footer"></footer> */}
    </div>
    
    
  )
}

export default App;
