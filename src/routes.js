import React from 'react'
import { Router, hashHistory } from 'react-router'

import App from './app/index'
import Login from './app/login'
import App2 from './app/index'
import Login2 from './app/login'

export default (
    <Router path="/" history={hashHistory}>
        <Router path="index" component={App}/>
        <Router path="login" component={Login}/>
        <Router path="second/index" component={App2}/>
        <Router path="second/login" component={Login2}/>
    </Router>
);

// export default routes;