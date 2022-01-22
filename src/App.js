/*global google*/ // Used to ignore the breaking 'google isn't defined' error
import Header from "./components/Header/Header";
import GlobalStyles from "./components/utils/globalStyles";
import RxForm from './components/RxForm/RxForm';
import RxTemplate from './components/RxTemplate/RxTemplate'
import { useState, useEffect, useCallback } from "react";
import { Route, useNavigate, Routes, Navigate } from "react-router";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import { useAuthContext } from './hooks/useAuthContext';
import Home from './components/Home/Home';
import Providers from "./components/Providers/Providers";
import './App.css';
import EditProvider from "./components/EditProvider/EditProvider";
import Toast from "./components/utils/Toast/Toast";
import AddProvider from "./components/AddProvider/AddProvider";
import Main from "./components/Main/Main";
import Scripts from "./components/Scripts/Scripts";
import ViewScript from "./components/ViewScript/ViewScript";
import Settings from "./components/Settings/Settings";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import { StyledApp } from "./App.styled";


// ! Medicare details are NOT required for valid Australian prescriptions, even under PBS

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
    providerData: {},
    miscData: {
      date: ausDate,
    },
    pbsData: null,
  });

  let navigate = useNavigate();

  const [googleLoaded, setGoogleLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [firstSignIn, setFirstSignIn] = useState(false);

  const resetAllData = useCallback(() => {
    console.log('Reset all data');
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
      providerData: {},
      miscData: {
        date: ausDate,
      },
      pbsData: null,
    });
  }, [ausDate]);

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
      console.log('Initial load');
      if (!googleLoaded) {
        setGoogleLoaded(googleLoaded => !googleLoaded);
      }
    });
    
  }, [googleLoaded])

  const handleSubmit = (drugData, patientData, providerData, miscData, pbsData) => {
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
      pbsData: pbsData,
    }));

    // New React Router v6 syntax using navigate. State is passed in a similar way and accessed with useLocation
    navigate('/template');
  };

  

  return (
    <StyledApp className="App">
      {authIsReady && (<>
        <GlobalStyles />
        <Header user={user} resetData={resetAllData} currentPage={currentPage}/>

        <Main >
          <Routes>
            <Route path="/" element={
              <>
              {!user && <Navigate to="/login" />}
              {user && <Home setToast={setToastParams} setPage={setCurrentPage} firstSignIn={firstSignIn} setFirstSignIn={setFirstSignIn}/>}
              </>
            } />

            <Route path="/settings" element={
              <>
              {!user && <Navigate to="/login" />}
              {user && <Settings user={user} setToast={setToastParams} setPage={setCurrentPage} />}
              </>
            } />

            <Route path="/form" element={
              <>
              {user && <RxForm handleSubmit={handleSubmit} googleLoaded={googleLoaded} existingData={data} resetData={resetAllData} setPage={setCurrentPage}/> }
              {!user && <Navigate to="/login"/>}
              </>
            }/>

            <Route path="/signup" element={
              <>
              {!user && <Signup setPage={setCurrentPage} setFirstSignIn={setFirstSignIn}/>}
              {user && <Navigate to="/" />}
              </>
            }/>
              
            <Route path="/login" element={
              <>
              {!user && <Login setPage={setCurrentPage}/>}
              {user && <Navigate to="/" />}
              </>
            }/>

            <Route path="/template" element={
              <>
              {user && <RxTemplate data={data} setToast={setToastParams} setPage={setCurrentPage}/>}
              {!user && <Navigate to="/login"/>}
              </>
            }/>

            <Route path="/edit/:id" element={
              <>
              {user && <EditProvider googleLoaded={googleLoaded} setToast={setToastParams} setPage={setCurrentPage}/>}
              {!user && <Navigate to="/login"/>}
              </>
            }/>

            <Route path="/add-provider" element={
              <>
              {user && <AddProvider googleLoaded={googleLoaded} setToast={setToastParams} setPage={setCurrentPage}/>}
              {!user && <Navigate to="/login"/>}
              </>
            }/>

            <Route path="/providers" element={
              <>
              {user && <Providers googleLoaded={googleLoaded} setToast={setToastParams} setPage={setCurrentPage}/>}
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
        <footer className="footer"></footer>
      </>)}
      <Toast params={toastParams} />
     
    </StyledApp>
    
    
  )
}

export default App;
