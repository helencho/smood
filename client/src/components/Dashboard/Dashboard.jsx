import React, { Component } from 'react'
import Legend from './Legend'
import Monthly from './Monthly'
import Yearly from './Yearly'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <Legend />
                <Monthly />
                <Yearly />
            </div>
        )
    }
}

export default Dashboard