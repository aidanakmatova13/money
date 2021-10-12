import React from 'react';
import {Box, Button, Grid, TextField} from "@mui/material";
import DatePicker from '@mui/lab/DatePicker';
import {useFormik} from "formik";
import * as Yup from 'yup';
import {addTask} from "../../redux/actions/tasksActions";
import {useDispatch} from "react-redux";


const ExpensesForm = () => {
    const [date, setDate] = React.useState('');
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            // date: '',
            title: '',
            amount: ''
        },
        validationSchema: Yup.object({
            // date: Yup.string().required('Required'),
            title: Yup.string().required('Required'),
            amount: Yup.string().required('Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            values.date = date.getFullYear()
            dispatch(addTask(values))
            resetForm(values)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <DatePicker
                        renderInput={(params) =>
                            <TextField {...params} id='date' sx={{width: '100%'}}/>}
                        label="Выберите дату"
                        value={date}
                        onChange={(value) => setDate(value)}
                        name='date'
                        error={formik.touched.date && formik.errors.date}
                        helperText={formik.touched.date && formik.errors.date}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField sx={{width: '100%'}}
                               id="title"
                               label="Заголовок"
                               variant="standard"
                               color='primary'
                               onChange={formik.handleChange}
                               value={formik.values.title}
                               name='title'
                               error={formik.touched.title && formik.errors.title}
                               helperText={formik.touched.title && formik.errors.title}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField sx={{width: '100%'}}
                               id="amount"
                               label="Сумма"
                               variant="standard"
                               color='error'
                               value={formik.values.amount}
                               onChange={formik.handleChange}
                               name='amount'
                               error={formik.touched.amount && formik.errors.amount}
                               helperText={formik.touched.amount && formik.errors.amount}
                    />
                </Grid>
            </Grid>
            <Box>
                <Button type="submit" variant='contained' sx={{marginLeft: 'auto', display: 'block', marginTop: '10px', marginBottom: '30px'}}>Добавить</Button>
            </Box>
        </form>
    );
};

export default ExpensesForm;