import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Customize extends Component {
    render() {
        return (
            <div>
                <h1>Customize Things</h1>
                <Link to="/custom/mood">Moods</Link>
                <Link to="/custom/activity">Activities</Link>
            </div>
        )
    }
}

export default Customize