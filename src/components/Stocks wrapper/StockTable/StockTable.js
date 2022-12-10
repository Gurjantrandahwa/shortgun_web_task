import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, Tab, Tabs} from "@mui/material";
import "./stockTable.scss";

function createData(name, calories, fat, carbs) {
    return {name, calories, fat, carbs};
}

const rows = [
    createData('ADANIENT', 4023.00, 2.36, 2463149),
    createData('HIDUNILVR', 2645.10, 0.96, 1066700),
    createData('LT', 2099.55, 0.67, 986221),
    createData('BRITANNIA', 4427.50, 0.55, 226307),
];

export default function StockTable() {
    const [value, setValue] = useState('one');
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
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.action.hover,
        },

        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return  <div>
        <p>Top 5 Stocks-Nifty 50</p>
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}

            >

                <Tab value="one" label="Gainers/Losers" />
                <Tab value="three" label="Most Active" />
            </Tabs>
        </Box>
        <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 450 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>SYMBOL</StyledTableCell>
                        <StyledTableCell align="right">LTD</StyledTableCell>
                        <StyledTableCell align="right">%CHNG</StyledTableCell>
                        <StyledTableCell align="right">VOLUME</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>



}
