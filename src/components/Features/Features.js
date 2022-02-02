import { StyledFeatures } from "./Features.styled";
import { useEffect } from "react";

const Features = ({ setPage }) => {
  // Adjust current page for accessibility and styling
  useEffect(() => {
    setPage('features');
  }, [setPage])

  return (
    <StyledFeatures>
      Features page
    </StyledFeatures>
  );
};

export default Features;
