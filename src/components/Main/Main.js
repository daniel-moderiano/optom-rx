import { StyledMain } from "./Main.styled"

const Main = ({ children, user, url }) => {
  return (
    <StyledMain className="Main" role="main" user={user} url={url}>
      {children}
    </StyledMain>
  )
}

export default Main
