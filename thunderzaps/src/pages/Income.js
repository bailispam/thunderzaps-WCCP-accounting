import React from "react";

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

export const IncomeStatement = () => {
    const [rows, setRows] = React.useState([]);
    
    React.useEffect(() => {
        axios({
            url: "http://129.146.245.100/incomestatement",
            method: "GET"
        })
            .then((res) => {
                setRows(res.data);
            })
            
            .catch((err) => {});
    }, []);
        
    const columns = [
    { field: 'revenueSource', headerName: 'Revenue Source', width: 200 },
    { field: 'unrestrictedFunds', headerName: 'Unrestricted Funds', width: 150 },
    { field: 'restrictedFunds', headerName: 'Restricted Funds', width: 150 },
    { field: 'total', headerName: 'Total', width: 200 },
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
                <Typography variant="h2">IncomeStatement</Typography>
            </Box>
            <Box style={{ height: '100%', width: '100%' }}>
                <DataGrid columns={columns} rows={rows} /> 
            </Box>
        </Box>
    );
};