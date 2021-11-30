import { Link } from "react-router-dom";
import { StyledNav } from "./Nav.styled";
import { useLogout } from '../../hooks/useLogout';


const Nav = () => {
  // Bring in the logout function from the custom hook so that it can be called on click via Logout btn
  const { logout } = useLogout();

  // Ensures that navigating to template route via Nav does not try to display a template with no data
  const templateLocation = {
    pathname: '/template',
    state: { validData: false }
  }

  return (
    <StyledNav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__list-item">
          <Link className="Nav__link" to="/">Home</Link>
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
          <Link className="Nav__link" to="/providers">Providers</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default Nav