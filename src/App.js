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

  const AuDate = new Date().toLocaleString("en-AU", { timeZone: "Australia/Adelaide" }).substring(0, 10);

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

  const dummyData = {
    "drugData": {
        activeIngredient: "latanoprost 0.005% eye drops, 5 mL",
        "brandName":"Xalatan",
        "quantity":"1",
        "repeats":"4",
        "dosage":"Once nightly both eyes",
        "itemCode":"5552F"
    },
      "patientData": {
        "fullName":"Daniel Moderiano",
        "streetAddress":"6 Carragarmungee Estate Long Road Name",
        "subpremise":"Unit 12",
        "suburb":"Port Bonython",
        "postcode":"5127",
        "state":"SA",
        "medicareNumber":"5151515151",
        "medicareRefNumber":"3"
    },
      "providerData": {
        "prefix": true,
        "fullName":"Sarah Smoker",
        "qualifications":"BMedSc(VisSc), MOpt",
        "practiceName":"OPSM",
        "streetAddress":"976 Carragarmungee Estate Long Road Name",
        "subpremise":"Shop 112, Westfield Tea Tree Plaza",
        "suburb":"Modbury",
        "postcode":"5092",
        "state":"SA",
        "phoneNumber":"0882345678",
        "prescriberNumber":"7033149"
    },
      "miscData": {
        substitutePermitted: true,   
        brandOnly: false, 
        includeBrand: true,    
        pbsRx: true,  
        authRxNumber: '',   
        date: '', 
        authRequired: false,
        authCode: '7979',
      }
  }

  return (
    <div className="App">
      <RxTemplate data={dummyData} date={AuDate}/>
      {/* <GlobalStyles />
      <Header /> */}
      {/* Note prescriptions must contain date of issue, and prescriber signature */}
      <main>
        <section className="rx-form">
          <RxForm handleSubmit={handleSubmit}/>
        </section>
      </main>
      <footer className="footer"></footer>
    </div>
    
    
  )
}

export default App;
