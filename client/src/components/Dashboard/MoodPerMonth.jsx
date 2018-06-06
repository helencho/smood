import React, { Component } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import moment from 'moment'
import CustomTooltip from './CustomTooltip'

// Presentational
class MoodPerMonth extends Component {
    render() {
        const { year, entries } = this.props

        // Count up all the moods felt in that year and month 
        const countAllMoods = (year, month) => {
            let monthMoods = {}

            const targetStart = new Date(`${year}-${(month - 1).toString()}`) // 2 => 2018-01-01
            const targetEnd = new Date(`${year}-${month}`) // 2 => 2018-02-01

            entries.forEach(entry => {
                const compare = new Date(entry.entry_date)
                if (compare >= targetStart && compare < targetEnd) {
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
        const getMostFeltMood = (obj, month) => {
            const moodCount = Object.values(obj).sort((a, b) => b - a)
            let name = month
            let mood = ''
            let count = 0
            for (let md in obj) {
                if (obj[md] === moodCount[0]) {
                    mood = md
                    count = obj[md]
                    break
                }
            }
            return { name, mood, count }
        }

        // Data to be rendered in a graph 
        let data = []
        const months = moment.monthsShort()
        for (let i = 0; i < months.length; i++) {
            let month = i + 2
            data.push(getMostFeltMood(countAllMoods(year - 1, month), months[i]))
        }

        return (
            <div className="moods-per-month-container">
                <h3>Your most popular moods by month</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip data={data} />} />
                        <Legend />
                        <Bar dataKey="count" fill="#F97794" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default MoodPerMonth