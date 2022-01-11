import { Link } from "react-router-dom";
import { StyledNav } from "./Nav.styled";
import UserMenu from "../UserMenu/UserMenu";
import { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";


const Nav = ({ resetData }) => {
  // Conditionally display nav links based on user auth state (logged in or not)
  const { user } = useAuthContext();
  const [showMenu, setShowMenu] = useState(false);
  const { logout } = useLogout();

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  // Ensure the items list closes on outside click
  const menuOutsideClick = useCallback((event) => {
    // SVG elements on the page do not have a className, so clicking them will crash the app. Avoid that here
    if (typeof event.target.className !== 'string') {
      return;
    }
    // All items within the autocomplete input and items list will contain UserMenu in their class. Note also the dropdown btn has the same class to ensure no clashing of toggle functions
    if (!event.target.className.includes('UserMenu')) {
      setShowMenu(false);
    }      
  }, []);

  

  // Runs once only on initial mount, and cleans up on dismount
  useEffect(() => {
    window.addEventListener('click', menuOutsideClick);

    return () => {
      window.removeEventListener('click', menuOutsideClick)
    }
  }, [menuOutsideClick])

  return (
    <StyledNav user={user} className="Nav" aria-label="Main Navigation" role="navigation">
      <ul className="Nav__list">

        

        {!user && 
          <>
            <li className="Nav__list-item">
              <Link className="Nav__link Nav__link--std Nav__link--login" to="/login">Login</Link>
            </li>
            <li className="Nav__list-item">
              <Link className="Nav__link Nav__link--std Nav__link--signup" to="/signup">Sign up</Link>
            </li>
            
          </>
        }
        {user &&
          <>
          
          <li className="Nav__list-item">
            <Link className="Nav__link Nav__link--std" to="/form" state={ { newRx: true } }>New Rx</Link>
          </li>
          <li className="Nav__list-item">
            <Link className="Nav__link Nav__link--std" to="/scripts">Scripts</Link>
          </li>
          <li className="Nav__list-item">
            <Link className="Nav__link Nav__link--std" to="/providers">Providers</Link>
          </li>
          <li className="Nav__list-item">
            <Link className="Nav__link Nav__link--std" to="/">Home</Link>
          </li>
          <li className="Nav__list-item">
            <button 
              className={`Nav__link Nav__link--std Nav__link--logout`} 
              onClick={logout}
              >Log out
            </button>
          </li>
          {/* <li className="Nav__list-item">
            <button className="Nav__link Nav__link--std UserMenu__toggle" onClick={toggleMenu}>Hi, {user.displayName}
              <span className="UserMenu__icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>
              </span>
            </button>
            
          </li> */}
          </>
        }
        
      </ul>
      {showMenu && <UserMenu handleClick={toggleMenu}/>}
    </StyledNav>
  )
}

export default Nav