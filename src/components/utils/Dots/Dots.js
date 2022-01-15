import { StyledDots } from "./Dots.styled";

const Dots = ({ color }) => {
  return (
    <StyledDots className='Dots'>
      <span className={`Circle ${color ? color : ''}`}></span>
      <span className={`Circle ${color ? color : ''}`}></span>
      <span className={`Circle ${color ? color : ''}`}></span>
      <span className={`Circle ${color ? color : ''}`}></span>
    </StyledDots>
  )
}

export default Dots;
