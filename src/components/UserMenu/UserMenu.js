import { StyledUserMenu } from "./UserMenu.styled";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <StyledUserMenu className="UserMenu">
      <div className="UserMenu__info">
        <div className="UserMenu__name">User</div>
      </div>
      <div className="UserMenu__links">
        <ul className="UserMenu__list">
          <li className="UserMenu__list-item">
            <Link className="UserMenu__link" to="/home">Home</Link>
          </li>
          <li className="UserMenu__list-item">
            <Link className="UserMenu__link" to="/providers">Providers</Link>
          </li>
          <li className="UserMenu__list-item">
            <button className="UserMenu__link">Logout</button>
          </li>
        </ul>
      </div>
    </StyledUserMenu>
  )
}

export default UserMenu;
