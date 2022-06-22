import { useState, useEffect } from "react";

// This hook controls the display of items on certain pages given a data set. It also provides parameters to be used in conjunction with react-pagination. Use this for the scripts and prescribers table
const usePagination = (items, itemsPerPage) => {

  // Initialise empty list of current scripts
  const [currentItems, setCurrentItems] = useState([]);

  // Indicates total number of pages required to display all data
  const [pageCount, setPageCount] = useState(0);

  // Initialise the slice of items at the beginning (index 0)
  const [itemsSliceStart, setItemsSliceStart] = useState(0);

  // Dynamically adjust current items to be displayed when user changes pages
  useEffect(() => {
    // Calculate the end index of the items slice required for this page
    const itemsSliceEnd = itemsSliceStart + itemsPerPage;

    // Slice the items array using the calculated start and end points. This becomes the currently displayed items
    setCurrentItems(items.slice(itemsSliceStart, itemsSliceEnd));

    // Calculate the total pages required to display all the items (to the nearest whole integer)
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemsSliceStart, itemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    // Adjust the new index to slice the data at for the newly selected page
    const newItemsSliceStart = (event.selected * itemsPerPage) % items.length;
    setItemsSliceStart(newItemsSliceStart);
  };

  return { currentItems, pageCount, handlePageClick }
};

export default usePagination;