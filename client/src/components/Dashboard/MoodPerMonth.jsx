import React, { Component } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

class MoodPerMonth extends Component {
    render() {
        console.log(this.props.entries)

        const data = [
            { name: 'Page A', uv: 4000, count: 2400, amt: 2400 },
            { name: 'Page B', uv: 3000, count: 1398, amt: 2210 },
            { name: 'Page C', uv: 2000, count: 9800, amt: 2290 },
            { name: 'Page D', uv: 2780, count: 3908, amt: 2000 },
            { name: 'Page E', uv: 1890, count: 4800, amt: 2181 },
            { name: 'Page F', uv: 2390, count: 3800, amt: 2500 },
            { name: 'Page G', uv: 3490, count: 4300, amt: 2100 },
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