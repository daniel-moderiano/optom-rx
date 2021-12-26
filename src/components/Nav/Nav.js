import { Link } from "react-router-dom";
import { StyledNav } from "./Nav.styled";
import UserMenu from "../UserMenu/UserMenu";
import { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";


const Nav = () => {
  // Conditionally display nav links based on user auth state (logged in or not)
  const { user } = useAuthContext();
  const [showMenu, setShowMenu] = useState(false);

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
    <StyledNav user={user} className="Nav">
      <ul className="Nav__list">

        

        {!user && 
          <>
            <li className="Nav__list-item">
              <Link className="Nav__link" to="/signup">Sign up</Link>
            </li>
            <li className="Nav__list-item">
            <Link className="Nav__link" to="/login">Login</Link>
            </li>
          </>
        }
        {user &&
          <>
          <li className="Nav__list-item">
            <Link className="Nav__link" to="/">Home</Link>
          </li>
          <li className="Nav__list-item">
            <Link className="Nav__link" to="/form">Form</Link>
          </li>
          <li className="Nav__list-item">
            <button className="Nav__link UserMenu__toggle" onClick={toggleMenu}>{user.displayName}</button>
          </li>
          </>
        }
        
      </ul>
      {showMenu && <UserMenu handleClick={toggleMenu}/>}
    </StyledNav>
  )
}

export default Nav