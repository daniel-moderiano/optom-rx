import { StyledButton } from "./Button.styled"

const Button = ({ text, type }) => {
  return (
    <StyledButton className={`button--${type} button`}>
      {text}
    </StyledButton>
  )
};

Button.defaultProps = {
  type: 'primary',
}

export default Button
