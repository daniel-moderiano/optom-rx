import { useState } from "react";
import useTable from "../../hooks/useTable";
import TableFooter from "../utils/TableFooter/TableFooter";
import { StyledTable } from "./Table.styled";


const Table = ({ data, rowsPerPage }) => {
  // Start on page 1
  const [page, setPage] = useState(1);
  // Gather the data slices for each page and the range of pages needed 
  const { dataSlice, range } = useTable(data, page, rowsPerPage);

  return (
    <StyledTable className="table">
      <thead className="tableRowHeader">
        <tr>
          <th className="tableHeader">Name</th>
          <th className="tableHeader">Location</th>
          <th className="tableHeader actions-header">Actions</th>
        </tr>
      </thead>

      {data ? (<>
        <tbody>
          {dataSlice.map((provider) => (
            <tr className="tableRowItems" key={provider.id}>
              <td className="tableCell">{provider.fullName}</td>
              <td className="tableCell">{formatLocation(provider.practiceName, provider.streetAddress, provider.suburb)}</td>

              <td className="tableCell actions-cell">
                
                <Link className="table__action edit" to={`/edit/${provider.id}`}>Edit</Link>
                <button className="table__action delete" onClick={() => {
                  setShowModal(true);
                  setSelectedProvider({
                    fullName: provider.fullName,
                    location: formatLocation(provider.practiceName, provider.streetAddress, provider.suburb),
                    id: provider.id,
                  })
                }}>Delete</button>
                <button className={`${(provider.default && !isPending) ? 'table__action default--selected' : 'table__action default'}`} onClick={(event) => setAsDefault(providers, provider.id)}>
                  {isPending ? (
                    'Updating...'
                    ) : (
                    `${provider.default ? 'Remove default' : 'Make default'}`
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <TableFooter pages={range} slice={dataSlice} setPage={setPage} page={page} />
      </>) : (
        <tbody>
          <tr className="tableRowItems" >
            <td colSpan="3" className="tableCell">No data present</td>
          </tr>
        </tbody>
      )}

      
    </StyledTable>
  );
};

export default Table;
