import React from 'react'
import Navbar from '../Navbar'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { alpha, styled } from '@mui/material/styles';

function Student() {
    const [value, setValue] = React.useState('Acedmic Record');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const CustomTab = styled(Tab)(({ theme }) => ({
        width: 300,
        '&.Mui-selected': {
            fontWeight: 800,
            color: '#00501E'
        }
    }));

    return (
        <div style={{
            gap: ' 1rem',
            paddingleft: ' 0.8rem',
            paddingright: '0.8rem'
        }}>
            <Navbar></Navbar>
            <Box sx={{ width: '100%', typography: 'body1', paddingLeft: "5rem" }}>
                <TabContext value={value}>
                    <Box  >
                        <TabList onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: "#abfe2c ", color: "#abfe2c " } }} aria-label="lab API tabs example">
                            <CustomTab label="Acedmic Record" value="Acedmic Record" />
                            <CustomTab label="Courses Taken" value="Courses Taken" />
                        </TabList>
                    </Box>
                    <TabPanel value="Acedmic Record">Item One</TabPanel>
                    <TabPanel value="Courses Taken">Item Two</TabPanel>

                </TabContext>
            </Box>
        </div>
    )
}

export default Student