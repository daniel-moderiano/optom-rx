// import { Switch, Route } from "react-router";
import Header from "./components/Header/Header";
import GlobalStyles from "./components/utils/globalStyles";
import RxForm from './components/RxForm/RxForm'
import RxTemplate from "./components/RxTemplate/RxTemplate";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import './App.css';

const App = () => {
  const [data, setData] = useState({
    drugData: {},
    patientData: {},
    providerData: {},
    miscData: {},
  });

  const handleSubmit = (drugData, patientData, providerData, miscData) => {
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
      miscData: {
        ...miscData
      },
    }));
    console.log(data);
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
        "streetAddress":"111 West Lakes Boulevard",
        "subpremise":"Shop 218",
        "suburb":"Modbury",
        "postcode":"5092",
        "state":"SA",
        "phoneNumber":"0882345678",
        "prescriberNumber":"7033149"
    },
      "miscData": {
        substitutePermitted: false,   
        brandOnly: false, 
        includeBrand: true,    
        pbsRx: true,  
        authRxNumber: '',   
        date: '', 
        authRequired: true,
        authCode: '7979',
      }
  }

  return (
    <div className="App">
      {/* <RxTemplate data={dummyData} date={AuDate}/> */}
      <GlobalStyles />
      <Header />
      {/* Note prescriptions must contain date of issue, and prescriber signature */}
      <main>
        {/* <section className="rx-form">
          <RxForm handleSubmit={handleSubmit}/>
        </section> */}

        <Switch>
          <Route exact path="/" render={() => <RxForm handleSubmit={handleSubmit}/>}/>
          <Route exact path="/template" render={() => <RxTemplate data={dummyData}/>}/>
        </Switch>
      </main>
      <footer className="footer"></footer>
    </div>
    
    
  )
}

export default App;
