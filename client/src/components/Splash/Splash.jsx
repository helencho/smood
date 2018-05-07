import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Splash extends Component {
    render() {
        return (
            <div>
                <h1>mood</h1>
                <Link to="/signup"><button>Signup</button></Link>
                <Link to="/login"><button>Login</button></Link>
            </div>
        )
    }
}

export default Splash