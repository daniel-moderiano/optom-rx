import { Link } from "react-router-dom";
import { useFormatting } from '../../hooks/useFormatting';
import { StyledPaginate } from "./Pagination.styled";
import usePagination from "../../hooks/usePagination";

const ScriptsTable = ({ scripts, scriptsPerPage }) => {
  const { formatDrug } = useFormatting();

  // This hook controls both the display of scripts on each page, and the numbered pagination controls
  const { currentItems: currentScripts, pageCount, handlePageClick } = usePagination(scripts, scriptsPerPage);

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

      <div className="pagination">
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
      </div>
    </>
  );
};

export default ScriptsTable;
