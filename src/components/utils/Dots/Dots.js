import { StyledDots } from "./Dots.styled"

const Dots = ({ color }) => {
  return (
    <StyledDots className="Dots">
      <span className={color}></span>
      <span className={color}></span>
      <span className={color}></span>
      <span className={color}></span>
    </StyledDots>
  )
}

export default Dots
