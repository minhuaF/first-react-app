import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory, browserHistory } from 'react-router'
import routes from './routes.js'

ReactDOM.render(routes, document.getElementById('app'));