import { StyledMain } from "./Main.styled"

const Main = ({ children }) => {
  return (
    <StyledMain className="Main">
      {children}
    </StyledMain>
  )
}

export default Main
