import Nav from "../Nav/Nav"
import { StyledHeader } from "./Header.styled"
import logo from '../../assets/logo.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  const returnHome = () => {
    navigate('/');
  };

  return (
    <StyledHeader className="Header">
        <h1 className="Header__title" onClick={returnHome}>
          <img src={logo} alt="logo-rx" />
        </h1>      
      <Nav />
    </StyledHeader>
  )
}

export default Header
