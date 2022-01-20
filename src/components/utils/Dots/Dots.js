import { StyledDots } from "./Dots.styled";

const Dots = ({ color }) => {
  return (
    <StyledDots className='Dots' role="status">
      <span className="sr-only">Loading...</span>
      <span className={`Circle ${color ? color : ''}`}></span>
      <span className={`Circle ${color ? color : ''}`}></span>
      <span className={`Circle ${color ? color : ''}`}></span>
      <span className={`Circle ${color ? color : ''}`}></span>
    </StyledDots>
  )
}

export default Dots;
