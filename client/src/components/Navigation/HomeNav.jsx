import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomeNav extends Component {
    render() {
        return (
            <div>
                <Link to="/home">mood</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/custom">Customize</Link>
                <Link to="/profile">Profile</Link>
            </div>
        )
    }
}

export default HomeNav