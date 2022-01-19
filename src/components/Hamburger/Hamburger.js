import { StyledHamburger } from "./Hamburger.styled"

const Hamburger = ({ handleClick, loggedIn, active }) => {
  return (
    <StyledHamburger className={`${active ? 'Hamburger active' : 'Hamburger'}`} onClick={handleClick} loggedIn={loggedIn}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </StyledHamburger>
  )
}

export default Hamburger
