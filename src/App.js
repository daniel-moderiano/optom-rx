/*global google*/ // Used to ignore the breaking 'google isn't defined' error
import Header from "./components/Header/Header";
import GlobalStyles from "./components/utils/globalStyles";
import RxForm from './components/RxForm/RxForm';
import RxTemplate from './components/RxTemplate/RxTemplate'
import Modal from "./components/Modal/Modal";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router";
import About from './components/About/About'
import './App.css';

const App = () => {
  const [data, setData] = useState({
    drugData: {},
    patientData: {},
    providerData: {},
    miscData: {},
  });

  const [showModal, setShowModal] = useState(false);
  const [googleLoaded, setGoogleLoaded] = useState(false);

  useEffect(() => {
    // Check for the existence of the google maps API to judge whether it has loaded at any given time. Used where the onload script event won't re-fire (i.e. any other point from initial load)
    if (typeof google === 'undefined') {
      if (googleLoaded) {
        setGoogleLoaded(googleLoaded => !googleLoaded);
      }
    } else {
      if (!googleLoaded) {
        setGoogleLoaded(googleLoaded => !googleLoaded);
      }
    }

    // Check for an exisitng API script on the page to avoid duplicating
    let googleScript = document.querySelector('#google-script')

    if (!googleScript) {
      // First create and append Google Places API script
      googleScript = document.createElement('script');
      googleScript.id = 'google-script';

      // This process.env system for hiding an API key is COMPLETELY INSECURE for a deployed build. This is purely to hide on Github. In the future, this should be secured on backend
      googleScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`;
      googleScript.async = true;
      window.document.body.appendChild(googleScript);
    }

    // Used to listen for the initial load only
    googleScript.addEventListener('load', () => {
      console.log('Initial load');
      if (!googleLoaded) {
        setGoogleLoaded(googleLoaded => !googleLoaded);
      }
    });
    
  }, [googleLoaded])

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

    // Show template Rx on form submission
    if (!showModal) {
      setShowModal(showTemplate => !showTemplate);
    }

    console.log(data);
  }

  // const dummyData = {
  //   "drugData": {
  //       activeIngredient: "latanoprost 0.005% eye drops, 5 mL",
  //       "brandName":"Xalatan",
  //       "quantity":"1",
  //       "repeats":"4",
  //       "dosage":"Once nightly both eyes",
  //       "itemCode":"5552F"
  //   },
  //     "patientData": {
  //       "fullName":"Daniel Moderiano",
  //       "streetAddress":"6 Carragarmungee Estate Long Road Name",
  //       "subpremise":"Unit 12",
  //       "suburb":"Port Bonython",
  //       "postcode":"5127",
  //       "state":"SA",
  //       "medicareNumber":"5151515151",
  //       "medicareRefNumber":"3"
  //   },
  //     "providerData": {
  //       "prefix": true,
  //       "fullName":"Sarah Smoker",
  //       "qualifications":"BMedSc(VisSc), MOpt",
  //       "practiceName":"OPSM",
  //       "streetAddress":"111 West Lakes Boulevard",
  //       "subpremise":"Shop 218",
  //       "suburb":"Modbury",
  //       "postcode":"5092",
  //       "state":"SA",
  //       "phoneNumber":"0882345678",
  //       "prescriberNumber":"7033149"
  //   },
  //     "miscData": {
  //       substitutePermitted: false,   
  //       brandOnly: false, 
  //       includeBrand: true,    
  //       pbsRx: true,  
  //       authRxNumber: '',   
  //       date: '', 
  //       authRequired: true,
  //       authCode: '7979',
  //     }
  // }

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      {/* Note prescriptions must contain date of issue, and prescriber signature */}
      <main className="main">
        {/* {googleLoaded && <RxForm handleSubmit={handleSubmit}/>} */}
        <Switch>
          {googleLoaded && <Route exact path="/" render={() => <RxForm handleSubmit={handleSubmit}/>}/>}
          <Route exact path="/about" render={() => <About />}/>
        </Switch>
      
      </main>
      <footer className="footer"></footer>
      {showModal && <Modal><RxTemplate data={data} /></Modal>}

    </div>
    
    
  )
}

export default App;
