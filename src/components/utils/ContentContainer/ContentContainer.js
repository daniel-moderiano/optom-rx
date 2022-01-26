import { StyledContentContainer } from "./ContentContainer.styled"

// Used to house main page content
const ContentContainer = ({ children, earlyPadding }) => {
  return (
    <StyledContentContainer className="ContentContainer" earlyPadding={earlyPadding}>
      {children}
    </StyledContentContainer>
  )
}

export default ContentContainer
