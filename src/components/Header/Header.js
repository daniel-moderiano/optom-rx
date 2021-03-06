import Nav from "../Nav/Nav"
import { StyledHeader } from "./Header.styled"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect } from "react";

const Header = ({ currentPage, resetData, setPage, setToast, url }) => {
  let navigate = useNavigate();
  const { user } = useAuthContext();

  const handleLogoClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  }

  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage(null);
  }, [setPage])

  return (
    <StyledHeader className={`header ${(url === '/login' || url === '/signup') && 'auth-header'}`} user={user} role="banner" aria-labelledby="optomrx-logo">
      <h1 className="Header__title" onClick={handleLogoClick}>
        <div className="logo-container">
          {/* Using inline SVG for easier styling changes in CSS */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.92 45.53" className="logo" aria-labelledby="optomrx-logo">
            <title id="optomrx-logo">OptomRx</title>
            <path className="cls-1" d="M25.86,14.87c0,10.31-6.32,15.4-13.1,15.4C5.57,30.27,0,24.61,0,15.46,0,5.87,5.8.06,13.12.06S25.86,5.81,25.86,14.87Zm-23.71.52C2.15,22,6,28.55,12.89,28.55S23.71,22.24,23.71,15C23.71,8.84,20.33,1.79,13,1.79S2.15,8.56,2.15,15.39Z" />
            <path className="cls-1" d="M31,15.61C31,13,31,10.94,30.87,9h2L33,12.91h.09a8.22,8.22,0,0,1,7.68-4.43c5.35,0,9,4.43,9,10.55,0,7.45-4.44,11.24-9.47,11.24a7.91,7.91,0,0,1-7.07-3.85h-.08v12H31Zm2.07,6a7.61,7.61,0,0,0,.18,1.66,7,7,0,0,0,6.85,5.31c4.78,0,7.5-3.89,7.5-9.44,0-4.69-2.61-8.92-7.33-8.92a7.24,7.24,0,0,0-6.9,5.55,8,8,0,0,0-.3,1.78Z" />
            <path className="cls-1" d="M57.89,2.93V9h5.93v1.67H57.89V24.17c0,2.65.82,4.31,3.06,4.31a7.18,7.18,0,0,0,2.37-.33l.24,1.6a7.43,7.43,0,0,1-2.87.5,4.42,4.42,0,0,1-3.59-1.48c-1-1.09-1.27-2.84-1.27-5V10.63H52.31V9h3.52V3.6Z" />
            <path className="cls-1" d="M86,19.18C86,27,80.65,30.27,76,30.27c-5.4,0-9.55-4.19-9.55-10.73,0-7.13,4.68-11.06,9.85-11.06C82.06,8.48,86,12.8,86,19.18Zm-17.44.26c0,5.21,3.32,9.12,7.61,9.12s7.74-3.94,7.74-9.28c0-3.81-2.14-9.08-7.63-9.08C71,10.2,68.54,15,68.54,19.44Z" />
            <path className="cls-1" d="M91.28,13.94c0-1.91-.06-3.34-.17-5H93l.15,3.69h.09A7.26,7.26,0,0,1,100,8.48,6.32,6.32,0,0,1,106,13h.08a8.52,8.52,0,0,1,2.13-2.82,7.13,7.13,0,0,1,5-1.74c2,0,6.79,1.15,6.79,9V29.79h-2.06V17.72c0-4.68-1.81-7.47-5.43-7.47A6.05,6.05,0,0,0,107,14.39a6.42,6.42,0,0,0-.36,2.06V29.79h-2.06v-13c0-3.75-1.8-6.52-5.17-6.52-2.8,0-5,2.27-5.78,4.7a7,7,0,0,0-.31,2V29.79H91.28Z" />
            <path className="cls-1" d="M143.35,0c-.45,0-1.17,0-2.16,0q-4,.15-6.39.15-2.15,0-6-.17l-.17.15v1l.17.15a17.52,17.52,0,0,1,2.78.24,1.48,1.48,0,0,1,.77.37,1.88,1.88,0,0,1,.29.92c.07.46.1,1.49.12,3.08l0,4.09v9.7l0,4.42a20.14,20.14,0,0,1-.16,2.89,1.58,1.58,0,0,1-.36.85,1.94,1.94,0,0,1-.86.33,24.17,24.17,0,0,1-2.6.21l-.17.12v1.05l.17.17c3.56-.12,5.56-.17,6-.17s1.33,0,2.33,0l3.68.13.17-.17V28.58l-.17-.12a16.2,16.2,0,0,1-2.79-.25,1.57,1.57,0,0,1-.76-.38,2,2,0,0,1-.3-.92,30,30,0,0,1-.13-3.07l0-4.08v-9.7q0-7.4.32-7.86a13.64,13.64,0,0,1,4.14-.6,8,8,0,0,1,5,1.41,4.93,4.93,0,0,1,1.84,4.18A6,6,0,0,1,146.07,12a8.51,8.51,0,0,1-5.68,1.74c-.4,0-1,0-1.69-.07l-.21.66q3.76,4.29,7.37,9.31c2,2.76,3.43,4.72,4.39,5.91l.66,1.1-5.72,8c-1.46,2-2.45,3.38-2.95,4A4.59,4.59,0,0,1,141,43.91a5,5,0,0,1-1.89.26l-.17.17v1l.19.18c.88-.05,1.59-.08,2.12-.08s1.23,0,2.14.08q4.08-6.84,7.1-11L152,32.42l6.37,9.41c.71,1.22,1.49,2.46,2.32,3.7,1.44-.05,2.52-.08,3.23-.08.54,0,1.48,0,2.81.08l.17-.16v-1l-.17-.17A5.55,5.55,0,0,1,165,44a3,3,0,0,1-1-1c-.41-.54-.95-1.35-1.62-2.44l-7.84-11.31a.7.7,0,0,0-.08-.23L156,27l3.9-5.28c1.39-1.89,2.32-3.06,2.77-3.54a4.09,4.09,0,0,1,1.11-.89,6.17,6.17,0,0,1,1.75-.24l.17-.17V16l-.17-.19-2,.06-2.15-.06-8,11.74c-.32-.4-.76-1-1.45-1.95-1.11-1.44-2.14-2.82-3.1-4.11l-3-3.94c-1-1.34-1.72-2.28-2.12-2.83a13.38,13.38,0,0,0,5-1.82A8.12,8.12,0,0,0,151.49,10a7.13,7.13,0,0,0,.93-3.46,6.35,6.35,0,0,0-1.88-4.57C149.28.65,146.88,0,143.35,0Z" />
          </svg>
        </div>
      </h1>
      <Nav user={user} currentPage={currentPage} resetData={resetData} setToast={setToast} />
    </StyledHeader>
  )
}

export default Header
