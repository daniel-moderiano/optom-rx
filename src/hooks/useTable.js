// Code created using guide by Franciso Mendes @ https://dev.to/franciscomendes10866/how-to-create-a-table-with-pagination-in-react-4lpd

import { useState, useEffect } from "react";

// Given an array of data, calculate the number of pages required to tabulate/display the data, with a specified rows per page requirement
const calculatePagesRequired = (data, rowsPerPage) => {
  const pages = [];
  // Math.ceil will round up to the nearest integer, i.e. how many pages required to display data
  const pagesRequired = Math.ceil(data.length / rowsPerPage);

  // An array is used here to enable iteration through later to map the page numbers onto the UI
  for (let i = 1; i <= pagesRequired; i++) {
    pages.push(i);
  }
  return pages;
};

// Take a slice of the data array to display on a specified page number, based on the specified max rows per page
const sliceData = (data, page, rowsPerPage) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

// Define the hook itself. useEffect is employed in case there is dynamic adjustment of the data, i.e. adding or deleting rows 
const useTable = (data, page, rowsPerPage) => {
  const [tablePages, setTablePages] = useState([]);
  const [dataSlice, setDataSlice] = useState([]);

  useEffect(() => {
    const pages = calculatePagesRequired(data, rowsPerPage);
    setTablePages([...pages]);

    const slice = sliceData(data, page, rowsPerPage);
    setDataSlice([...slice]);
    
  }, [data, setTablePages, page, setDataSlice, rowsPerPage]);

  return { dataSlice, range: tablePages }
};

export default useTable;