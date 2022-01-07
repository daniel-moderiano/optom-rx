import Spinner from "../Spinner/Spinner"
import { StyledLoadOverlay } from "./LoadOverlay.styled"

const LoadOverlay = () => {
  return (
    <StyledLoadOverlay className="Overlay">
      <Spinner />
    </StyledLoadOverlay>
  )
}

export default LoadOverlay
