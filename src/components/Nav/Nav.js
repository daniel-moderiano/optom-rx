import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Nav = () => {

  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__list-item">
          <Link className="Nav__link" to="/home">Home</Link>
        </li>
        <li className="Nav__list-item">
          <Link className="Nav__link" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav