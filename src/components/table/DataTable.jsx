import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [

  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 250,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
    
    { id: 2, lastNamenome: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 1, lastNamenome: 'Snow', firstName: 'Jon', age: 35 },
    { id: 3, lastNamenome: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastNamenome: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastNamenome: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastNamenome: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastNamenome: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastNamenome: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastNamenome: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
