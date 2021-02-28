import React from 'react';
import TableContainer from "./Components/Table/TableContainer";
import {BrowserRouter, Route} from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Route exact path="/" render={() => <MainPage/>}/>
                <Route path="/users/:row" render={() => <TableContainer/>}/>
            </div>
        </BrowserRouter>
    );
}

export default App;