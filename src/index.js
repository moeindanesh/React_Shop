import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = (
    <Router>
        <Route path="/" component={ App } />
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
