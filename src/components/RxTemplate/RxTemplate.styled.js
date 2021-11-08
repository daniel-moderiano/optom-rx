import styled from "styled-components";

const StyledRxTemplate = styled.div`
  position: relative;

  img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    /* This pixel value is specific for the image in question, and is a veyr close approximation to a real PBS form */
    width: 902px;
    opacity: 0.5;
    border: 1px solid black;
    margin: 0;
    padding: 0;
  }
  /* box-sizing: border-box; */
  border: 1px solid black;
  padding: 0;
  margin: 0;
  width: 902px;
  height: 1275px;

  .container {
    position: relative;
    width: 100%;
  }


  .provider-upper {
    position: absolute;
    width: 100%;
  }

  .provider__contact-upper {
    position: absolute;
    left: 90px;
    top: 20px;
    font-size: 15px;
  }

  .provider__contact-lower {
    position: absolute;
    left: 90px;
    top: 102px;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    width: 300px;
  }

  .patient {
    position: absolute;
    display: none;
  }

  .miscellaneous {
    position: absolute;
    display: none;
  }

  .medication {
    position: absolute;
    display: none;
  }

  .provider-lower {
    position: absolute;
    display: none;
  }

  .provider__fullName {
    font-weight: bold;
  }
`

export { StyledRxTemplate }