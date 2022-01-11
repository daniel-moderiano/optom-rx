// Code created using guide by Franciso Mendes @ https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd

import { useState } from "react";
import useTable from "../../hooks/useTable";
import { StyledTable } from "./Table.styled";
import TableFooter from "../utils/TableFooter/TableFooter";
import { Link } from "react-router-dom";


const Table = ({ data, rowsPerPage, deleteFavourite }) => {
  // Start on page 1
  const [page, setPage] = useState(1);
  // Gather the data slices for each page and the range of pages needed 
  const { dataSlice, range } = useTable(data, page, rowsPerPage);

  // Create a more UI friendly summary of drug name +/- brand
  const formatDrug = (script) => {
    const capitalised = script.activeIngredient[0].toUpperCase() + script.activeIngredient.substring(1);
    // Brand name only
    if (script.brandOnly) {
      if (!capitalised.includes('eye')) {
        if (capitalised.includes('spray')) {
          return `${script.brandName} ${capitalised.substr(capitalised.indexOf('spray'), 5)}`;
        } else {
          return script.brandName;
        }
      } else {
        return `${script.brandName} ${capitalised.substr(capitalised.indexOf('eye'))}`;
      }
    }    
    // Brand name NOT to be included
    if (!script.includeBrand) {
      return capitalised;
    }
    // Brand name included in addition to active ingredient
    if (!capitalised.includes('eye')) {
      if (capitalised.includes('spray')) {
        return `${capitalised.replace('spray', `(${script.brandName}) spray`)}`;
      } else {
        return `${capitalised.replace(',', ` (${script.brandName}),`)}`;
      }
    } else {
      return `${capitalised.replace('eye', `(${script.brandName}) eye`)}`;
    }
  };

  

  return (
    <>
      <StyledTable className="table">
        {/* Preset table header. Note this reduces the re-usability of the Table component, but not the TableFooter */}
        <thead className="tableRowHeader">
          <tr>
            <th className="tableHeader">Script name</th>
            {/* <th className="tableHeader">Name</th> */}
            <th className="tableHeader">Action</th>
          </tr>
        </thead>
        {/* Preset table data, must specify this according to the data that is being passed in */}
        <tbody>
          {dataSlice.map((script) => (
            <tr className="tableRowItems" key={script.scriptID}>
              <td className="tableCell medication-cell">
                {/* <div className="params">
                  <div className="drug">{formatDrug(script)}</div>
                  <div className="dosage">Dosage: {script.dosage}</div>
                </div> */}
                <div className="repeats">{(script.customName === "") ? formatDrug(script) : script.customName}</div>
                </td>
              {/* <td className="tableCell">
                <div className="params">
                  <div className="quantity">Quantity: {script.quantity}</div>
                  <div className="repeats">Repeats: {script.repeats}</div>               
                </div>
              </td> */}
              <td className="tableCell">
                <div className="actions">
                <Link className="" to='/form' state={{ 
                  newRx: true,
                  rePrescribe: true,
                  scriptData: script,
                }}>Prescribe</Link>
                <button onClick={() => deleteFavourite(script)}>Delete</button>
                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <TableFooter pages={range} slice={dataSlice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
