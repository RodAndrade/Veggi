import React from "react";

import DataTable from 'react-data-table-component';

import './DataTable.styles.scss';

const DTable = (props) => {
  return (
    <DataTable
      {...props}
    />
  );
};

export default DTable;
