import Nav from "../Nav/Nav"
import { StyledHeader } from "./Header.styled"

const Header = () => {
  return (
    <StyledHeader className="Header">
      <h1 className="Header__title">
        {/* Later add an image element within the link tag for a logo */}
        OptomRx
      </h1>
      <Nav />
    </StyledHeader>
  )
}

export default Header
