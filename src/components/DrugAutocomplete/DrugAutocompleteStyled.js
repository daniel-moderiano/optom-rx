import styled from "styled-components";

const StyledDrugAutocomplete = styled.div`
  position: relative;
  width: 26rem;

  .items-list {
    position: absolute;
    z-index: 10;
    width: 155%;
    font-size: 0.9rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    overflow-y: hidden; 

    .item {
      cursor: pointer;
      background-color: #fff;
      padding: 0 4px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      border-top: 1px solid #e6e6e6;
      width: 100%;
      text-align: left;
      line-height: 1.9rem;

      .item-brand, .item-active, .item-bold {
        pointer-events: none;
      }
    }

    .item:hover {
      background-color: #e9e9e9;
      overflow: visible;
      white-space: normal;
      color: black;
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
    display: none !important;
  }

  .show-list {
    display: block;
  }

  .drug-collapse {
    flex-direction: column;
    padding-bottom: 0.75rem;

    .brand-checkbox {
      margin-top: 0.85rem;
    }
  }

  .activeIngredient {
    margin-bottom: 1rem;
  }

  .checkbox {
    margin: 0.5rem 0;
  }

  .compounded {
    margin-bottom: 0.85rem;
  }

  .brandOnly-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 26rem;
    
    .show {
      display: inline-block;
    }
  }
  
  .drug-expand {
    position: absolute;
    right: 0.3rem;
    top: 5.6rem;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    font-family: var(--font-stack-segoe);
    line-height: 0.8rem;
    color: #48515B;
    border-radius: 2px;

    &:hover {
      cursor: pointer;
      color: #1B1E22;
    }    

    &:focus {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }

    &:focus:not(:focus-visible) {
      outline: none
    }

    &:focus-visible {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }
  }

  /* Specific query as the above items list styling hits a width limit here */
  @media (max-width: 800px) {
    .items-list {
      width: 100%;
    }
  }

  /* Landscape phones/portrait tables */
  @media (max-width: 590px) { 
    width: 100%;
    max-width: 26rem;

    .brandOnly-container {
      max-width: 26rem;
      width: 100%;
    }

    #activeIngredient-alert {
      width: 55%;
    }

    #postcode-alert {
      /* The limiting factor on width responsiveness */
      width: 12rem;
    }
  }

  /* Portrait phones */
  @media (max-width: 420px) {
    .drug-collapse {
      margin-top: 2.25rem;
    }
  }
`

export { StyledDrugAutocomplete }