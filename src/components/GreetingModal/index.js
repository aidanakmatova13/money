import React, {useState} from 'react';
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";

const GreetingModal = () => {
    const [open, setOpen] = React.useState(true);
    const dispatch = useDispatch()
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
    const [username, setUsername] = useState('')
    const handleChange = (e) => setUsername(e.target.value)
    const handleSubmit = () =>{
        dispatch({type: 'ADD_USERNAME', payload: username})
        setOpen(false)
    }
    return (
        <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <form onSubmit={handleSubmit}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Введите ваше имя
                    </Typography>
                    <TextField sx={{width: '100%'}}
                               id="title"
                               label="Введите имя"
                               variant="standard"
                               color='primary'
                               onChange={handleChange}
                               value={username}
                               name='username'
                               required
                               type='text'
                    />
                    <Button variant='contained' sx={{display: 'block', marginLeft: 'auto', marginTop: '20px'}} type='submit'>Далее</Button>
                </Box>
            </form>
        </Modal>
    );
};

export default GreetingModal;