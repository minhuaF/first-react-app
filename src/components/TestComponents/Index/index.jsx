import React from 'react'
import { withRouter, Link } from 'react-router'

class Index extends React.Component {
    render(){
        return(
            <div>
                <h1 className="title">This is Index Page</h1>
                <Link to="context">Link to Context</Link>
            </div>
        )
    }
}

module.exports = withRouter(Index);