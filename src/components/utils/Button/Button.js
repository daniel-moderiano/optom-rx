import { StyledButton } from "./Button.styled"

const Button = ({ children, type, handleClick }) => {
  return (
    <StyledButton className={`button--${type} button`} onClick={handleClick}>
      {children}
    </StyledButton>
  )
};

Button.defaultProps = {
  type: 'primary',
}

export default Button
