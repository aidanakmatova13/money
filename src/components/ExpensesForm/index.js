import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import DateTimePicker from '@mui/lab/DateTimePicker';


const ExpensesForm = () => {
    const [date, setDate] = React.useState('');

    return (
        <Box>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '270px' },
                    display: 'flex',
                    alignItems: 'center',
                }}
                noValidate
                autoComplete="off"
            >
                <DateTimePicker
                    renderInput={(params) =>
                        <TextField {...params} />}
                    label="Выберите дату"
                    value={date}
                    onChange={(newValue) =>{
                        setDate(newValue)
                    }}
                />
                <TextField id="title" label="Заголовок" variant="standard" color ='primary'/>
                <TextField id="sum" label="Сумма" variant="standard" color ='error'/>
            </Box>
            <Button variant='contained' sx={{marginLeft: 'auto'}}>Добавить</Button>
        </Box>
        );
};

export default ExpensesForm;