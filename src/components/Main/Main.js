import { StyledMain } from "./Main.styled"

const Main = ({ children, currentPage }) => {
  return (
    <StyledMain className={currentPage === 'homepage' ? 'home-main' : 'Main'} role="main">
      {children}
    </StyledMain>
  )
}

export default Main
