import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";

const Header = () => {
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Aidana's money
                        </Typography>
                        <Button color="inherit">Сбросить всё!</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
};

export default Header;