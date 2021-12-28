import styled from "styled-components";

const StyledScripts = styled.div`
  margin: 3rem 0;
  background-color: #FFFFFF;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  padding: 2rem 5.5rem 4rem 5.5rem;
  width: 90%;

  .Scripts__title {
    font-family: var(--font-stack-myriad);
    font-weight: 400;
    color: var(--title-color);
    font-size: 2.5rem;
    padding: 0;
    margin: 1rem 0 0.75rem 0;
    place-self: flex-start;
  }

  .Scripts__description {
    margin: 0;
  }

  .Scripts__list {
    list-style: none;
    margin: 0;
    padding: 0;

    .Scripts__list-item {
      font-size: 0.9rem;
      background-color: #f8f8f8;
      display: grid;
      grid-template-columns: 5.5rem 1fr 5.5rem;
      margin: 0.2rem 0;
    }
  }

    /* Style the button that is used to open and close the collapsible content */
  .collapsible {
    /* background-color: #eee; */
    cursor: pointer;
    font-size: 1rem;
    padding: 0.4rem 0 0.5rem 1rem;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-family: var(--font-stack-segoe);
    font-weight: bold;
    height: 1rem;
    position: relative;
    display: flex;

    .icon {
      height: 1rem;
      width: 1rem;
    }

    .up {
      transform: rotate(180deg);
    }
  }

  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  .active, .collapsible:hover {
    background-color: #ccc;
  }

  /* Style the collapsible content. Note: hidden by default */
  .indications__content {
    padding: 0 1rem;
    overflow: hidden;
    background-color: #f0f0f0;
    display: none;
    font-size: 0.9rem;

    .indication__main {
      margin: 1rem 0;
    }
    
    ul {
      list-style-type: square;
      padding-left: 2rem;
      /* margin: 0; */

      li {
        margin: 1rem 0;
      }
    }

    .indication__clinical, .indication__and {
      font-weight: bold;
    }

    &.expand {
      display: block;
    }

  }


`

export { StyledScripts }