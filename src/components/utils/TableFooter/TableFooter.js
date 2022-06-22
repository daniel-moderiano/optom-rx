// Code created using guide by Franciso Mendes @ https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd

import { useEffect } from "react";
import { StyledTableFooter } from "./TableFooter.styled";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const MyPaginate = styled(ReactPaginate).attrs({
  // You can redifine classes here, if you want.
  activeClassName: 'active', // default to "disabled"
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
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


  // A page limit of 6 is chosen because this will span the full length of the smallest mobile screen. 

  return (
    <StyledTableFooter className="TableFooter">
      {/* <button className="arrow arrow-left" onClick={decrementPage}>&laquo;</button>
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
      <button className="arrow arrow-right" onClick={incrementPage}>&raquo;</button> */}
      <MyPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(event) => setPage(event.selected)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pages.length}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </StyledTableFooter>
  )

};

export default TableFooter;