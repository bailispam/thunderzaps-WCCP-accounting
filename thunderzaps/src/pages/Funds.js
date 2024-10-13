import React from "react";

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

export const Funds = () => {
    const [rows, setRows] = React.useState([]);
    
    React.useEffect(() => {
        axios({
            url: "http://129.146.245.100/funding",
            method: "GET"
        })
            .then((res) => {
                setRows(res.data);
            })
            
            .catch((err) => {});
    }, []);
        
    const columns = [
    { field: 'source', headerName: 'Fund Source', width: 200 },
    { field: 'restricted', headerName: 'Type', width: 150 },
    { field: 'totalAmount', headerName: 'Total Amount', width: 150 },
    { field: 'allocatedAmount', headerName: 'Allocated Amount', width: 150 },
    { field: 'remainingBalance', headerName: 'Remaining Balance', width: 150 },
    { field: 'restrictions', headerName: 'Restrictions', width: 150 },
    { field: 'notes', headerName: 'Notes', width: 200 },
    ];
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: '1em',
                boxSizing: 'border-box',
            }}
        >
            <Box style={{ height: 100, width: '100%' }}>
                <Typography variant="h2">Funds</Typography>
            </Box>
            <Box style={{ height: '100%', width: '100%' }}>
                <DataGrid columns={columns} rows={rows} /> 
            </Box>
        </Box>
    );
};