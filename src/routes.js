import React from 'react'
import { Router, hashHistory } from 'react-router'

import App from './app/Index'
import Login from './app/Login'
import Context from './app/Context'


export default (
    <Router path="/" history={hashHistory}>
        <Router path="/" component={App}/>
        <Router path="login" component={Login}/>
        <Router path="context" component = {Context} />
    </Router>
);

// export default routes;