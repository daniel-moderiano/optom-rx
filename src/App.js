import Header from "./components/Header/Header";
import GlobalStyles from "./components/utils/globalStyles";
import RxForm from './components/RxForm/RxForm';
import RxTemplate from './components/RxTemplate/RxTemplate'
import { useState, useEffect } from "react";
import { Route, useNavigate, Routes, Navigate, useLocation } from "react-router";
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
import PrivacyPolicy from "./components/Policies/PrivacyPolicy";
import Terms from "./components/Policies/Terms";
import Features from "./components/Features/Features";
import { useGoogleAPI } from "./hooks/useGoogleAPI";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Contact from './components/Contact/Contact';


const App = () => {
  // Can use the user state to conditionally render or redirect routes (logged in vs out for example)
  const { user, authIsReady } = useAuthContext();
  const { pathname } = useLocation();
  const { loadGoogleAPI } = useGoogleAPI();
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

  // Ensure the window is scrolled to the top when changing any routes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


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
      }, 3000);
    }
  }, [toastParams.visible])

  // Only load google API services when the user is logged in
  useEffect(() => {
    if (user) {
      loadGoogleAPI(googleLoaded, setGoogleLoaded);
    }
  }, [googleLoaded, loadGoogleAPI, user])


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
        <Header resetData={resetAllData} currentPage={currentPage} setPage={setCurrentPage} setToast={setToastParams} url={pathname} />

        <Main currentPage={currentPage} user={user} url={pathname}>
          <Routes>
            <Route path="/" element={
              <>
                {!user && <Home setPage={setCurrentPage} />}
                {user && <Dashboard setToast={setToastParams} setPage={setCurrentPage} firstSignIn={firstSignIn} setFirstSignIn={setFirstSignIn} resetData={resetAllData} />}
              </>
            } />

            <Route path="/privacy-policy" element={<PrivacyPolicy setPage={setCurrentPage} />} />

            <Route path="/terms-of-service" element={<Terms setPage={setCurrentPage} />} />

            <Route path="/features" element={<Features setPage={setCurrentPage} />} />

            <Route path="/faq" element={<FAQ setPage={setCurrentPage} />} />

            <Route path="/about" element={<About setPage={setCurrentPage} />} />

            <Route path="/dashboard" element={
              <>
                {!user && <Navigate to="/login" />}
                {user && <Dashboard setToast={setToastParams} setPage={setCurrentPage} firstSignIn={firstSignIn} setFirstSignIn={setFirstSignIn} resetData={resetAllData} />}
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
                {!user && <Navigate to="/login" />}
                {user && <RxForm handleSubmit={handleSubmit} googleLoaded={googleLoaded} existingData={data} setPage={setCurrentPage} setToast={setToastParams} />}
              </>
            } />

            <Route path="/signup" element={
              <>
                {!user && <Signup setPage={setCurrentPage} setFirstSignIn={setFirstSignIn} />}
                {user && <Navigate to="/dashboard" />}
              </>
            } />

            <Route path="/login" element={
              <>
                {!user && <Login setPage={setCurrentPage} />}
                {user && <Navigate to="/dashboard" />}
              </>
            } />

            <Route path="/review-prescription" element={
              <>
                {user && <RxTemplate data={data} setToast={setToastParams} setPage={setCurrentPage} resetData={resetAllData} />}
                {!user && <Navigate to="/login" />}
              </>
            } />

            <Route path="/edit-prescriber/:id" element={
              <>
                {user && <EditPrescriber googleLoaded={googleLoaded} setToast={setToastParams} setPage={setCurrentPage} />}
                {!user && <Navigate to="/login" />}
              </>
            } />

            <Route path="/add-prescriber" element={
              <>
                {user && <AddPrescriber googleLoaded={googleLoaded} setToast={setToastParams} setPage={setCurrentPage} />}
                {!user && <Navigate to="/login" />}
              </>
            } />

            <Route path="/prescribers" element={
              <>
                {user && <Prescribers googleLoaded={googleLoaded} setToast={setToastParams} setPage={setCurrentPage} />}
                {!user && <Navigate to="/login" />}
              </>
            } />

            <Route path="/scripts" element={
              <>
                {user && <Scripts setToast={setToastParams} setPage={setCurrentPage} />}
                {!user && <Navigate to="/login" />}
              </>
            } />

            <Route path="/scripts/:id" element={
              <>
                {user && <ViewScript setToast={setToastParams} resetData={resetAllData} setPage={setCurrentPage} />}
                {!user && <Navigate to="/login" />}
              </>
            } />

            <Route path="/reset-password" element={
              <ResetPassword setToast={setToastParams} setPage={setCurrentPage} />
            } />

          </Routes>
        </Main>
        {user && <AppFooter currentPage={currentPage} url={pathname} />}
        {!user && <HomeFooter currentPage={currentPage} url={pathname} />}
      </>)}
      <Toast params={toastParams} />

    </StyledApp>
  )
}

export default App;
