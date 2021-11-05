import styled from "styled-components";

const StyledDrugAutocomplete = styled.div`
  position: relative;
  background-color: #fff;
  width: 600px;

  input {
    width: 100%;
  }
 
  .items-list {
    position: absolute;
    z-index: 10;
    width: 100%;
    font-size: 0.9rem;

    div {
      cursor: pointer;
      background-color: #fff;
    }

    div:hover {
      background-color: #e9e9e9;
    }

    .active {
      background-color: dodgerblue;
      color: #fff;
    }
  }
`

export { StyledDrugAutocomplete }