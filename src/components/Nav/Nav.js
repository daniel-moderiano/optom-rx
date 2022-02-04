import { Link } from "react-router-dom";
import { StyledNav } from "./Nav.styled";
import { useLogout } from "../../hooks/useLogout";
import { useState } from "react";
import Hamburger from "../utils/Hamburger/Hamburger";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useImmediateToast } from "../../hooks/useImmediateToast";

const Nav = ({ currentPage, resetData, setToast }) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const { showSuccessToast, showErrorToast } = useImmediateToast();

  const [showNav, setShowNav] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  
  // Aria current page attributes that adjust depending on the current active page state
  const ariaForm = currentPage === 'form' ? { "aria-current": "page" } : {};
  const ariaLogin = currentPage === 'login' ? { "aria-current": "page" } : {};
  const ariaSignup = currentPage === 'signup' ? { "aria-current": "page" } : {};
  const ariaScripts = currentPage === 'scripts' ? { "aria-current": "page" } : {};
  const ariaSettings = currentPage === 'settings' ? { "aria-current": "page" } : {};
  const ariaPrescribers = currentPage === 'prescribers' ? { "aria-current": "page" } : {};
  const ariaFeatures = currentPage === 'features' ? { "aria-current": "page" } : {};

  // Shows or hides the Nav menu on mobile
  const toggleNav = () => {
    setShowNav((prevState) => (!prevState));
    setToggleHamburger((prevState) => (!prevState));
  }

  // Specifically used to close the menu, rather than toggle
  const closeNav = () => {
    setShowNav(false);
    setToggleHamburger(false);
  }

  // Combine the logout function with confirmation to the user of successful logout
  const performLogout = async () => {
    closeNav();
    try {
      logout();
      showSuccessToast(setToast, 'Successfully logged out.')
    } catch (error) {
      showErrorToast(setToast, "An error occurred while logging out. Try again.")
    }
  }
  
  return (
    <StyledNav user={user} className="Nav" aria-label="Main menu" role="navigation">
      <ul className={`${showNav ? "Nav__list active" : "Nav__list"}`} role="menubar">
        {!user && <>
          <li className="Nav__list-item" role="menuitem">
            <Link onClick={closeNav} className="Nav__link Nav__link--std Nav__link--homepage" to="/features" {...ariaFeatures}>Features</Link>
          </li>
          <li className="Nav__list-item" role="menuitem">
            <Link onClick={closeNav} className="Nav__link Nav__link--std Nav__link--homepage" to="/login"  {...ariaLogin}>Log in</Link>
          </li>
          <li className="Nav__list-item" role="menuitem">
            <Link onClick={closeNav} className="Nav__link Nav__link--std Nav__link--homepage Nav__link--signup" to="/signup" {...ariaSignup}>Sign up</Link>
          </li>
          
          </>
        }
      
        {user && <>
          <li className="Nav__list-item" role="none">
            <Link 
              className="Nav__link Nav__link--std" 
              to="/new-prescription" 
              role="menuitem" 
              onClick={() => {
                resetData();
                closeNav(); 
              }}
              {...ariaForm}
              
              state={ { newRx: true } }>New Rx</Link>
          </li>
          <li className="Nav__list-item" role="none">
            <Link onClick={closeNav} className="Nav__link Nav__link--std" to="/scripts" role="menuitem" {...ariaScripts}>Scripts</Link>
          </li>
          <li className="Nav__list-item" role="none">
            <Link onClick={closeNav} className="Nav__link Nav__link--std" to="/prescribers" role="menuitem" {...ariaPrescribers}>Prescribers</Link>
          </li>
          <li className="Nav__list-item" role="none">
            <Link onClick={closeNav} className="Nav__link Nav__link--std" to="/settings" role="menuitem" {...ariaSettings}>Settings</Link>
          </li>
          
          <li className="Nav__list-item" role="none"> 
            <button 
              className='Nav__link Nav__link--std'
              onClick={performLogout}
              role="menuitem"
              >Log out
            </button>
          </li>
        </>}
      </ul>

      <Hamburger loggedIn={user ? true : false} handleClick={toggleNav} expanded={toggleHamburger}/> 

    </StyledNav>
  )
}

export default Nav