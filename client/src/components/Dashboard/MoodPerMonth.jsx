import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

// Presentational
class MoodPerMonth extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // console.log(this.props.entries)
        // Grab the most popular moods in a month (for 12 months) 
        // January => happy => count 
        // February => angry => count 
        // So on... 

        // console.log(this.props.entries)
        let may = {}
        let monthMay = new Date('2018-06')
        console.log(monthMay)
        this.props.entries.map(entry => {
            if (entry.entry_date <= monthMay) {
                if (!may[entry.mood_name]) {
                    may[entry.mood_name] = 1
                } else {
                    may[entry.mood_name]++
                }
            }
        })

        console.log(may)
        // Map through the entries 
        // If entry is dated for ____ month, 
        // For all entries dated January, count the most repeated mood 
        // For all entries dated February, count the most repeated mood 

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