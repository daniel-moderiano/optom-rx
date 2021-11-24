import StyledFieldset from "./Fieldset.styled"

const Fieldset = ({ className, legend, children }) => {
  return (
    <StyledFieldset className={className}>
      <legend>{legend}</legend>
      {children}
    </StyledFieldset>
  )
}

export default Fieldset
