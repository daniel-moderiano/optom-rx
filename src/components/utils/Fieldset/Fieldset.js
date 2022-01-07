import StyledFieldset from "./Fieldset.styled";


const Fieldset = ({ className, legend, children, pending }) => {
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
