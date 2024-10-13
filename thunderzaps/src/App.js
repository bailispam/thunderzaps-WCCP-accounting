import React, { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Home } from "./pages/Home";
import { Grants } from "./pages/Grants";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            key={index}
            aria-labelledby={`simple-tab-${index}`}
            style={{width: '80vw'}}
            {...other}
        >
            {value === index && <>{children}</>}
        </div>
    );
}

const style = {
    main: {
        width: "100vw",
        height: "100vh",
        margin: 0,
        display: "flex",
        flexDirection: "row",
    },
};

export const App = () => {
    const [tab, setTab] = useState(0);

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <div style={style.main}>
            <Tabs
                orientation="vertical"
                value={tab}
                variant="scrollable"
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider", width: '20vw' }}
            >
                <Box height={50} />
                <Typography variant="h4" align="center">ThunderZaps</Typography>
                <Box height={50} />
                <Button endIcon={<AddIcon />}> New </Button>
                <Box height={25} />
                <Tab label="Item One" value={0} {...a11yProps(0)} />
                <Tab label="Item Two" value={1} {...a11yProps(1)} />
                <Tab label="Item Three" value={2} {...a11yProps(2)} />
                <Tab label="Item Four" value={3} {...a11yProps(3)} />
                <Tab label="Item Five" value={4} {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={tab} index={0}>
                <Home />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <Grants />
            </TabPanel>
            <TabPanel value={tab} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={tab} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={tab} index={4}>
                Item Five
            </TabPanel>
        </div>
    );
};
