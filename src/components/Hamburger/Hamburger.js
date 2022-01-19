import { StyledHamburger } from "./Hamburger.styled"

const Hamburger = ({ handleClick, loggedIn, expanded }) => {
  // Make hamburger keyboard activatable with space (32) and enter (13)
  const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      handleClick();
    }
  }

  return (
    <StyledHamburger className={`${expanded ? 'Hamburger expanded' : 'Hamburger'}`} onClick={handleClick} loggedIn={loggedIn} onKeyUp={handleKeyPress} aria-label="Main menu" aria-expanded={expanded ? true : false}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </StyledHamburger>
  )
}

export default Hamburger
