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
    width: 47rem;
    font-size: 0.9rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    max-height: 16rem;  // Use multiples of 2rem while the item height remains 2rem
    overflow-y: hidden;  // Scroll or hidden, need to decide which is more appropriate

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
      overflow: visible;
      white-space: normal;
    }

    .active {
      background-color: dodgerblue;
      color: #fff;
      overflow: visible;
      white-space: normal;
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

    .brand-checkbox {
      margin-top: 1.25rem;
    }
  }

  .activeIngredient {
    margin-bottom: 1.5rem;
  }

  .checkbox {
    margin: 0.5rem 0;
  }

  .brandOnly-container {
    display: flex;
    align-items: center;
    width: 24rem;
    
    /* Tooltip container */
    .tooltip {
      position: relative;
      display: inline-block;

      .question-icon {
        opacity: 0.5;
        width: 22px;
        margin-top: 0.25rem;
      }

      .question-icon:hover {
        /* cursor: pointer; */
        opacity: 1.0;
      }

      .tooltip-text {
        visibility: hidden;
        width: 120px;
        background-color: #555;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        left: 125%;
        margin-top: -0.1rem;

        /* Fade in tooltip */
        opacity: 0;
        transition: opacity 0.3s;

        /* Tooltip arrow */
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 100%;
          margin-top: -4px;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: transparent #555 transparent transparent;
        }
      }


      /* Show the tooltip text when you mouse over the tooltip container */
      &:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
      }
    }

    
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