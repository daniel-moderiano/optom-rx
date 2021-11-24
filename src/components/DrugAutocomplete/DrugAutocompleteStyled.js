import styled from "styled-components";

const StyledDrugAutocomplete = styled.fieldset`
  position: relative;
  background-color: #fff;
  border: none;
  margin: 0;
  padding: 0;
  width: 24rem;

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

  /* Show and hide classes control the sub-fields display (i.e. fields other than autocomplete) */
  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  .autocomplete-group {
    position: relative;
    /* This will affect 'Enter Manually' button placement */
    height: 5.8rem;
  }

  button {
    position: absolute;
    right: 0.3rem;
    bottom: 0;
    background-color: #fff;
    border: none;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  }
`

export { StyledDrugAutocomplete }