// Code created using guide by Franciso Mendes @ https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd

import { useState } from "react";
import useTable from "../../hooks/useTable";
import TableFooter from "../utils/TableFooter/TableFooter";
import { Link } from "react-router-dom";
import { useFormatting } from '../../hooks/useFormatting';

const ScriptsTable = ({ data, rowsPerPage }) => {
  // Start on page 1
  const [page, setPage] = useState(1);
  // Gather the data slices for each page and the range of pages needed 
  const { dataSlice, range } = useTable(data, page, rowsPerPage);

  const { formatDrug } = useFormatting();

  return (
    <>
      <table className="table" aria-describedby="Scripts__description">
        <thead className="tableRowHeader">
          <tr role="row">
            <th role="columnheader" className="tableHeader" scope="col">Script ID</th>
            <th role="columnheader" className="tableHeader" scope="col">Medication</th>
            <th role="columnheader" className="tableHeader" scope="col">Date prescribed</th>
          </tr>
        </thead>
        <tbody>
          {dataSlice.map((script) => (
            <tr role="row" className="tableRowItems" key={script.scriptID}>
              <td role="cell" data-title="Script ID" className="tableCell">
                <Link to={`/scripts/${script.scriptID}`} state={ {...script} }>{script.scriptID}</Link>
              </td>
              <td role="cell" data-title="Medication" className="tableCell">{formatDrug(script)}</td>
              <td role="cell" data-title="Date prescribed" className="tableCell">{script.date}</td>
            </tr>
          ))}
        </tbody>
      </table>     
      <TableFooter pages={range} slice={dataSlice} setPage={setPage} page={page} />
    </>
  );
};

export default ScriptsTable;
