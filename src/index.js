import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


ReactDOM.render(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Provider store={store}>
        <App/>
    </Provider>
    </LocalizationProvider>,
    document.getElementById('root')
);
