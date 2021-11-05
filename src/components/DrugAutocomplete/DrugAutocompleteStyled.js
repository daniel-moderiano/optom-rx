import styled from "styled-components";

const StyledDrugAutocomplete = styled.div`
  position: relative;
  background-color: #fff;
  width: 400px;

  input {
    width: 100%;
  }
 
  .items-list {
    position: absolute;
    z-index: 10;
    width: 100%;

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