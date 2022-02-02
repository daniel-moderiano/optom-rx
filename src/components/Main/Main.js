import { StyledMain } from "./Main.styled"

const Main = ({ children, currentPage }) => {
  return (
    <StyledMain className="Main" role="main" currentPage={currentPage}>
      {children}
    </StyledMain>
  )
}

export default Main
