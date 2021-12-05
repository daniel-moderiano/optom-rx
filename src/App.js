/*global google*/ // Used to ignore the breaking 'google isn't defined' error
import Header from "./components/Header/Header";
import GlobalStyles from "./components/utils/globalStyles";
import RxForm from './components/RxForm/RxForm';
import RxTemplate from './components/RxTemplate/RxTemplate'
import { useState, useEffect } from "react";
import { Route, useNavigate, Routes, Navigate } from "react-router";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import { useAuthContext } from './hooks/useAuthContext';
import Home from './components/Home/Home';
import Providers from "./components/Providers/Providers";
import './App.css';
import GuestRxForm from "./components/GuestRxForm/GuestRxForm";

// ! React Router v6 has been released and makes breaking changes. Look at updating this.

const App = () => {
  // Can user the user state to conditionally render or redirect routes (logged in vs out for example)
  const { user, authIsReady } = useAuthContext();

  const ausDate = new Date().toLocaleString("en-CA", { timeZone: "Australia/Adelaide" }).substring(0, 10);
  
  const [data, setData] = useState({
    drugData: {
      activeIngredient: "latanoprost 0.005% eye drops, 5 mL",
      "brandName":"Xalatan",
      "quantity":"1",
      "repeats":"4",
      "dosage":"Once nightly both eyes",
      "itemCode":"5552F",
      substitutePermitted: true,    // Indicates if brand substitution is permitted
      brandOnly: false,    // Indicates whether the Rx should list brand name only (only permitted for certain drugs)
      includeBrand: true,    // Indicates whether brand name should be included on the Rx
      pbsRx: true,    // Indicates whether this is a PBS prescription 
      compounded: false,
      authRequired: false,  // Indicates whether authority is required for this medication
    },
    patientData: {
      "fullName":"Daniel Moderiano",
      "streetAddress":"6 Carragarmungee Estate Long Road Name",
      "subpremise":"Unit 12",
      "suburb":"Port Bonython",
      "postcode":"5127",
      "state":"SA",
      "medicareNumber":"5151515151",
      "medicareRefNumber":"3"
    },
    providerData: {},
    miscData: {
      authRxNumber: '',   
      date: ausDate, 
      authCode: '7979',
      scriptID: '',
    },
  });

  let navigate = useNavigate();

  const [googleLoaded, setGoogleLoaded] = useState(false);

  // Handle google places API loading and script HTML appendment
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

    // New React Router v6 syntax using navigate. State is passed in a similar way and accessed with useLocation
    navigate('/template', { state: { validData: true } });
  }

  return (
    <div className="App">
      {authIsReady && (<>
        <GlobalStyles />
        <Header />
        {/* Note prescriptions must contain date of issue, and prescriber signature */}
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/form" element={
              <>
              {user && <RxForm handleSubmit={handleSubmit} googleLoaded={googleLoaded} existingData={data}/>}
              {!user && <GuestRxForm handleSubmit={handleSubmit} googleLoaded={googleLoaded} existingData={data}/>}
              </>
            }/>

            <Route path="/signup" element={
              <>
              {!user && <Signup />}
              {user && <Navigate to="/" />}
              </>
            }/>
              
            <Route path="/login" element={
              <>
              {!user && <Login />}
              {user && <Navigate to="/" />}
              </>
            }/>

            <Route path="/template" element={<RxTemplate data={data} />}/>

            <Route path="/providers" element={
              <>
              {user && <Providers googleLoaded={googleLoaded}/>}
              {!user && <Navigate to="/login" />}
              </>
            }/> 
          </Routes>
        
        </main>
        <footer className="footer"></footer>
      </>)}
    </div>
    
    
  )
}

export default App;
