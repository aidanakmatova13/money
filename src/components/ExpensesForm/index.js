import React from 'react';
import {Box, Button, Grid, TextField} from "@mui/material";
import DateTimePicker from '@mui/lab/DateTimePicker';


const ExpensesForm = () => {
    const [date, setDate] = React.useState('');

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{marginBottom: '30px'}}
        >
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <DateTimePicker
                        renderInput={(params) =>
                            <TextField {...params} id='date' sx={{width: '100%'}}/>}
                        label="Выберите дату"
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue)
                        }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField sx={{width: '100%'}} id="title" label="Заголовок" variant="standard" color='primary'/>
                </Grid>
                <Grid item xs={4}>
                    <TextField sx={{width: '100%'}} id="sum" label="Сумма" variant="standard" color='error'/>
                </Grid>
            </Grid>
            <Box>
                <Button variant='contained' sx={{marginLeft: 'auto', display: 'block', marginTop: '10px'}}>Добавить</Button>
            </Box>
        </Box>
    );
};

export default ExpensesForm;