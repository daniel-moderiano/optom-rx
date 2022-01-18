import { StyledButton } from "./Button.styled"

const Button = ({ children, type, handleClick, classLabel }) => {
  return (
    <StyledButton className={`button--${type} button ${classLabel}`} onClick={handleClick}>
      {children}
    </StyledButton>
  )
};

Button.defaultProps = {
  type: 'primary',
}

export default Button
