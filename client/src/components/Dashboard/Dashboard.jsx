import React, { Component } from 'react'
import MoodsByYear from './MoodsByYear'
import ActivitiesByMood from './ActivitiesByMood'
import MoodPerMonth from './MoodPerMonth'
import PopularActivities from './PopularActivities'
import MonthInMoods from './MonthInMoods'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>

                <MoodsByYear />

                <ActivitiesByMood />

                <MoodPerMonth />

                <PopularActivities />

                <MonthInMoods />

            </div>
        )
    }
}


export default Dashboard