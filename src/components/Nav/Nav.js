import { Link } from "react-router-dom";
import { StyledNav } from "./Nav.styled";
import { useLogout } from '../../hooks/useLogout';
import UserMenu from "../UserMenu/UserMenu";
import { useCallback, useEffect, useState } from "react";


const Nav = () => {
  // Bring in the logout function from the custom hook so that it can be called on click via Logout btn
  const { logout } = useLogout();

  const [showMenu, setShowMenu] = useState(false);

  // Ensures that navigating to template route via Nav does not try to display a template with no data
  const templateLocation = {
    pathname: '/template',
    state: { validData: false }
  }

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  // Ensure the items list closes on outside click
  const menuOutsideClick = useCallback((event) => {
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
    <StyledNav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__list-item">
          <Link className="Nav__link" to="/">Return home</Link>
        </li>
        <li className="Nav__list-item">
          <Link className="Nav__link" to="/form">Form</Link>
        </li>
        <li className="Nav__list-item">
          <Link className="Nav__link" to="/signup">Sign up</Link>
        </li>
        <li className="Nav__list-item">
          <Link className="Nav__link" to="/login">Login</Link>
        </li>
        <li className="Nav__list-item" onClick={logout}>
          <button className="Nav__logout-btn">Logout</button>
        </li>
        <li className="Nav__list-item">
          <Link className="Nav__link" to={templateLocation}>Template</Link>
        </li>
        <li className="Nav__list-item">
          <button className="Nav__link UserMenu__toggle" onClick={toggleMenu}>Dropdown</button>
        </li>
      </ul>
      {showMenu && <UserMenu handleClick={toggleMenu}/>}
    </StyledNav>
  )
}

export default Nav