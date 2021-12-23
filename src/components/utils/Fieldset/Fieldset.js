import StyledFieldset from "./Fieldset.styled"

const Fieldset = ({ className, legend, children }) => {
  return (
    <StyledFieldset className={className}>
      <legend>{legend}</legend>
      <div className="container">
        {children}
      </div>
    </StyledFieldset>
  )
}

export default Fieldset
