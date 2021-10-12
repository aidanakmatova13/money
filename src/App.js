import * as React from 'react'
import Header from "./components/Header";
import BalanceCards from "./components/BalanceCards";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesTable from "./components/ExpensesTable";
import {Container} from "@mui/material";
import GreetingModal from "./components/GreetingModal";


function App() {
    return (
        <div>
            <Header/>
            <Container maxWidth="md">
                <h1>Ваш лист расходов</h1>
                <BalanceCards/>
                <ExpensesForm/>
                <ExpensesTable/>
            </Container>
            <GreetingModal/>
        </div>
    );
}

export default App;
