import Nav from "../Nav/Nav"
import { StyledHeader } from "./Header.styled"
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <StyledHeader className="Header">
      <div className="logo">
        <h1 className="Header__title">
          <img src={logo} alt="logo-rx" />
        </h1>
        
      </div>
      
      <Nav />
    </StyledHeader>
  )
}

export default Header
