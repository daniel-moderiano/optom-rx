// Code created using guide by Franciso Mendes @ https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd

import { useState, useEffect } from "react";
import useTable from "../../hooks/useTable";
import TableFooter from "../utils/TableFooter/TableFooter";
import { Link } from "react-router-dom";
import { useFormatting } from '../../hooks/useFormatting';
import ReactPaginate from "react-paginate";

const ScriptsTable = ({ data: items, itemsPerPage }) => {
  // Start on page 1
  const [page, setPage] = useState(1);
  // Gather the data slices for each page and the range of pages needed 
  // const { dataSlice, range } = useTable(data, page, rowsPerPage);

  const { formatDrug } = useFormatting();

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
  }, [itemsSliceStart, itemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    // Adjust the new index to slice the data at for the newly selected page
    const newDataSliceStart = (event.selected * itemsPerPage) % items.length;
    setItemsSliceStart(newDataSliceStart);
  };


  return (
    <>
      <table className="table data-table" aria-describedby="Scripts__description">
        <thead className="tableRowHeader">
          <tr role="row">
            <th role="columnheader" className="tableHeader" scope="col">Script ID</th>
            <th role="columnheader" className="tableHeader" scope="col">Medication</th>
            <th role="columnheader" className="tableHeader" scope="col">Date prescribed</th>
          </tr>
        </thead>
        <tbody>
          {/* Switch key back to key={script.scriptID} once testing is complete */}
          {currentItems.map((script, index) => (
            <tr role="row" className="tableRowItems" key={index}>
              <td role="cell" data-title="Script ID" className="tableCell">
                <Link to={`/scripts/${script.scriptID}`} state={{ ...script }}>{script.scriptID}</Link>
              </td>
              <td role="cell" data-title="Medication" className="tableCell">{formatDrug(script)}</td>
              <td role="cell" data-title="Date prescribed" className="tableCell">{script.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      {/* <TableFooter pages={range} slice={dataSlice} setPage={setPage} page={page} /> */}
    </>
  );
};

export default ScriptsTable;
