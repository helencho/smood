import React, { Component } from 'react'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

class MoodsByYear extends Component {
    render() {
        // Allow user to click on a year 
        // By default, year will be 2018 (for now) 
        // Filter all moo

        return (
            <div>
                <h3>Your Moods by Year (by year, based on year clicked)</h3>
                <p><a href="https://jsfiddle.net/alidingling/6ebcxbx4/" target="_blank">Simple radar chart</a></p>
            </div>
        )
    }
}

// Get all entries 


export default MoodsByYear