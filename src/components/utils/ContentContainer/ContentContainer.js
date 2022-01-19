import { StyledContentContainer } from "./ContentContainer.styled"

const ContentContainer = ({ children, earlyPadding }) => {
  return (
    <StyledContentContainer className="ContentContainer" earlyPadding={earlyPadding}>
      {children}
    </StyledContentContainer>
  )
}

export default ContentContainer
