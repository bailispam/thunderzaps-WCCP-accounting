import React from "react";

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";

export const Grants = () => {
    const [rows, setRows] = React.useState([]);
    
    React.useEffect(() => {
        axios({
            url: "http://129.146.245.100/grant",
            method: "GET"
        })
            .then((res) => {
                setRows(res.data);
            })
            
            .catch((err) => {});
    }, []);
        
    const columns = [
    { field: 'name', headerName: 'Grant Name', width: 200 },
    { field: 'grantor', headerName: 'Grantor', width: 150 },
    { field: 'grantAmount', headerName: 'Grantor', width: 150 },
    { field: 'allocated', headerName: 'Grantor', width: 150 },
    { field: 'remaining', headerName: 'Grantor', width: 150 },
    { field: 'restrictions', headerName: 'Grantor', width: 150 },
    { field: 'dueDate', headerName: 'Grantor', width: 100 },
    { field: 'notes', headerName: 'Grantor', width: 250 },
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
                <Typography variant="h2">Grants</Typography>
            </Box>
            <Box style={{ height: '100%', width: '100%' }}>
                <DataGrid columns={columns} rows={rows} /> 
            </Box>
        </Box>
    );
};
