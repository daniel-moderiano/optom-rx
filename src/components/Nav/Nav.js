import { Link } from "react-router-dom";
import { StyledNav } from "./Nav.styled";
import { useLogout } from "../../hooks/useLogout";
import { useState } from "react";
import Hamburger from "../utils/Hamburger/Hamburger";
import { useAuthContext } from "../../hooks/useAuthContext";

const Nav = ({ currentPage, resetData }) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const [showNav, setShowNav] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  
  // Aria current page attributes that adjust depending on the current active page state
  const ariaForm = currentPage === 'form' ? { "aria-current": "page" } : {};
  const ariaLogin = currentPage === 'login' ? { "aria-current": "page" } : {};
  const ariaSignup = currentPage === 'signup' ? { "aria-current": "page" } : {};
  const ariaScripts = currentPage === 'scripts' ? { "aria-current": "page" } : {};
  const ariaSettings = currentPage === 'settings' ? { "aria-current": "page" } : {};
  const ariaPrescribers = currentPage === 'prescribers' ? { "aria-current": "page" } : {};

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
  
  return (
    <StyledNav user={user} className="Nav" aria-label="Main menu" role="navigation">
      <ul className={`${showNav ? "Nav__list active" : "Nav__list"}`} role="menubar">
        {!user && <>
          <li className="Nav__list-item" role="menuitem">
            <Link onClick={closeNav} className="Nav__link Nav__link--std Nav__link--login" to="/login"  {...ariaLogin}>Login</Link>
          </li>
          <li className="Nav__list-item" role="menuitem">
            <Link onClick={closeNav} className="Nav__link Nav__link--std Nav__link--signup" to="/signup" {...ariaSignup}>Sign up</Link>
          </li>
          </>
        }
      
        {user && <>
          <li className="Nav__list-item" role="none">
            <Link 
              className="Nav__link Nav__link--std" 
              to="/form" 
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
              onClick={() => {
                closeNav();
                logout();
              }}
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