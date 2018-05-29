import React, { Component } from 'react'
import { RadialBarChart, RadialBar, Legend } from 'recharts'

class ActivitiesByMood extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { selectedMood, handleSelectChange, year, entries } = this.props

        // Filter entries by selected mood 
        // const filteredEntries = this.props.entries.filter(entry => {
        //     return entry.mood_name === selectedMood
        // })

        // Get all the entries in the target year 
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
                        {this.props.moods.map(mood => {
                            return (
                                <option value={mood.mood_name}>{mood.mood_name}</option>
                            )
                        })}
                    </select>
                </div>
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