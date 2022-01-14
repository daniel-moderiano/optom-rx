import styled from "styled-components";

const StyledDrugAutocomplete = styled.div`
  position: relative;
  border: none;
  margin: 0;
  padding: 0;
  width: 26rem;


  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .items-list {
    position: absolute;
    z-index: 10;
    width: 155%;
    font-size: 0.9rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    /* max-height: 16rem;  // Use multiples of 2rem while the item height remains 2rem */
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
      /* height: 2rem; */
      text-align: left;
      line-height: 1.9rem;
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
    justify-content: space-between;
    width: 26rem;
    
    /* Tooltip container */
    .tooltip {
      position: relative;
      display: inline-block;
      line-height: 0;

      .question-icon {
        opacity: 0.5;
        width: 22px;
        /* margin-top: 0.3rem; */
      }

      .question-icon:hover {
        /* cursor: pointer; */
        opacity: 1.0;
      }

      .tooltip-text {
        visibility: hidden;
        width: 15.5rem;
        background-color: #3D3D3D;
        color: #fff;
        text-align: left;
        font-size: 0.9rem;
        padding: 0.6rem 0.75rem 0.75rem 0.9rem;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        left: 125%;
        top: 50%;
        margin-top: -0.05rem;
        transform: translateY(-50%);
        line-height: normal;

        /* Fade in tooltip */
        opacity: 0;
        transition: opacity 0.3s;

        a {
          color: #c9d5dc;
        }

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

    .hide {
      display: none;
    }

    .show {
      display: inline-block;
    }
  }
  

  button {
    position: absolute;
    right: 0.3rem;
    /* left: 100%; */
    top: 5.6rem;
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

    &:focus {
      outline: 2px solid #104362;
      outline-offset: 2px;
    }
  }

  /* Landscape phones and down */
  @media (max-width: 590px) { 
    width: 100%;
    max-width: 26rem;

    .brandOnly-container {
      /* display: flex;
      align-items: center;
      justify-content: space-between; */
      max-width: 26rem;
      width: 100%;
    }

    #activeIngredient-alert {
      width: 50%;
    }

    #postcode-alert {
      /* The limiting factor on width responsiveness */
      width: 12rem;
    }
  }
 
`

export { StyledDrugAutocomplete }