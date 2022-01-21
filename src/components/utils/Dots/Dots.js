import { StyledDots } from "./Dots.styled";

const Dots = ({ color }) => {
  return (
    <StyledDots className='Dots' role="status">
      <span className="sr-only">Loading...</span>
      <div className={`Circle ${color ? color : ''}`}></div>
      <div className={`Circle ${color ? color : ''}`}></div>
      <div className={`Circle ${color ? color : ''}`}></div>
      <div className={`Circle ${color ? color : ''}`}></div>
    </StyledDots>
  )
}

export default Dots;
