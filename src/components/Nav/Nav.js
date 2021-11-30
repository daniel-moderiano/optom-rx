import { Link } from "react-router-dom";
import { StyledNav } from "./Nav.styled";


const Nav = () => {

  // Ensures that navigating to template route via Nav does not try to display a template with no data
  const templateLocation = {
    pathname: '/template',
    state: { validData: false }
  }

  // TODO: logout implementation, but draw from external hook rather than define functions here in Nav component
  const logout = () => {
    console.log('User logged out');
  }

  return (
    <StyledNav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__list-item">
          <Link className="Nav__link" to="/">Home</Link>
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
      </ul>
    </StyledNav>
  )
}

export default Nav