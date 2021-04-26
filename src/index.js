import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { BrowserRouter } from 'react-router-dom'

const history = createBrowserHistory();



ReactDOM.render(
    <Router history={history}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Router>, document.getElementById("root"));
