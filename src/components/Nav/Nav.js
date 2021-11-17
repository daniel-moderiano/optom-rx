import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__list-item">
          <Link className="Nav__link" to="/">Home</Link>
        </li>
        <li className="Nav__list-item">
          <Link className="Nav__link" to="/template">Template</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
