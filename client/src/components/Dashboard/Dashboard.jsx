import React, { Component } from 'react'
import MoodsByYear from './MoodsByYear'
import ActivitiesByMood from './ActivitiesByMood'
import MoodPerMonth from './MoodPerMonth'
import PopularActivities from './PopularActivities'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>

                <MoodsByYear />

                <ActivitiesByMood/>

                <MoodPerMonth/>

                <PopularActivities />

            </div>
        )
    }
}


export default Dashboard