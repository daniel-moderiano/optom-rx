import { StyledButton } from "./Button.styled"

const Button = ({ children, type, design, handleClick, classLabel }) => {
  return (
    <StyledButton className={`button--${design} button ${classLabel}`} onClick={handleClick} type={type}>
      {children}
    </StyledButton>
  )
};

Button.defaultProps = {
  design: 'primary',
  type: 'button',
}

export default Button
