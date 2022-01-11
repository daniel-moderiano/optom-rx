import { StyledMain } from "./Main.styled"

const Main = ({ children }) => {
  return (
    <StyledMain className="Main" role="main">
      {children}
    </StyledMain>
  )
}

export default Main
