import { Link } from "react-router-dom";
import { StyledNav } from "./Nav.styled";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { useEffect } from "react";


const Nav = ({ resetData, currentPage }) => {
  // Conditionally display nav links based on user auth state (logged in or not)
  const { user } = useAuthContext();
  const { logout } = useLogout();
  
  const ariaHome = currentPage === 'home' ? { "aria-current": "page" } : {};
  const ariaForm = currentPage === 'form' ? { "aria-current": "page" } : {};
  const ariaLogin = currentPage === 'login' ? { "aria-current": "page" } : {};
  const ariaSignup = currentPage === 'signup' ? { "aria-current": "page" } : {};
  const ariaScripts = currentPage === 'scripts' ? { "aria-current": "page" } : {};
  const ariaPrescribers = currentPage === 'prescribers' ? { "aria-current": "page" } : {};

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".Nav__list");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".Nav__link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }, []);
  
  return (
    <StyledNav user={user} className="Nav" aria-label="Main Navigation" role="navigation">
      <ul className="Nav__list" role="menubar">

        {!user && 
          <>
            <li className="Nav__list-item" role="menuitem">
              <Link className="Nav__link Nav__link--std Nav__link--login" to="/login"  {...ariaLogin}>Login</Link>
            </li>
            <li className="Nav__list-item" role="menuitem">
              <Link className="Nav__link Nav__link--std Nav__link--signup" to="/signup" {...ariaSignup}>Sign up</Link>
            </li>
            
          </>
        }
        {user &&
          <>
          
          <li className="Nav__list-item" role="none">
            <Link 
              className="Nav__link Nav__link--std" 
              to="/form" 
              role="menuitem" 
              onMouseDown={e => e.preventDefault()}
              {...ariaForm}
               
              state={ { newRx: true } }>New Rx</Link>
          </li>
          <li className="Nav__list-item" role="none">
            <Link className="Nav__link Nav__link--std" to="/scripts" role="menuitem" {...ariaScripts}>Scripts</Link>
          </li>
          <li className="Nav__list-item" role="none">
            <Link className="Nav__link Nav__link--std" to="/providers" role="menuitem" {...ariaPrescribers}>Providers</Link>
          </li>
          <li className="Nav__list-item" role="none">
            <Link className="Nav__link Nav__link--std" to="/" role="menuitem" {...ariaHome}>Home</Link>
          </li>
          <li className="Nav__list-item" role="none"> 
            <button 
              className={`Nav__link Nav__link--std Nav__link--logout`} 
              onClick={logout}
              role="menuitem"
              >Log out
            </button>
          </li>
          </>
        }
        
      </ul>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </StyledNav>
  )
}

export default Nav