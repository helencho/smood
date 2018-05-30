import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

// Presentational
class MoodPerMonth extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { year, entries } = this.props

        // Count up all the moods felt in that year and month 
        const countAllMoods = (year, month) => {
            let monthMoods = {}
            const targetStart = new Date(`${year}-${(month - 1).toString()}`)
            const targetEnd = new Date(`${year}-${month}`)
            entries.map(entry => {
                const compare = new Date(entry.entry_date)
                if (compare > targetStart && compare <= targetEnd) {
                    if (!monthMoods[entry.mood_name]) {
                        monthMoods[entry.mood_name] = 1
                    } else {
                        monthMoods[entry.mood_name]++
                    }
                }
            })
            return monthMoods
        }

        // Get the most felt mood in a given mood object 
        const getMostFeltMood = (obj) => {
            const moodCount = Object.values(obj).sort((a, b) => b - a)
            for (let mood in obj) {
                if (obj[mood] === moodCount[0]) {
                    return { mood: mood, count: obj[mood] }
                }
            }
            return {}
        }

        let monthlyMoodData = []
        for (let i = 1; i < 13; i++) {
            monthlyMoodData.push(getMostFeltMood(countAllMoods(year - 1, i)))
        }

        console.log(monthlyMoodData)

        const data = [
            { name: 'January', uv: 'happy', count: 2400 },
            { name: 'February', uv: 'angry', count: 1398 },
            { name: 'March', uv: 'upset', count: 9800 },
            { name: 'April', uv: 'happy', count: 3908 },
            { name: 'May', uv: 'sad', count: 4800 },
            { name: 'June', uv: 'excited', count: 3800 },
            { name: 'July', uv: 'relaxed', count: 4300 },
        ];

        return (
            <div>
                <h3>Most Popular Moods by Month</h3>
                <BarChart width={600} height={300} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </div>
        )
    }
}

export default MoodPerMonth