import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEntries } from '../../actions/entry_actions'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

class MoodsByYear extends Component {
    render() {
        const { entries, year } = this.props

        // Get all the entries in the target year 
        const target = new Date(year)
        const targetEntries = entries.filter(entry => {
            const compare = new Date(entry.entry_date)
            return compare <= target
        })

        // Count all the moods felt in the year 
        let moodTable = {}
        targetEntries.forEach(entry => {
            if (!moodTable[entry.mood_name]) {
                moodTable[entry.mood_name] = 1
            } else {
                moodTable[entry.mood_name]++
            }
        })

        // Put counted moods in a table 
        let moodData = []
        for (let mood in moodTable) {
            moodData = [...moodData, { subject: mood, A: moodTable[mood] }]
        }

        return (
            <div>
                <h3>Your Moods in {year - 1}</h3>
                <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={moodData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="TestUser" dataKey="A" stroke="#ffffff" fill="#ffffff" fillOpacity={0.6} />
                </RadarChart>
            </div>
        )
    }
}

export default MoodsByYear 