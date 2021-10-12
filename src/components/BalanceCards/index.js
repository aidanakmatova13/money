import React from 'react';
import Grid from '@mui/material/Grid';
import {Box, Card, CardContent, Typography} from "@mui/material";
import {useSelector} from "react-redux";

const BalanceCards = () => {
    const {currentBalance, initialAmount, costs} = useSelector(store => store.tasks)
    return (
        <Grid container spacing={2} sx={{marginBottom:'30px'}}>
            <Grid item xs={4}>
                <Card>
                    <Box sx={{bgcolor: 'warning.main', color: 'white'}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {initialAmount}$
                            </Typography>
                            <Typography sx={{fontSize: 14}}  gutterBottom>
                                Поступило
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <Box sx={{bgcolor: 'primary.main', color: 'white'}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {costs}$
                            </Typography>
                            <Typography sx={{fontSize: 14}} gutterBottom>
                                Расходы
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <Box sx={{bgcolor: 'error.main', color: 'white'}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {currentBalance}$
                            </Typography>
                            <Typography sx={{fontSize: 14}} gutterBottom>
                                Остаток
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
};

export default BalanceCards;