import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

// Presentational
class MoodPerMonth extends Component {
    render() {
        console.log(this.props.entries)
        // Grab the most popular moods in a month (for 12 months) 
        // January => happy => count 
        // February => angry => count 
        // So on... 

        const moodData = [
            { name: 'January' }
        ]

        const data = [
            { name: 'Page A', uv: 'happy', count: 2400, amt: 2400 },
            { name: 'Page B', uv: 'angry', count: 1398, amt: 2210 },
            { name: 'Page C', uv: 'upset', count: 9800, amt: 2290 },
            { name: 'Page D', uv: 'happy', count: 3908, amt: 2000 },
            { name: 'Page E', uv: 'sad', count: 4800, amt: 2181 },
            { name: 'Page F', uv: 'excited', count: 3800, amt: 2500 },
            { name: 'Page G', uv: 'relaxed', count: 4300, amt: 2100 },
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