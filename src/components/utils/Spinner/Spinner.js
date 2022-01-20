import { StyledSpinner } from "./Spinner.styled"

const Spinner = () => {
  return (
    <StyledSpinner className="Spinner" role="status">
      <span className="sr-only">Loading...</span>
    </StyledSpinner>
  )
}

export default Spinner
