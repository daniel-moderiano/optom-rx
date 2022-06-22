import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormatting } from '../../hooks/useFormatting';
import { StyledPaginate } from "./Pagination.styled";

const ScriptsTable = ({ scripts, scriptsPerPage }) => {
  const { formatDrug } = useFormatting();

  // Initialise empty list of current scripts
  const [currentScripts, setCurrentScripts] = useState([]);

  // Indicates total number of pages required to display all data
  const [pageCount, setPageCount] = useState(0);

  // Initialise the slice of items at the beginning (index 0)
  const [scriptsSliceStart, setScriptsSliceStart] = useState(0);

  // Dynamically adjust current items to be displayed when user changes pages
  useEffect(() => {
    // Calculate the end index of the items slice required for this page
    const scriptsSliceEnd = scriptsSliceStart + scriptsPerPage;

    // Slice the items array using the calculated start and end points. This becomes the currently displayed items
    setCurrentScripts(scripts.slice(scriptsSliceStart, scriptsSliceEnd));

    // Calculate the total pages required to display all the items (to the nearest whole integer)
    setPageCount(Math.ceil(scripts.length / scriptsPerPage));
  }, [scriptsSliceStart, scriptsPerPage, scripts]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    // Adjust the new index to slice the data at for the newly selected page
    const newDataSliceStart = (event.selected * scriptsPerPage) % scripts.length;
    setScriptsSliceStart(newDataSliceStart);
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
          {currentScripts.map((script, index) => (
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
      <StyledPaginate
        breakLabel="..."
        nextLabel="&raquo;"
        previousLabel="&laquo;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default ScriptsTable;
