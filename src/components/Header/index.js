import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {clearAll} from "../../redux/actions/tasksActions";

const Header = () => {
    const dispatch = useDispatch()

    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Aidana's money
                        </Typography>
                        <Button onClick={() => dispatch(clearAll())} color="inherit">Сбросить всё!</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
};

export default Header;