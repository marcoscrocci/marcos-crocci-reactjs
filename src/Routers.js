import React from 'react'
import {
    //BrowserRouter as Router,
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Test from './pages/Test';
import Main from './pages/Main';
import TestFirebase from './pages/TestFirebase';

export default function Routers(props) {
    return (
        <Router>       
            <Switch>            
                <Route path='/test' component={Test} />
                <Route path='/testfirebase' component={TestFirebase} />
                <Route path='/' component={Main} />
                <Redirect from='*' to='/' />
            </Switch>
        </Router>
    )
}