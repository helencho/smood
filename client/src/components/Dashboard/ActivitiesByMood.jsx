import React, { Component } from 'react'
// import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

class ActivitiesByMood extends Component {
    render() {
        return (
            <div>
                <h3>Mood in Activities (every activity logged per mood, based on mood clicked)</h3>
                <p><a href="https://jsfiddle.net/alidingling/9km41z5z/" target="_blank">Simple Radial Bar Chart</a></p>
            </div>
        )
    }
}

// Get all moods 

export default ActivitiesByMood