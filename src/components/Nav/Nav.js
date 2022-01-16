import { Link } from "react-router-dom";
import { StyledNav } from "./Nav.styled";
import { useLogout } from "../../hooks/useLogout";
import { useEffect, useState } from "react";


const Nav = ({ user, resetData, currentPage }) => {
  // Conditionally display nav links based on user auth state (logged in or not)
  const { logout } = useLogout();

  const [showNav, setShowNav] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);
  
  const ariaHome = currentPage === 'home' ? { "aria-current": "page" } : {};
  const ariaForm = currentPage === 'form' ? { "aria-current": "page" } : {};
  const ariaLogin = currentPage === 'login' ? { "aria-current": "page" } : {};
  const ariaSignup = currentPage === 'signup' ? { "aria-current": "page" } : {};
  const ariaScripts = currentPage === 'scripts' ? { "aria-current": "page" } : {};
  const ariaSettings = currentPage === 'settings' ? { "aria-current": "page" } : {};
  const ariaPrescribers = currentPage === 'prescribers' ? { "aria-current": "page" } : {};

  const toggleNav = () => {
    setShowNav((prevState) => (!prevState));
    setToggleHamburger((prevState) => (!prevState));
  }

  const closeNav = () => {
    setShowNav(false);
    setToggleHamburger(false);
  }
  
  return (
    <StyledNav user={user} className="Nav" aria-label="Main Navigation" role="navigation">
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
              onClick={closeNav}
              {...ariaForm}
              
              state={ { newRx: true } }>New Rx</Link>
          </li>
          <li className="Nav__list-item" role="none">
            <Link onClick={closeNav} className="Nav__link Nav__link--std" to="/scripts" role="menuitem" {...ariaScripts}>Scripts</Link>
          </li>
          <li className="Nav__list-item" role="none">
            <Link onClick={closeNav} className="Nav__link Nav__link--std" to="/settings" role="menuitem" {...ariaSettings}>Settings</Link>
          </li>
          <li className="Nav__list-item" role="none">
            <Link onClick={closeNav} className="Nav__link Nav__link--std" to="/providers" role="menuitem" {...ariaPrescribers}>Prescribers</Link>
          </li>
          <li className="Nav__list-item" role="none">
            <Link onClick={closeNav} className="Nav__link Nav__link--std" to="/" role="menuitem" {...ariaHome}>Home</Link>
          </li>
          <li className="Nav__list-item" role="none"> 
            <button 
              className={`Nav__link Nav__link--std Nav__link--logout`} 
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

      <div className={`${toggleHamburger ? "hamburger active" : "hamburger"}`} onClick={toggleNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

    </StyledNav>
  )
}

export default Nav