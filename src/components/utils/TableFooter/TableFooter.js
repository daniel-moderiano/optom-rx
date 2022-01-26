// Code created using guide by Franciso Mendes @ https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd

import { useEffect } from "react";
import { StyledTableFooter } from "./TableFooter.styled";

// The table footer will control the display of page buttons, which is dependent on the props passed
// ! If the number of pages icnrease, this component grows and grows in width. Not a scalable solution 
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

  return (
    <StyledTableFooter className="TableFooter">
      <button className="arrow arrow-left" onClick={decrementPage}>&laquo;</button>
      {/* For each page, create a page button numbered by index */}
      {pages.map((pageNum, index) => (
        // OnClick function allows setting of active class + displaying relevant data slice
        <button
          key={index}
          className={`button ${
            page === pageNum ? 'activeButton' : 'inactiveButton'
          }`}
          onClick={() => setPage(pageNum)}
        >
          {pageNum}
        </button>
      ))}
      <button className="arrow arrow-right" onClick={incrementPage}>&raquo;</button>
    </StyledTableFooter>
  );
};

export default TableFooter;