import Spinner from "../Spinner/Spinner"
import { StyledLoadOverlay } from "./LoadOverlay.styled"

// Designed as a semi-transparent overlay with loading indicator to block UI controls until loaded
const LoadOverlay = () => {
  return (
    <StyledLoadOverlay className="Overlay">
      <Spinner />
    </StyledLoadOverlay>
  )
}

export default LoadOverlay
