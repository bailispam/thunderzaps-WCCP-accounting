import React from "react";

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export const Home = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: '1em',
                boxSizing: 'border-box',
            }}
        >
            <Typography variant="h1">Home</Typography>
        </Box>
    );
};
