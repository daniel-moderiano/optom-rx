import { StyledDots } from "./Dots.styled"

const Dots = ({ color }) => {
  return (
    <StyledDots id="Dots">
      <span className={color}></span>
      <span className={color}></span>
      <span className={color}></span>
      <span className={color}></span>
    </StyledDots>
  )
}

export default Dots
