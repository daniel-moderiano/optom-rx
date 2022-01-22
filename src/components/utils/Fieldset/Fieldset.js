import StyledFieldset from "./Fieldset.styled";

const Fieldset = ({ className, legend, children, pending }) => {
  return (
    <StyledFieldset className={className}>
      <legend className="visually-hidden">{legend}</legend>
      <span id="legend" className="legend-label">{legend}</span>
      <div className="fieldset-container">
        {children}
      </div>
    </StyledFieldset>
  )
}

export default Fieldset
