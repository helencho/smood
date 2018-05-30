import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEntries } from '../../actions/entry_actions'
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

// Presentational 
class MoodsByYear extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { entries, year } = this.props

        // Get all the entries in the target year 
        const lowTarget = new Date((year - 1).toString())
        const target = new Date(year)
        const targetEntries = entries.filter(entry => {
            const compare = new Date(entry.entry_date)
            return compare > lowTarget && compare <= target
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

        // Fill counted moods in a data table / array  
        let moodData = []
        for (let mood in moodTable) {
            moodData = [...moodData, { subject: mood, A: moodTable[mood] }]
        }

        return (
            <div className="moods-by-year-container">
                <h3>Let's look at your moods in {year - 1}</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <RadarChart data={moodData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />
                        <Radar name="TestUser" dataKey="A" stroke="#ffffff" fill="#ffffff" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default MoodsByYear 