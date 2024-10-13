import React from 'react';
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

// component being exported
export const FundAccounting = () => {
    // set null row state to implement the calls and the editing in the table
    const [rows, setRows] = React.useState([]);
    const [Id, setId] =  React.useState(0);
    const columns = [
    { field: 'id', headerName: 'Funding source', width: 130, editable: true },
    { field: 'firstName', headerName: 'Type', width: 100, editable:true },
    {
      field: 'totalAmount',
      headerName: 'Total amount',
      type: 'number',
      width: 130,
      editable: true
    },
    {
        field: 'allocatedAmount',
        headerName: 'Total amount',
        type: 'number',
        width: 130,
        editable: true
    }, 
    {
        field: 'remainingBalance',
        headerName: 'Remaining balance',
        type: 'number',
        width: 130,
        editable: true
    },   
    { 
        field: 'restrictions',
        headerName: 'Restriction',
        editable: true
    },
    { 
        field: 'notes',
        headerName: 'Notes',
        editable: true
    }
  ];
    
    const rowAddition = () => {
        // addition of the last row to the
        const lastRow = {'id': Id, 'totalAmount': newTotal ,'allocatedAmount': newAllocated, 'remainingBalance': newRemaining, 'restrictions': newRestriction, 'notes': newNotes}
        setRows((prev) => [...prev, lastRow])
        setId(Id + 1);
    }

    const callbackRowUpdate = (newRow) => {
        const updatedRows = rows.map((row) => (row.id === newRow.id ? newRow : row));
        setRows(updatedRows);
        return newRow;
    }

    return (
        <div>   
            <Paper sx={{ height: 400, width: '100%' }}>
                <Button variant="contained" onClick={rowAddition()} sx={{ marginBottom: 2 }}>
                 Add Row
                </Button>
                <DataGrid
                    rows={rows}
                    processRowUpdate = {callbackRowUpdate}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[1, 1000]}
                    checkboxSelection
                    sx={{ border: 0 }}
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Paper>
            <Button variant="contained" onClick={submitForm()} sx={{ marginBottom: 2 }}>
                 Submit
            </Button>
        </div>

    );

    
}
export default FundAccounting;
