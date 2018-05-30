import React, { Component } from 'react'
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from 'recharts'

class ActivitiesByMood extends Component {

    render() {
        const { selectedMood, handleSelectChange, year, entries } = this.props

        // Get all the entries in the target year and filter by selected mood 
        const lowTarget = new Date((year - 1).toString())
        const target = new Date(year)
        const filteredEntries = entries.filter(entry => {
            const compare = new Date(entry.entry_date)
            return compare > lowTarget && compare <= target
        }).filter(entry => {
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

        // Bar chart styles 
        const style = {
            top: 0,
            left: 350,
            lineHeight: '24px'
        };

        return (
            <div className="activities-by-mood-container">
                <div className="title">
                    <h3>Things you did when you were</h3>
                    <select value={selectedMood} name='selectedMood' onChange={handleSelectChange}>
                        {this.props.moods.map((mood, index) => {
                            return (
                                <option key={index} value={mood.mood_name}>{mood.mood_name}</option>
                            )
                        })}
                    </select>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                    <RadialBarChart cx="50%" cy="50%" outerRadius="80%" barSize={10} data={data}>
                        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={true} dataKey='count' />
                        <Legend iconSize={10} width="50%" height="50%" layout='vertical' verticalAlign='middle' wrapperStyle={style} />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

// Get all moods 

export default ActivitiesByMood