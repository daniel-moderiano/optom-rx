import { StyledHamburger } from "./Hamburger.styled"

const Hamburger = ({ handleClick, loggedIn, expanded }) => {
  return (
    <StyledHamburger 
      className={`${expanded ? 'Hamburger expanded' : 'Hamburger'}`} 
      onClick={handleClick} 
      loggedIn={loggedIn} 
      aria-label="Main menu" 
      aria-expanded={expanded ? true : false
    }>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </StyledHamburger>
  )
}

export default Hamburger
