import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const StyledPaginate = styled(ReactPaginate).attrs({
  // You can redifine classes here, if you want.
  activeClassName: 'active', // default to "disabled"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;

  li a {
    font-family: var(--font-stack-segoe);
    font-size: 0.85rem;
    border: none;
    padding: 3px 10px 5px 10px;
    margin: 2px;
    border-radius: 8px;
    cursor: pointer;

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

  li.previous a,
  li.next a,
  li.break a
 {
    background-color: #fff;
    border: none;
    font-size: 1rem;
    padding: 0 9px 4px 9px; 
    &:focus {
      outline: 2px solid #104362;
      outline-offset: 1px;
    }
  }

  li.active a {
    color: white;
    background: #31776f;
  }

  li.disabled a {
    color: grey;
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
