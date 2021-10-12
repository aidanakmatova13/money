import React from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {delItem} from "../../redux/actions/tasksActions";

const ExpensesTable = () => {
    const tasks = useSelector(store => store.tasks.tasks)
    const dispatch = useDispatch()
    return (
        <>
            {tasks.length ?
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead sx={{backgroundColor: 'lightblue'}}>
                            <TableRow>
                                <TableCell>Дата</TableCell>
                                <TableCell align="right">На что потратили</TableCell>
                                <TableCell align="right">Сумма</TableCell>
                                <TableCell align="right">Удалить</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tasks.map((row, idx) => (
                                <TableRow
                                    key={idx}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">{row.date}</TableCell>
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.amount}</TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => dispatch(delItem(idx))} variant='light'>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> :
                <h2>Список пуст</h2>}
        </>
    );
};

export default ExpensesTable;