import React, { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Home } from "./pages/Home";
import { Grants } from "./pages/Grants";
import { Funds } from "./pages/Funds";
import { Budgeting } from "./pages/Budgeting";
import { Donors } from "./pages/Donors";
import { IncomeStatement } from "./pages/Income";
import { IRSFilings } from "./pages/IRSFilings";
import { Dashboard } from "./pages/Dashboard";

import { Box, Button, Input, Modal, Paper, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { GrantForm } from "./forms/GrantForm";
import { BudgetForm } from "./forms/BudgetForm";
import { FundForm } from "./forms/FundForm";
import { DonorForm } from "./forms/DonorForm";
import { TaxForm } from "./forms/TaxForm";


// separated to be able to import universally, sharin is carin'
import style from "./style"

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

export const App = () => {
    const [tab, setTab] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [query, setQuery] = useState("");
    const [form, setForm] = useState([]);
    
    const handleChange = (event, newValue) => {
        setTab(newValue);
    };
    
    const forms = [ 
        ["Grant", <GrantForm setForm={setForm} />],
        ["Donanation", <DonorForm  setForm={setForm} />],
        ["Budget", <BudgetForm  setForm={setForm} />],
        ["Fund", <FundForm  setForm={setForm} />],
        ["Tax Form", <TaxForm  setForm={setForm} />],
    ]
    
    const showForms = (query) => {
        return forms.filter(([name, _]) => name.toLowerCase().includes(query.toLowerCase())).map(([text, data]) => [text, data]);
    }
    
    return (
        <div style={style.main}>
            {
            <Modal open={showModal}>
                <Box width='100vw' height='100vh' display='flex' justifyContent='center' alignItems='center'>
                    <Paper sx={{padding: '2em', height: '30vh', width: '50vw', gap: '2em', display: 'flex', flexDirection: 'column'}}>
                        <Box display='flex' justifyContent='flex-end'>
                            <Button onClick={() => setShowModal(false)}>X</Button>
                        </Box>
                        <Input placeholder="New..." fullWidth onChange={e => setQuery(e.target.value)} />
                        <Box flexGrow={1} display='flex' flexDirection='column'overflow='scroll' gap="20px" > 
                            {showForms(query).map((data, i) => <Button key={i} svariant="contained" onClick={() => {setShowModal(false); setForm(data)}}>{data[0]}</Button>)}
                        </Box>
                    </Paper>
                </Box> 
            </Modal>
            }
            {
            <Modal open={form.length !== 0}>
                <Box width='100vw' height='100vh' display='flex' justifyContent='center' alignItems='center'>
                    <Paper sx={{padding: '2em', height: '80vh', width: '50vw', gap: '2em', display: 'flex', flexDirection: 'column'}}>
                        <Box display='flex' justifyContent='flex-end'>
                            <Button onClick={() => setForm([])}>X</Button>
                        </Box>
                        {form[1]}
                    </Paper>
                </Box>
            </Modal>
            }
            <Tabs
                orientation="vertical"
                value={tab}
                variant="scrollable"
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider", width: '20vw' }}
            >
                <Box height={50} />
                <Typography variant="h4" align="center" onClick={() => setTab(0)} sx={{ cursor: 'pointer', userSelect: 'none' }}>
                    Colossal
                </Typography>
                <Box height={50} />
                <Button endIcon={<AddIcon />} onClick={() => setShowModal(x => !x)}> New </Button>
                <Box height={25} />
                <Tab label="Dashboard" value={7} {...a11yProps(7)} />
                <Tab label="Funds" value={1} {...a11yProps(1)} />
                <Tab label="Grants" value={2} {...a11yProps(2)} />
                <Tab label="Donors" value={3} {...a11yProps(3)} />
                <Tab label="Budget" value={4} {...a11yProps(4)} />
                <Tab label="Income" value={5} {...a11yProps(5)} />
                <Tab label="Tax Filings" value={6} {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={tab} index={7}>
                <Dashboard />
            </TabPanel>
            <TabPanel value={tab} index={0}>
                <Home />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <Funds />
            </TabPanel>
            <TabPanel value={tab} index={2}>
                <Grants />
            </TabPanel>
            <TabPanel value={tab} index={3}>
                <Donors />
            </TabPanel>
            <TabPanel value={tab} index={4}>
                <Budgeting />
            </TabPanel>
            <TabPanel value={tab} index={5}>
                <IncomeStatement />
            </TabPanel>
            <TabPanel value={tab} index={6}>
                <IRSFilings />
            </TabPanel>

        </div>
    );
};
