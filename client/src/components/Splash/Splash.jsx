import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Splash extends Component {
    render() {
        return (
            <div>
                <h1>mood</h1>
                <p>How are you today?</p>
                <Link to="/signup"><button>Create an account</button></Link>
                <Link to="/login">Login</Link>
            </div>
        )
    }
}

export default Splash