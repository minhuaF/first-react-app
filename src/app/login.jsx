import React from 'react'
import { withRouter, Link } from 'react-router'

class Login extends React.Component {
    render(){
        return(
            <div>
                <h1>This is Login Page</h1>
                <Link to="/index">Back to Index</Link>
            </div>
        )
    }
}

module.exports = withRouter(Login);