import styled from "styled-components";

const StyledDrugAutocomplete = styled.fieldset`
  position: relative;
  border: none;
  margin: 0;
  padding: 0;
  width: 24rem;

  .items-list {
    position: absolute;
    z-index: 10;
    width: 100%;
    font-size: 0.9rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    max-height: 16rem;  // Use multiples of 2rem while the item height remains 2rem
    overflow-y: scroll;  // Scroll or hidden, need to decide which is more appropriate

    .item {
      cursor: pointer;
      background-color: #fff;
      padding: 0 4px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      border-top: 1px solid #e6e6e6;
      width: 100%;
      height: 2rem;
      text-align: left;
      line-height: 1.9rem;
    }

    .item:hover {
      background-color: #e9e9e9;
    }

    .active {
      background-color: dodgerblue;
      color: #fff;
    }

    .list-footer {
      height: 1rem;
    }
  }

  /* Show and hide classes control the sub-fields display (i.e. fields other than autocomplete) */
  .show {
    display: flex;
  }

  .hide {
    display: none;
  }

  .show-list {
    display: block;
  }

  .drug-collapse {
    flex-direction: column;
    padding-bottom: 0.75rem;

    #brandName {
      margin-bottom: 0.75rem;
    }
  }

  .activeIngredient {
    margin-bottom: 1.5rem;
  }

  .checkbox {
    margin: 0.5rem 0;
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
    font-family: var(--font-stack-segoe);
    line-height: 0.8rem;

    &:hover {
      cursor: pointer;
    }
  }

 
`

export { StyledDrugAutocomplete }