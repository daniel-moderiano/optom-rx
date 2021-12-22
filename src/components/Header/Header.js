import Nav from "../Nav/Nav"
import { StyledHeader } from "./Header.styled"
import Rx from '../../assets/rx.svg';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <StyledHeader className="Header">
      <div className="logo">
        <h1 className="Header__title">
          {/* Later add an image element within the link tag for a logo */}
          Optom
        </h1>
        <img src={Rx} alt="logo-rx" />
        {/* <img src={logo} alt="logo-rx" /> */}
      </div>
      
      <Nav />
    </StyledHeader>
  )
}

export default Header
