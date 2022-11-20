import React from 'react'
import Navbar from '../Navbar'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { alpha, styled } from '@mui/material/styles';
import HARVARD from "../../assets/HarvadLogo.png";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./index.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Student() {
    const [value, setValue] = React.useState('Acedmic Record');
    const [open, setOpen] = React.useState(false);

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
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(Courses, Grades) {
        return { Courses, Grades };
    }
    const rows = [
        createData('Pyhton Course', 80),
        createData('Artifical Intelligence', 70),

    ];
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
                    <TabPanel value="Academic Record">Academic Record</TabPanel>
                    <TabPanel value="Courses Taken">
                        <div className='courserecord__container' onClick={handleOpen} >
                            <div >
                                <img className='record__logo' src={HARVARD} alt="record logo"></img>
                            </div>
                            <div className='name__conatiner'>
                                <h3>Rishabh Raghwendra</h3>
                                <p className="course">Python Course</p>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 300 }} aria-label="customized table">
                                                <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell>Courses</StyledTableCell>
                                                        <StyledTableCell align="right">Grades</StyledTableCell>

                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <StyledTableRow key={row.Courses}>
                                                            <StyledTableCell component="th" scope="row">
                                                                {row.Courses}
                                                            </StyledTableCell>
                                                            <StyledTableCell align="right">{row.Grades}</StyledTableCell>


                                                        </StyledTableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                    </Box>

                                </Modal>
                            </div>

                        </div>
                    </TabPanel>

                </TabContext>
            </Box>
        </div>
    )
}

export default Student