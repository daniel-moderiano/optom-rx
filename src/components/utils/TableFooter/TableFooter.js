// Code created using guide by Franciso Mendes @ https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd

import { useEffect } from "react";
import { StyledTableFooter } from "./TableFooter.styled";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { PaginatedItems } from "../../Scripts/Pagination";

const MyPaginate = styled(ReactPaginate).attrs({
  // You can redifine classes here, if you want.
  activeClassName: 'active', // default to "disabled"
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  /* padding: 0 5rem; */

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


// The table footer will control the display of page buttons, which is dependent on the props passed
// ! As the number of pages increases, this component grows and grows in width. Not a scalable solution 
const TableFooter = ({ pages, setPage, page, slice }) => {
  // If the current page contains only one element and it is deleted, move to the previous page
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  // Arrow button navigation
  const incrementPage = () => {
    // If not already on the last page, increment
    if (page !== pages.length) {
      setPage(page + 1)
    }
  }

  const decrementPage = () => {
    // If not on the first page, decrement
    if (page > 1) {
      setPage(page - 1)
    }
  }

  useEffect(() => {
    console.log(`Current page is ${page}`);
  })

  const handlePageClick = (event) => {
    console.log(event.selected);
    setPage(event.selected)
  }


  // A page limit of 6 is chosen because this will span the full length of the smallest mobile screen. 

  return (
    <StyledTableFooter className="TableFooter">
      <button className="arrow arrow-left" onClick={decrementPage}>&laquo;</button>
      {pages.map((pageNum, index) => (
        <button
          key={index}
          className={`button ${page === pageNum ? 'activeButton' : 'inactiveButton'
            }`}
          onClick={() => setPage(pageNum)}
        >
          {pageNum}
        </button>
      ))}
      <button className="arrow arrow-right" onClick={incrementPage}>&raquo;</button>
      <MyPaginate
        breakLabel="..."
        nextLabel="&raquo;"
        previousLabel="&laquo;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pages.length}
        renderOnZeroPageCount={null}
      />
      <PaginatedItems itemsPerPage={4} />
    </StyledTableFooter>
  )

};

export default TableFooter;