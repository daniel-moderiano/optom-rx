import { StyledUserMenu } from "./UserMenu.styled";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

const UserMenu = ({ handleClick }) => {
  const { logout } = useLogout();

  return (
    <StyledUserMenu className="UserMenu">
      <div className="UserMenu__info">
        <div className="UserMenu__avatar"></div>
        <div className="UserMenu__name">Daniel Moderiano</div>
      </div>
      <div className="UserMenu__links">
        <ul className="UserMenu__list">
          <li className="UserMenu__list-item">
            <Link onClick={handleClick} className="UserMenu__link" to="/">Home</Link>
          </li>
          <li className="UserMenu__list-item">
            <Link onClick={handleClick}  className="UserMenu__link" to="/providers">Providers</Link>
          </li>
          <li className="UserMenu__list-item">
            <button className="UserMenu__link" onClick={() => {handleClick(); logout();}} >Logout</button>
          </li>
        </ul>
      </div>
    </StyledUserMenu>
  )
}

export default UserMenu;
