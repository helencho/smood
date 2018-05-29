import React, { Component } from 'react'
import { RadialBarChart, RadialBar, Legend } from 'recharts'

class ActivitiesByMood extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { selectedMood } = this.props

        // Filter entries by selected mood 
        const filteredEntries = this.props.entries.filter(entry => {
            return entry.mood_name === selectedMood
        })

        // Count activities in an object 
        const activityTable = {}
        filteredEntries.forEach(entry => {
            if (!activityTable[entry.activity_name]) {
                activityTable[entry.activity_name] = 1
            } else {
                activityTable[entry.activity_name]++
            }
        })

        // Fill counted activities in a data table / array 
        let data = []
        const colors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658']
        let i = 0
        for (let act in activityTable) {
            data = [...data, { name: act, count: activityTable[act], fill: colors[i] }]
            i++
        }

        const style = {
            top: 0,
            left: 350,
            lineHeight: '24px'
        };

        return (
            <div>
                <h3>Things you did when you were {selectedMood}</h3>
                <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data}>
                    <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={true} dataKey='count' />
                    <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style} />
                </RadialBarChart>
            </div>
        )
    }
}

// Get all moods 

export default ActivitiesByMood