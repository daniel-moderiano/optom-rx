import styled from "styled-components";

const StyledDrugAutocomplete = styled.fieldset`
  position: relative;
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


  button {
    position: absolute;
    right: 0.3rem;
    top: 6rem;
    background-color: #fff;
    border: none;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    text-decoration: underline;
    font-family: var(--font-stack);
    line-height: 0.8rem;

    &:hover {
      cursor: pointer;
    }
  }
`

export { StyledDrugAutocomplete }