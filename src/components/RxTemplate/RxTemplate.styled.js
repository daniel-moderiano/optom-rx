import styled from "styled-components";

const StyledRxTemplate = styled.div`
  img {
    position: absolute;
    z-index: -1;
    /* This pixel value is specific for the image in question, and is a veyr close approximation to a real PBS form */
    width: 902px;
    opacity: 0.5;
    border: 1px solid black;
  }
  box-sizing: border-box;
  border: 1px solid black;
  padding: 0;
  margin: 0;

  .provider__fullName {
    font-weight: bold;
  }
`

export { StyledRxTemplate }