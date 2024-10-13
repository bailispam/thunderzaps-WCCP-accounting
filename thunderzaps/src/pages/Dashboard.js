import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
    dashboard: {
        display: "flex",
        flexDirection: "column",      // Arrange items vertically
        justifyContent: "center",     // Center vertically
        alignItems: "center",         // Center horizontally
        height: "100vh",              // Full viewport height
        width: "100vw",               // Full viewport width
        textAlign: "center",
        padding: "0 20px",            // Add some padding for smaller screens
        boxSizing: "border-box",      // Include padding in width/height
    },
    header: {
        fontSize: "50px",             // Make the title a bit smaller
        marginTop: "10px",            // Move the title up slightly
        marginBottom: "20px",         // Space below the header
    },
    message_center: {
        marginBottom: "30px",         // Space below the welcome message
    },
    list_title: {
        marginBottom: "10px",
    },
    list_feat: {
        listStyleType: "disc",        // Bullet points
        paddingLeft: "0",             // No left padding for centered list
    },
    list_item: {
        marginBottom: "10px",         // Space between list items
    }
};

export const Dashboard = () => {
    return (
        <Box sx={style.dashboard}>
            <Typography variant="h1" sx={style.header}>Colossal</Typography>
            <Typography variant="h3" sx={style.message_center}>
                Welcome to Colossal, where accounting is made easier, tailored specially for nonprofits!
            </Typography>
            <Typography variant="h3" sx={style.list_title}>
                Some features that we offer:
            </Typography>
            <ul style={style.list_feat}>
                <li style={style.list_item}>Fund Accounting</li>
                <li style={style.list_item}>Donor Management</li>
                <li style={style.list_item}>Grant Tracking</li>
                <li style={style.list_item}>ISR Filing</li>
            </ul>
        </Box>
    );
};
