import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import testScripts from './testScripts';
import { StyledPaginate } from './Pagination.styled';

// Example items, to simulate fetching from another resources.
// const items = testScripts;
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// Essentially takes a 'slice' of the items and renders it
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

export function PaginatedItems({ itemsPerPage }) {
  // Initialise empty list of currentItems 
  const [currentItems, setCurrentItems] = useState([]);

  // Keeps track of the total pages required. Will be dynamically set based on teh total size of the items and items per page
  const [pageCount, setPageCount] = useState(0);

  // Initialise the slice of items at the beginning (index 0)
  const [itemsSliceStart, setItemsSliceStart] = useState(0);
  useEffect(() => {
    // Calculate the end index of the items slice required for this page
    const itemsSliceEnd = itemsSliceStart + itemsPerPage;

    // Slice the items array using the calculated start and end points. This becomes the currently displayed items
    setCurrentItems(items.slice(itemsSliceStart, itemsSliceEnd));

    // Calculate the total pages required to display all the items (to the nearest whole integer)
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemsSliceStart, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    // Adjust the new index to slice the data at for the newly selected page
    const newDataSliceStart = (event.selected * itemsPerPage) % items.length;
    setItemsSliceStart(newDataSliceStart);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <StyledPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
