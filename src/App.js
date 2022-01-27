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
import Dashboard from './components/Dashboard/Dashboard';
import Prescribers from "./components/Prescribers/Prescribers";
import './App.css';
import EditPrescriber from "./components/EditPrescriber/EditPrescriber";
import Toast from "./components/utils/Toast/Toast";
import AddPrescriber from "./components/AddPrescriber/AddPrescriber";
import Main from "./components/Main/Main";
import Scripts from "./components/Scripts/Scripts";
import ViewScript from "./components/ViewScript/ViewScript";
import Settings from "./components/Settings/Settings";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import { StyledApp } from "./App.styled";
import Home from './components/Home/Home';
import AppFooter from './components/Footer/AppFooter';
import HomeFooter from './components/Footer/HomeFooter';


const App = () => {
  // Can user the user state to conditionally render or redirect routes (logged in vs out for example)
  const { user, authIsReady } = useAuthContext();

  const ausDate = new Date().toLocaleString("en-CA", { timeZone: "Australia/Adelaide" }).substring(0, 10);

  // Used for toast alerts, can pass set function to components that require toast alerts
  const [toastParams, setToastParams] = useState({
    visible: false, 
    type: '',
    message: '',
  });
  
  const [data, setData] = useState({
    drugData: {
      substitutePermitted: true,
      brandOnly: false,
      includeBrand: false,
      pbsRx: false,
      compounded: false,
      authRequired: false,
    },
    patientData: {},
    prescriberData: {},
    miscData: {
      date: ausDate,
    },
    pbsData: null,
  });

  let navigate = useNavigate();

  const [googleLoaded, setGoogleLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [firstSignIn, setFirstSignIn] = useState(false);

  // Primarily a UI-based function. Data will always be reset for new Rx within the Rx form, but resetting data here on click of any link generating a new Rx avoid the flash of text on initial render containing the old data. Bad look.
  const resetAllData = () => {
    setData({
      drugData: {
        substitutePermitted: true,
        brandOnly: false,
        includeBrand: false,
        pbsRx: false,
        compounded: false,
        authRequired: false,
      },
      patientData: {},
      prescriberData: {},
      miscData: {
        date: ausDate,
      },
      pbsData: null,
    });
  };

  // A global toast listener that fades out any toast message after one second
  useEffect(() => {
    if (toastParams.visible) {
      setTimeout(() => {
        // Only visibility is changed to preverse styling and message as toast fades out
        setToastParams((prevData) => ({
          ...prevData,
          visible: false, 
        }))
      }, 4000);
    }
  }, [toastParams.visible])

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
      if (!googleLoaded) {
        setGoogleLoaded(googleLoaded => !googleLoaded);
      }
    });
  }, [googleLoaded])

  // Combine all the data from the RxForm component
  const handleSubmit = (drugData, patientData, prescriberData, miscData, pbsData) => {
    setData((prevData) => ({
      ...prevData,
      drugData: {
        ...drugData
      },
      patientData: {
        ...patientData
      },
      prescriberData: {
        ...prescriberData
      },
      miscData: {
        ...miscData
      },
      pbsData: pbsData,
    }));

    // New React Router v6 syntax using navigate. State is passed in a similar way and accessed with useLocation
    navigate('/review-prescription');
  };

  

  return (
    <StyledApp className="App">
      <GlobalStyles />
      {authIsReady && (<> 
        <Header resetData={resetAllData} currentPage={currentPage}/>

        <Main >
          <Routes>
            <Route path="/" element={
              <>
              {!user && <Home />}
              {user && <Dashboard setToast={setToastParams} setPage={setCurrentPage} firstSignIn={firstSignIn} setFirstSignIn={setFirstSignIn} resetData={resetAllData}/>}
              </>
            } />

            <Route path="/dashboard" element={
              <>
              {!user && <Navigate to="/login" />}
              {user && <Dashboard setToast={setToastParams} setPage={setCurrentPage} firstSignIn={firstSignIn} setFirstSignIn={setFirstSignIn} resetData={resetAllData}/>}
              </>
            } />       

            <Route path="/settings" element={
              <>
              {!user && <Navigate to="/login" />}
              {user && <Settings setToast={setToastParams} setPage={setCurrentPage} />}
              </>
            } />

            <Route path="/new-prescription" element={
              <>
              {!user && <Navigate to="/login"/>}
              {user && <RxForm handleSubmit={handleSubmit} googleLoaded={googleLoaded} existingData={data} setPage={setCurrentPage} setToast={setToastParams}/> }
              </>
            }/>

            <Route path="/signup" element={
              <>
              {!user && <Signup setPage={setCurrentPage} setFirstSignIn={setFirstSignIn}/>}
              {user && <Navigate to="/dashboard" />}
              </>
            }/>
              
            <Route path="/login" element={
              <>
              {!user && <Login setPage={setCurrentPage}/>}
              {user && <Navigate to="/dashboard" />}
              </>
            }/>

            <Route path="/review-prescription" element={
              <>
              {user && <RxTemplate data={data} setToast={setToastParams} setPage={setCurrentPage}/>}
              {!user && <Navigate to="/login"/>}
              </>
            }/>

            <Route path="/edit-prescriber/:id" element={
              <>
              {user && <EditPrescriber googleLoaded={googleLoaded} setToast={setToastParams} setPage={setCurrentPage}/>}
              {!user && <Navigate to="/login"/>}
              </>
            }/>

            <Route path="/add-prescriber" element={
              <>
              {user && <AddPrescriber googleLoaded={googleLoaded} setToast={setToastParams} setPage={setCurrentPage}/>}
              {!user && <Navigate to="/login"/>}
              </>
            }/>

            <Route path="/prescribers" element={
              <>
              {user && <Prescribers googleLoaded={googleLoaded} setToast={setToastParams} setPage={setCurrentPage}/>}
              {!user && <Navigate to="/login" />}
              </>
            }/> 

            <Route path="/scripts" element={
              <>
              {user && <Scripts setToast={setToastParams} setPage={setCurrentPage}/>}
              {!user && <Navigate to="/login" />}
              </>
            }/> 

            <Route path="/scripts/:id" element={
              <>
              {user && <ViewScript setToast={setToastParams} resetData={resetAllData} setPage={setCurrentPage}/>}
              {!user && <Navigate to="/login"/>}
              </>
            }/>

            <Route path="/reset-password" element={
              <ResetPassword setToast={setToastParams} setPage={setCurrentPage}/>
            }/>

          </Routes>
        </Main>
        {user && <AppFooter />}
        {!user && <HomeFooter />}
      </>)}
      <Toast params={toastParams} />
     
    </StyledApp>
    
    
  )
}

export default App;
