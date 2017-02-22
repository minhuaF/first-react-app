import React from 'react'
import { withRouter, Link } from 'react-router'

class App extends React.Component {
    render(){
        return(
            <div>
                <h1>This is App Page</h1>
                <Link to="/login">Go to Login</Link>
            </div>
        )
    }
}

module.exports = withRouter(App);
